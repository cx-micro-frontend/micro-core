/**
 * clone
 */
const path = require('path');
const join = require('path').join;
const fs = require('fs');
const os = require('os');
const shell = require('shelljs');
const utils = require('./utils');
const copy_rename = require('./config').copy_rename;
const osType = os.type(); // system type

exports.cloneRepositories = () => {
  //require clone shell script
  const shell_clone = path.resolve(__dirname, './clone.sh');

  const injectmodules = utils.modulesConfig().filter(module => !module.isOwner && !module.disabled);

  injectmodules.forEach(module => {
    fs.mkdirSync(utils.inJectPath().repositorie_tmp);

    //windows operating system
    if (osType === 'Windows_NT') {
      console.log(`cloning target:" ${module.module} "\n`);
      shell.exec(`git clone ${module.path} ${utils.inJectPath().repositorie_tmp}`);
    } else {
      shell.exec(
        `${shell_clone} ${module.module} ${module.path} ${utils.inJectPath().repositorie_tmp}`,
      );
    }

    const repositoryName = utils.repositoryName(module);

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
      } else {
        shell.cp(
          '-R',
          `${utils.inJectPath().repositorie_tmp}/${repositoryName}`,
          `${utils.inJectPath().repositorie}/${repositoryName}`,
        );
      }
    }
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

  console.log(333333333333)
  console.log(mock_inJect_path)
  console.log(mock_target_path)
  console.log(333333333333)
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
