const useESModules = process.env.BABEL_MODULE !== 'commonjs';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: useESModules ? false : 'commonjs',
        targets: {
          browsers: [
            '> 1%',
            'last 2 versions',
            'not ie <= 8',
          ],
        },
      },
    ],
  ],
  plugins: [
    // [
    //   'import',
    //   {
    //     'libraryName': 'vxe-table',
    //     'style': false, // 样式是否也按需加载
    //   },
    // ],

    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true,
    }, 'vant'],



    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-transform-modules-commonjs',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],//JS新的私有方法的提案
    '@babel/plugin-syntax-jsx',
    '@vue/babel-plugin-transform-vue-jsx',
    'jsx-v-model',
  ],
  // env: {
  //   development: {
  //     plugins: [
  //       'dynamic-import-node',
  //     ],
  //   },
  // },
};
