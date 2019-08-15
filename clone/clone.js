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

  //modules config by env.param.config file
  const config = require(path.resolve('env.param.config'));
  const modulesConfig = config.prod_injection.modules || [];

  const injectmodules = modulesConfig.filter(module => !module.isOwner && !module.disabled);

  injectmodules.forEach(module => {

    fs.mkdirSync(utils.inJectPath().repositorie_tmp);

    shell.exec(`${shell_clone} ${module.module} ${module.path} ${utils.inJectPath().repositorie_tmp}`);

    const repositoryName = utils.repositoryName(module);

    if (fs.existsSync(`${utils.inJectPath().repositorie_tmp}/${repositoryName}`)) {

      shell.cp('-R', `${utils.inJectPath().repositorie_tmp}/${repositoryName}`, `${utils.inJectPath().repositorie}/${repositoryName}`);

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





