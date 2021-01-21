/**
 * clone
 */
const path = require('path');
const join = require('path').join;
const fs = require('fs');
const os = require('os');
const shell = require('shelljs');
const utils = require('../utils');
const injectConfigList = require('../injectionList/index');//输出 处理后 的 微前端注入配置项目
const copy_rename = require('../config').copy_rename;
const osType = os.type(); // system type

/**
 * clone business repositories
 */
exports.cloneRepositories = () => {

  //require clone shell script
  const shell_clone = path.resolve(__dirname, './clone.sh');

  /**
   * Remove configuration items that not to clone ( isOwner = true )
   * 删除不用克隆操作的配置项 ( isOwner = true )
   */
  const filterModules = injectConfigList.filter(module => !module.isOwner);

  /**
   * Operate the filtered injection configuration sequence - 将过滤过的注入配置数列进行操作：
   * 1、Clone is classified according to its name and branch path - 依据 clone 路径  和 分支名称 进行 归类拆解
   * 2、Simplify the classified data - 对归类后的数据进行精简
   * 后续的clone 操作首先依据clone path 与 clone branch 进行 （大幅减少clone次数)
   * @type {Array}
   */
  const injectModules = utils.createModulesGroup(filterModules);

  /**
   * 根据所处理的注入配置清单进行循环clone处理，步骤如下：
   * 1、克隆业务仓库模块代码至临时目录
   * 2、从零时文件夹中，过滤并复制所需业务模块至最终文件夹中
   * 3、删除零时文件夹
   * 4、重复循环
   */
  injectModules.forEach(module => {

    shell.rm('-rf', utils.inJectPath().repositorie_tmp);

    fs.mkdirSync(utils.inJectPath().repositorie_tmp);

    const branch_name = module.branch || 'master';

    //切分模块名 （数组 => 字符转 分割)
    const module_names = module.childreModulesNames.join(',');

    //clone 计时开始：初始时间
    const start = process.hrtime.bigint();

    //windows operating system
    if (osType === 'Windows_NT') {

      console.log(`\x1B[34m Cloning target: ${module_names} \x1B[0m \n`);
      console.log(`\x1B[32m Cloning branch: ${branch_name} \x1B[0m \n`);
      console.log(`\x1B[33m Cloning from: ${module.path} \x1B[0m \n`);

      shell.exec(`git clone -b ${branch_name} ${module.path} ${utils.inJectPath().repositorie_tmp} --depth=1 --progress`);
    }
    else {
      /**
       * module.module => 模块名称
       * branch_name => 分支名称 ( 没有设置则抽取master分支代码 )
       * module.path => 仓库拷贝地址
       * repositorie_tmp => 本地复制路径  BRANCH  branch
       */
      shell.exec(
        `${shell_clone} ${module_names} ${branch_name} ${module.path} ${utils.inJectPath().repositorie_tmp}`,
      );
    }

    //clone 计时结束：结束时间
    const end = process.hrtime.bigint();
    const timeInterval = ((Number(`${end - start}` + '')) / 1E9).toFixed(2);//Nanosecond to second

    console.log(`clone done in ${timeInterval} s`);

    const childreModules = module.childreModules;

    childreModules.forEach(childModule => {
      const repositoryName = utils.repositoryName(childModule);

      if (fs.existsSync(`${utils.inJectPath().repositorie_tmp}/${repositoryName}`)) {
        /**
         * is landing to root path by key - landingRoot
         * true => root path
         * 【
         *    use to load some repositories （system) in root path,
         *    in this way, we don't to push code to sandbox and clone it back to business module
         *  】
         * false / undefined => to injection => repositories path
         */
        if (module.landingRoot) {
          const targetPath = `${utils.inJectPath().root}/${repositoryName}`;
          if (fs.existsSync(targetPath)) {
            shell.rm('-rf', targetPath);
          }

          shell.cp('-R', `${utils.inJectPath().repositorie_tmp}/${repositoryName}`, targetPath);
        }
        else {
          shell.cp(
            '-R',
            `${utils.inJectPath().repositorie_tmp}/${repositoryName}`,
            `${utils.inJectPath().repositorie}/${repositoryName}`,
          );
        }
      }
    });

    shell.rm('-rf', utils.inJectPath().repositorie_tmp);
  });
};

/**
 * copy and inject static dir
 */
exports.cloneStatic = () => {
  // shell.rm('-rf', `${utils.inJectPath().root}/static`);

  const static_inJect_path = `${utils.inJectPath().static}`; //inJect static path
  const static_target_path = `${utils.inJectPath().root}/static`; //root static path

  /**
   * judge static dir in neap-injection
   * 判断当前执行环节目录下，母体中是否存在 static 文件，存在，则进行拷贝注入操作，否则无需处理
   */
  if (fs.existsSync(static_inJect_path)) {
    /*
     * judge static in root is exists or not:
     * not => create dir
     * 目标目录下没有 static 文件就为其创建一个
     */
    utils.mkdir(static_target_path);

    const whitestatic = ['.gitkeep', 'loadBuffer', 'intercept'];

    const staticInclude = utils.getInjectConfig().staticInclude || [];

    //Locate in the target directory for processing
    const static_inJect_files = fs.readdirSync(static_inJect_path); //get all files/dirs in inJect static path

    const NEAP_static_target_path = `${static_target_path}/${copy_rename.static}`;

    /**
     * judge exists:
     * yes = > remove
     */
    utils.judgeAndMkdir(NEAP_static_target_path);

    //Loop firest level page directory
    static_inJect_files.forEach(file => {
      const file_Path = join(static_inJect_path, file); //file path

      if ([...whitestatic, ...staticInclude].indexOf(file) > -1) {
        shell.cp('-R', file_Path, NEAP_static_target_path);
      }
    });
  }
};

/**
 * copy and inject mock dir
 */
exports.cloneMock = () => {
  const mock_inJect_path = `${utils.inJectPath().mock}`; //获取待注入的mock路径


  const mock_target_path = utils.getMockPath(); //获取注入路径

  /**
   * judge mock dir in neap-injection
   * 判断当前执行环节目录下，母体中是否存在 mock 文件，存在，则进行拷贝注入操作，否则无需处理
   */
  if (fs.existsSync(mock_inJect_path)) {
    //目标目录下没有mock文件就为其创建一个
    utils.mkdir(mock_target_path);

    const NEAP_mock_target_path = `${mock_target_path}/${copy_rename.mock}`;

    /**
     * judge exists:
     * yes = > remove
     */
    utils.judgeAndRemove(NEAP_mock_target_path);

    shell.cp('-R', mock_inJect_path, NEAP_mock_target_path);
  }
};



