'use strict';
const path = require('path');
const fs = require('fs');
const shell = require('shelljs');
const signale = require('signale');
const packageJson = require(path.resolve('./package.json'));
//modules config by env.param.config file
const config = require(path.resolve('env.param.config'));

/**
 * get config ( env.param.config.js )
 * @returns {any | {}}
 */
exports.getConfig = () => {
  return config || {};
};

/**
 * inJect path
 * @returns {{injection: string, entrance: string, core: string, repositorie: string, repositorie_tmp: string}}
 */
exports.inJectPath = () => {
  const injection = path.resolve(__dirname, '../../injection');
  return {
    root: path.resolve(), //root

    injection: injection, //injection dir

    entrance: `${injection}/entrance`, //injection entrance dir

    repositorie: `${injection}/repositories`, //repositorie dir

    config: `${injection}/config`, //config dir

    core: `${injection}/entrance/entrance_core.js`, //core js-file for injection entrance

    ui: `${injection}/entrance/entrance_ui.js`, //core js-file for injection entrance

    repositorie_tmp: `${injection}/repositories/_tmp`, //repositorie tmp

    routefiles: `${injection}/config/routefiles.js`, //route files

    static: path.resolve(__dirname, '../static'), //static file

    mock: path.resolve(__dirname, '../mock'), //mock file
  };
};

/**
 * create modules group
 * @param oldModuleList
 * @returns {Array}
 */
exports.createModulesGroup = (oldModuleList = []) => {
  let newModuleList = [];

  for (let item of oldModuleList) {
    let path = item.path, branch = item.branch;

    let idx = newModuleList.findIndex(val => {
      return val.path === path && val.branch === branch;
    });

    /**
     * 匹配存在 => 匹配的对象 否则 为空对象
     * @type {{}}
     */
    let resultMap = idx !== -1 ? newModuleList[idx] : {};

    const childItem = {
      module: item['module'],
      repositorie: item['repositorie'],
    };

    //对象为空（ 不存在同属归类的其他兄弟，是第一个 )
    if (Object.keys(resultMap).length === 0) {
      let childreModules = [];

      childreModules.push(childItem);

      resultMap['path'] = path;
      resultMap['branch'] = branch;
      resultMap['childreModules'] = childreModules;
      resultMap['childreModulesNames'] = [childreModules[0].module];

      newModuleList.push(resultMap);
    }
    //对象不为空 （ 已存在同属归类的其他兄弟 )
    else {
      //获取到父亲对象
      let resultObj = newModuleList[idx] || {};

      const childreModules = resultObj['childreModules'];

      resultMap['childreModulesNames'].push(childItem.module);

      //处理后的父亲无需操作，直接加入儿子即可
      childreModules.push(childItem);
    }
  }

  return newModuleList;
};



/**
 * get inject config for neap
 * @returns {module.exports.prod_injection|{modules, modules_sandbox, staticInclude}|{}}
 */
exports.getInjectConfig = () => {
  return config.prod_injection || {};
};

/**
 * get modules config list to inject
 * @returns {*}
 */
exports.modulesConfig = () => {
  const inSandBox = config.prod.inSandbox;
  if (inSandBox) {
    return config.prod_injection.modules_sandbox.modules || [];
  } else {
    return config.prod_injection.modules || [];
  }
};

/**
 * get config ( env.param.config.js )
 * @returns {any | {}}
 */
exports.getMockPath = () => {
  try {
    return config.base.mockPath;
  } catch (e) {
    signale.error('No mock local path found in env.param.config.js, replace with \'./mock\' ');
    return './mock';
  }
};

/**
 * judge exists:
 * yes = > remove and create dir
 * not => create dir
 * @param path
 * @param cb
 */
exports.judgeAndMkdir = (path, cb = null) => {
  if (fs.existsSync(path)) {
    shell.rm('-rf', path);
  }

  fs.mkdirSync(path);
  if (!cb) return;
  cb();
};

/**
 * judge exists:
 * not => create dir
 * @param path
 * @param cb
 */
exports.mkdir = (path, cb = null) => {
  if (fs.existsSync(path)) {
    return;
  } else {
    fs.mkdirSync(path);
  }
  if (!cb) return;
  cb();
};

/**
 * judge exists:
 * yes = > remove
 * @param path
 * @param cb
 */
exports.judgeAndRemove = (path, cb = null) => {
  if (fs.existsSync(path)) {
    shell.rm('-rf', path);
  }
  if (!cb) return;
  cb();
};

exports.version = () => {
  return process.env.VERSION || packageJson.version;
};

exports.moduleRename = (name, type) => {
  return 'inject' + '_' + name + '__' + type;
};

exports.repositoryName = module => {
  const namespace = 'NS';

  return `${namespace}_${module.repositorie}`;
};

exports.sysdate = () => {
  const myDate = new Date();

  const NumbertoLen2String = n => {
    if (n.toString().length === 1) {
      return '0' + n.toString();
    } else {
      return n;
    }
  };

  return (
    myDate.getFullYear() +
    '-' +
    NumbertoLen2String(Number(myDate.getMonth()) + Number(1)) +
    '-' +
    NumbertoLen2String(myDate.getDate()) +
    ' ' +
    NumbertoLen2String(myDate.getHours()) +
    ':' +
    NumbertoLen2String(myDate.getMinutes()) +
    ':' +
    NumbertoLen2String(myDate.getSeconds())
  );
};
