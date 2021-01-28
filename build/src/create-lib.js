/**
 * clone
 */
const path = require('path');
const fs = require('fs');
const shell = require('shelljs');

const mainPath = path.resolve('main');
const libPath = path.resolve('lib');


/**
 * 有lib删除，无lib则创建
 */
if (fs.existsSync(libPath)) {
  shell.rm('-rf', path);//清除lib
}
else {
  fs.mkdirSync(libPath);
}

if (fs.existsSync(`${path.resolve('')}/main`)) {

  shell.cp('-R', `${mainPath}/mock`, `${libPath}/mock`);
  shell.cp('-R', `${mainPath}/src`, `${libPath}/src`);
  shell.cp('-R', `${mainPath}/static`, `${libPath}/static`);
  shell.cp('-R', `${mainPath}/main.js`, `${libPath}/main.js`);
  shell.cp('-R', `${mainPath}/expand.js`, `${libPath}/expand.js`);
  shell.cp('-R', `${mainPath}/dependencies.js`, `${libPath}/dependencies.js`);
  shell.cp('-R', `${mainPath}/plugins`, `${libPath}/plugins`);

}
