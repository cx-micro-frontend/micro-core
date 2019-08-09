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
    staticPath: './static',
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
    staticPath: './static',
    useEslint: false,
  },
  base: {
    mockPath: './mock',

    JSBabelInclude: ['main', 'config', 'mock', 'NS_system', 'node_modules/neap-test1'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@ROOT': path.resolve(''),
      '@NEAP': path.resolve('main'),
      '@COMMUNITY': path.resolve('main/injection/repositories/NS_community'),
      '@BIZ_COMPONENTS': path.resolve('main/injection/repositories/NS_biz_components'),
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
  },

  prod_injection: {
    modules: injection.modules,
  },
  tools: {
    publish: {
      prescript: [
        // 'npm run build'
      ]
    }
  }
};
