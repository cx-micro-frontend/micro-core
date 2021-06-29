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
    // host: '172.16.1.102', //'192.168.6.205','192.168.6.182' /  192.168.0.106
    port: 9010,
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: false,
    prescript: [
      'npm run build:lib', //生成lib（包含min，plugins，mock，src，static）
      'npm run build:injecter', //注入工具的编译（生成injecter）
      'npm run inject', //注入业务模块（生成injection）
      // 'npm run fix-memory-limit', //开启内存上限
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
    clearWarning: false, //在控制台去除警告日志
    dropConsole: false, //去除 console
    dropDebugger: true, //去除 debugger
    // prescript: ['npm run clean:lib', 'npm run clone'],

    prescript: [
      'npm run build:lib', //生成lib（包含min，plugins，mock，src，static）
      'npm run build:injecter', //注入工具的编译（生成injecter）
      'npm run inject', //注入业务模块（生成injection）
    ],

    inSandbox: false, //代码是否在沙盒中打包
  },
  base: {
    mockPath: './main/mock',
    sassResources: [path.resolve('./config/expand/theme/var/index.scss')],
    babel: {
      priority: true,
      include: ['main', 'injection', 'config', 'lib', 'NS_formDesign'],
    },
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@ROOT': path.resolve(''),
      '@NEAP': path.resolve('main/src'),
      '@FETCH': path.resolve('main/src/fetch'),
    },

    svgSprite: {
      include: path.resolve('config/expand/iconfont/single'),
      // extract:true,
      // outputPath: "static/svgIcons/",
      // publicPath: "static/svgIcons/",
      // spriteFilename: "svg-sprite.svg"
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
    staticInclude: ['charts'], //配置需要抽取拷贝的静态资源名称
  },

  tools: {
    publish: {
      prescript: ['npm run build:lib', 'npm run build:injecter'],
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
