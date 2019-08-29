/**
 * clone index
 */
const path = require('path');
const fs = require('fs');
const shell = require('shelljs');
const signale = require('signale');
const utils = require('./utils');
const config = require(path.resolve('env.param.config'));
const controller = require(path.resolve(__dirname, '../config/controller/controller'));

const clone = require('./clone');
const injection = require('./injection');
const filesMap = require('./filesMap');

/**
 * create dir
 * injection =>{ entrance , repositorie }
 */
utils.judgeAndMkdir(utils.inJectPath().injection, () => {
  fs.mkdirSync(utils.inJectPath().entrance);

  fs.mkdirSync(utils.inJectPath().repositorie);

  shell.chmod(777, utils.inJectPath().injection);
});

const startMsg = 'Start injecting for loading business module ....\n';
signale.start(startMsg);

clone.cloneRepositories(); //clone buiness repositories

//modules config by env.param.config file
const modulesConfig = config.prod_injection.modules;

//get inject list
//Depending on ( buiness inject config and neap controller config) key( disabled )
const injectList = modulesConfig.filter(item =>
  controller[item.repositorie]
    ? !item.disabled && !controller[item.repositorie].disabled
    : !item.disabled
);

//inject core
signale.start('Start injecting state manager ...\n');
injection.injection_core_entry(injectList);

//inject ui
signale.start('Start injecting UI entry ...\n');
injection.injection_ui_entry(injectList);

//Create route files map by repositories
signale.start('Start create route files map list ...\n');
//create file in injection => config dir
utils.judgeAndMkdir(utils.inJectPath().config);
filesMap.createRouteFiles();

//clone static dir
signale.start('Start copy static dir ...\n');
clone.cloneStatic();
