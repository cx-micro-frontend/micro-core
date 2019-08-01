/**
 * Build npm NS_system
 */
const path = require('path');
const fs = require('fs');
const shell = require('shelljs');
const signale = require('signale');
const utils = require('./utils');
const config = require(path.resolve('env.param.config'));


const clone = require('./clone');
const injection = require('./injection');

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


clone.cloneRepositories();//clone buiness repositories


//modules config by env.param.config file
const modulesConfig = config.prod_injection.modules;

//get inject list
const injectList = modulesConfig.filter(item => item.gate);


//inject core
injection.injection_core_entry(injectList);

//inject ui
injection.injection_ui_entry(injectList);


//clone static dir
clone.cloneStatic();







