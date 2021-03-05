/**
 * clone
 */
const path = require('path');
const fs = require('fs');
const shell = require('shelljs');

const mainPath = path.resolve('main');
const libPath = path.resolve('lib');

//删除 lib 文件夹
shell.rm('-rf', libPath);
//创建 lib 文件夹
fs.mkdirSync(libPath);

if (fs.existsSync(mainPath)) {
  shell.cp('-R', `${mainPath}/*`, `${libPath}`);
}



// shell.cp('-R', `${mainPath}/mock`, `${libPath}/mock`);
// shell.cp('-R', `${mainPath}/src`, `${libPath}/src`);
// shell.cp('-R', `${mainPath}/static`, `${libPath}/static`);
// shell.cp('-R', `${mainPath}/main.js`, `${libPath}/main.js`);
// shell.cp('-R', `${mainPath}/expand.js`, `${libPath}/expand.js`);
// shell.cp('-R', `${mainPath}/dependencies.js`, `${libPath}/dependencies.js`);
// shell.cp('-R', `${mainPath}/plugins`, `${libPath}/plugins`);
