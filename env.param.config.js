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
      // '@NEAP': path.resolve('./node_modules/@NEAP4')
      '@NEAP': path.resolve('main'),
      '@ROOT': path.resolve(''),
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
