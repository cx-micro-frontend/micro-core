'use strict';
const path = require('path');
const injection = require('./config/injection/index');

module.exports = {
  dev: {
    entry: { app: './main/main.js' },
    cssExtractPublicPath: './',
    templateSPA: './index.html',
    staticPath: './main/static',
    port: 8001,
    useEslint: false,
    prescript: ['npm run clean:lib', 'npm run clone'],
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
  },
  base: {
    mockPath: './main/mock',

    JSBabelInclude: [
      'main',
      'injection',
      'config',
      'env.param.config.js',
      'node_modules/neap-test1',
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
        'main/static/**/*.js',
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
  },
  tools: {
    publish: {
      prescript: ['npm run clean:lib', 'npm run build:lib'],
    },
    npmUpgradeList: [
      {
        module: 'cx-builder',
        edition: 'latest', //beta / latest
        version: null,
      },
      {
        module: 'ns-form-components',
        edition: 'beta', //beta / latest
        version: null,
      },
    ],
  },
};
