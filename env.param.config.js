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
    prescript: [
      'npm run clean:lib', //清除lib
      'npm run build:injecter', //注入工具的编译
      'npm run inject', //注入业务模块
      'npm run build:lib', //生成lib
    ],
    // prescript: ['npm run clean:lib', 'npm run clone'],
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
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 6,
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: module => {
            if (module.resource) {
              const include = [/[\\/]node_modules[\\/]/].every(reg => {
                return reg.test(module.resource);
              });
              const exclude = [
                /[\\/]node_modules[\\/](vue|element-ui|neap-ui|vxe-table|neap-test1[\\/]injection[\\/]repositories[\\/]NS_biz_components|)/,
              ].some(reg => {
                return reg.test(module.resource);
              });

              return include && !exclude;
            }
            return false;
          },
          priority: -10,
          chunks: 'initial',
        },

        vue: {
          name: 'chunk-vue',
          priority: 20,
          test: /[\\/]node_modules[\\/]vue[\\/]/,
        },

        'element-ui': {
          name: 'chunk-element-ui',
          priority: 20,
          test: /[\\/]node_modules[\\/]element-ui[\\/]/,
        },

        'neap-ui': {
          name: 'chunk-neap-ui',
          priority: 20,
          test: /[\\/]node_modules[\\/]neap-ui[\\/]/,
        },

        'biz-components': {
          name: 'chunk-biz-components',
          test: /[\\/]node_modules[\\/]neap-test1[\\/]injection[\\/]repositories[\\/]NS_biz_components[\\/]/,
          priority: 20,
        },

        'vxe-table': {
          name: 'chunk-vxe-table',
          priority: 20,
          test: /[\\/]node_modules[\\/]vxe-table[\\/]/,
        },
      },
    },
    prodCssSourceMap: false,
    prodJsSourceMap: false,
    dropConsole: false, //去除 console
    dropDebugger: true, //去除 debugger
    // prescript: ['npm run clean:lib', 'npm run clone'],
    prescript: [
      'npm run clean:lib', //清除lib
      'npm run build:injecter', //注入工具的编译
      'npm run inject', //注入业务模块
      'npm run build:lib', //生成lib
    ],
    inSandbox: false, //代码是否在沙盒中打包
  },
  base: {
    mockPath: './main/mock',
    // sassResources: [path.resolve('./config/expand/theme/test123.scss')],
    babel: {
      priority: true,
      include: ['main', 'injection', 'config', 'lib'],
    },
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@ROOT': path.resolve(''),
      '@NEAP': path.resolve('main/src'),
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
    staticInclude: [], //配置需要抽取拷贝的静态资源名称
  },

  tools: {
    publish: {
      prescript: [
        // 'npm run inject',
        'npm run clean:lib',
        'npm run build:injecter',
        'npm run build:lib',
      ],
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
