'use strict';
const path = require('path');
const injection = require('./config/injection/index');

module.exports = {
  dev: {
    entry: {
      // app: './node_modules/@NEAP4/main.js',
      app: './main/main.js',
    },
    cssExtractPublicPath: './',
    templateSPA: './index.html',
    staticPath: './main/static',
    port: 8001,
    useEslint: false,
  },
  prod: {
    entry: {
      app: './main/main.js',
    },
    assetsPublicPath: './',
    assetsRoot: path.resolve('./dist'),
    cssExtractPublicPath: '../../',
    templateSPA: './index.html',
    staticPath: './main/static',
    useEslint: false,
  },
  base: {
    mockPath: './main/mock',

    JSBabelInclude: ['main', 'injection', 'config', 'NS_system', 'node_modules/neap-test1'],
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
        'mockdata/**/*.js',
        '.postcssrc.js',
        'env.config.js',
        'env.param.config.js',
        '.eslintrc.js',
      ],
    },

    micro: {
      useMicroFrontend: true,
      modules: injection.modules,
    }
  },

  prod_injection: {
    modules: injection.modules,
  },
  tools: {
    publish: {
      prescript: [
        'npm run build:lib'
      ]
    }
  }
};
