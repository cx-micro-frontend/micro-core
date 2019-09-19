'use strict';
const path = require('path');
const injection = require('./config/injection/index');
const injection_sandbox = require('./config/injection/index.sandbox');

module.exports = {
  dev: {
    entry: { app: './main/main.js' },
    cssExtractPublicPath: './',
    templateSPA: './index.html',
    staticPath: './main/static',
    port: 8001,
    useEslint: false,
    prescript: ['npm run build:lib', 'npm run clone'],
    // proxyTable: {
    //   '/api': {
    //     target: 'http://192.168.1.20',
    //     changeOrigin: true
    //   }
    // }
  },
  prod: {
    entry: { app: './main/main.js' },
    assetsPublicPath: './',
    assetsRoot: path.resolve('./dist'),
    cssExtractPublicPath: '../../',
    templateSPA: './index.html',
    staticPath: './main/static',
    useEslint: false,
    prescript: ['npm run clean:lib', 'npm run clone'],
    inSandbox: false, //代码是否在沙盒中打包
  },
  base: {
    mockPath: './main/mock',

    JSBabelInclude: [
      'main',
      'injection',
      'config',
      'env.param.config.js',
      'node_modules/neap-test1',
      'lib',
    ],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@ROOT': path.resolve(''),
      '@NEAP': path.resolve('main/src'),
      '@COMMUNITY': path.resolve('injection/repositories/NS_community'),
      '@BIZ_COMPONENTS': path.resolve('injection/repositories/NS_biz_components'),
    },
    prettier: {
      switch: true,
      files: [
        'main/src/**/*.js',
        'main/mock/**/*.js',
        'main/static/intercept/**/*.js',
        'clone/**/*.js',
        'config/**/*.js',
        '.postcssrc.js',
        'env.config.js',
        'env.param.config.js',
        '.eslintrc.js',
      ],
    },

    micro: {
      useMicroFrontend: true,
      modules: injection.modules,
    },
  },

  prod_injection: {
    modules: injection.modules,
    modules_sandbox: injection_sandbox,
  },
  tools: {
    publish: {
      prescript: ['npm run clean:lib', 'npm run build:lib', 'npm run clone'],
    },
    npmUpgradeList: [
      {
        module: 'cx-builder',
        edition: 'latest', //beta / latest
        version: null,
      },
      {
        module: 'neap-ui',
        edition: 'beta', //beta / latest
        version: null,
      },
    ],
  },
};
