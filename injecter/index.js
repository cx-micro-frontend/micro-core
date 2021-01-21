/**
 * clone index
 */
const path = require('path');
const fs = require('fs');
const shell = require('shelljs');
const signale = require('signale');
const utils = require('./utils');
const injectConfigList = require('./injectionList/index');//输出 处理后 的 微前端注入配置项目
const controller = require(path.resolve(__dirname, './controller/controller'));

const clone = require('./clone/index');
const injection = require('./injection');
const filesMap = require('./filesMap');

const startMsg = 'Check and create injection directory ....\n';
const startInjectMsg = 'Start injecting for loading business module ....\n';

signale.start(startMsg);

/**
 * create dir
 * injection =>{ entrance , repositorie }
 */
utils.judgeAndMkdir(utils.inJectPath().injection, () => {
  fs.mkdirSync(utils.inJectPath().entrance);

  fs.mkdirSync(utils.inJectPath().repositorie);

  shell.chmod(777, utils.inJectPath().injection);
});

signale.start(startInjectMsg);

clone.cloneRepositories(); //clone buiness repositories

// get inject list
// Depending on ( buiness inject config and neap controller config) key( disabled )
const injectList = injectConfigList.filter(item =>
  controller[item.repositorie] ? !controller[item.repositorie].disabled : true,
);

// inject core
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

//clone mock dir
signale.start('Start copy mock dir ...\n');
clone.cloneMock();
