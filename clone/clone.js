/**
 * clone
 */
const path = require('path');
const join = require('path').join;
const fs = require('fs');
const os = require('os');
const shell = require('shelljs');
const utils = require('./utils');

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
 * copy static
 */
exports.cloneStatic = () => {

  // shell.rm('-rf', `${utils.inJectPath().root}/static`);

  const static_inJect = `${utils.inJectPath().static}`; //inJect static path
  const static_root = `${utils.inJectPath().root}/static`; //root static path

  /*
   * judge static in root is exists or not:
   * yes = > remove and create dir
   * not => create dir
   */
  utils.judgeAndMkdir(static_root);


  //judge static dir in neap-injection
  if (fs.existsSync(static_inJect)) {


    const whitestatic = ['.gitkeep', 'loadBuffer', 'intercept'];
    const staticInclude = utils.getInjectConfig().staticInclude || [];


    //Locate in the target directory for processing
    const static_inJect_files = fs.readdirSync(static_inJect); //get all files/dirs in inJect static path

    //Loop firest level page directory
    static_inJect_files.forEach(file => {
      const file_Path = join(static_inJect, file); //file path

      if ([...whitestatic, ...staticInclude].indexOf(file) > -1) {
        shell.cp('-R', file_Path, static_root);
      }
    });

  }
};
