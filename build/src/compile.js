/**
 * Compile components
 */
const fs = require('fs-extra');
const path = require('path');
const babel = require('@babel/core');
const compiler = require('@vant/compiler');
const signale = require('signale');

const libDir = path.resolve('./lib');
const srcDir = path.resolve('./main');

const compilerOption = {
  babel: {
    configFile: path.resolve(__dirname, '../../babel.config.js'),
  },
};

const isDir = dir => fs.lstatSync(dir).isDirectory();
const isJs = path => /\.(js|jsx|ts|tsx)$/.test(path);
const isCode = path => !/(demo|test|\.md)$/.test(path);

const isMockDir = path => /(mock)$/.test(path);
const isMockJs = path => /(.mjs)$/.test(path);

const isSfc = path => /\.vue$/.test(path);

// var p = '/src/mock/mock.mjs';
//
// console.log(11111111)
// console.log(isMockJs(p))
// console.log(11111111)

function compile(dir, excludes = []) {
  const files = fs.readdirSync(dir);

  console.log(2222222);
  console.log(files);
  console.log(2222222);

  files.forEach(file => {

    const filePath = path.join(dir, file);

    // remove unnecessary files
    if (!isCode(file)) {
      return fs.removeSync(filePath);
    }

    //判断是不是文件夹，递归执行编译
    if (isDir(filePath)) {
      //当前文件不在排除目录名单内
      if (excludes.indexOf(file) === -1) {
        return compile(filePath);
      }
    }

    // compile vue sfc
    // if (isSfc(file)) {
    //   const source = fs.readFileSync(filePath, 'utf-8');
    //   fs.removeSync(filePath);
    //
    //   const jsPath = filePath.replace('.vue', '.js');
    //   const vuePath = filePath + '.js';
    //   const output = fs.existsSync(jsPath) ? vuePath : jsPath;
    //
    //   return fs.outputFileSync(output, compiler(source, compilerOption).js);
    // }

    console.log(file);
    console.log(isMockJs(file));
    // compile js
    if (isJs(file) && !isMockJs(file)) {
      const { code } = babel.transformFileSync(filePath, compilerOption.babel);
      fs.outputFileSync(filePath, code);
    }
  });
}

signale.pending(`remove lib dir \n`);
// clear dir
fs.emptyDirSync(libDir);

signale.start(`run compiling ... \n`);

// compile src dir
process.env.BABEL_MODULE = 'commonjs';

fs.copySync(srcDir, libDir);

/**
 * 开始执行编译
 * 且这里需要排除掉 static 和 mock 这2个文件夹。里面的文件不需要处理
 */
compile(libDir, ['static','mock']);

signale.success(`compile successful...\n`);


