const fs = require('fs-extra');
const path = require('path');
const babel = require('@babel/core');


const compilerOption = {
  babel: {
    configFile: path.resolve(__dirname, '../babel.config.js')
  }
};

const isDir = dir => fs.lstatSync(dir).isDirectory();
const isJs = path => /\.js$/.test(path);
const isCode = path => !/(demo|test|\.md)$/.test(path);

/**
 * compile
 * @param dir
 * @param excludes
 */
exports.compile = (dir, excludes = []) => {
  const files = fs.readdirSync(dir);


  files.forEach(file => {

    const filePath = path.join(dir, file);

    // remove unnecessary files
    if (!isCode(file)) {
      return fs.removeSync(filePath);
    }

    // scan dir
    if (isDir(filePath)) {
      //当前文件不在排除目录名单内
      if (excludes.indexOf(file) === -1) {
        return compile(filePath);
      }
    }

    // compile js
    if (isJs(file)) {
      const { code } = babel.transformFileSync(filePath, compilerOption.babel);
      fs.outputFileSync(filePath, code);
    }
  });
};
