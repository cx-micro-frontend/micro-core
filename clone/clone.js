/**
 * clone
 */
const path = require('path');
const fs = require('fs');
const shell = require('shelljs');
const utils = require('./utils');

exports.cloneRepositories = () => {
  //require clone shell script
  const shell_clone = path.resolve(__dirname, './clone.sh');

  const injectmodules = utils.modulesConfig().filter(module => !module.isOwner && !module.disabled);

  injectmodules.forEach(module => {
    fs.mkdirSync(utils.inJectPath().repositorie_tmp);

    shell.exec(
      `${shell_clone} ${module.module} ${module.path} ${utils.inJectPath().repositorie_tmp}`
    );

    const repositoryName = utils.repositoryName(module);

    if (fs.existsSync(`${utils.inJectPath().repositorie_tmp}/${repositoryName}`)) {
      shell.cp(
        '-R',
        `${utils.inJectPath().repositorie_tmp}/${repositoryName}`,

        /**
         * is landing to root path by key - landingRoot
         * true => root path
         * 【
         *    use to load some repositories （system) in root path,
         *    in this way, we don't to push code to sandbox and clone it back to business module
         *  】
         * false / undefined => to injection => repositories path
         */
        module.landingRoot
          ? `${utils.inJectPath().root}/${repositoryName}`
          : `${utils.inJectPath().repositorie}/${repositoryName}`
      );
    }
    shell.rm('-rf', utils.inJectPath().repositorie_tmp);
  });
};

/**
 * copy static
 */
exports.cloneStatic = () => {
  shell.rm('-rf', `${utils.inJectPath().root}/static`);

  if (fs.existsSync(`${utils.inJectPath().static}`)) {
    shell.cp('-R', `${utils.inJectPath().static}`, `${utils.inJectPath().root}`);
  }
};
