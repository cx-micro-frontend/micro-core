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
  const injection = path.resolve(__dirname, '../injection');
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

    static: path.resolve(__dirname, '../lib/static'), //static file

    mock: path.resolve(__dirname, '../lib/mock'), //mock file
  };
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
    signale.error("No mock local path found in env.param.config.js, replace with './mock' ");
    return './mock';
  }
};

exports.version = () => {
  return process.env.VERSION || packageJson.version;
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

exports.moduleRename = (name, type) => {
  return 'inject' + '_' + name + '__' + type;
};

exports.repositoryName = module => {
  const namespace = 'NS';

  return `${namespace}_${module.repositorie}`;
};

exports.NumbertoLen2String = n => {
  if (n.toString().length === 1) {
    return '0' + n.toString();
  } else {
    return n;
  }
};

exports.sysdate = () => {
  const myDate = new Date();
  return (
    myDate.getFullYear() +
    '-' +
    this.NumbertoLen2String(Number(myDate.getMonth()) + Number(1)) +
    '-' +
    this.NumbertoLen2String(myDate.getDate()) +
    ' ' +
    this.NumbertoLen2String(myDate.getHours()) +
    ':' +
    this.NumbertoLen2String(myDate.getMinutes()) +
    ':' +
    this.NumbertoLen2String(myDate.getSeconds())
  );
};
