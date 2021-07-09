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
// shell.cp('-R', `${mainPath}/main.tsx`, `${libPath}/main.tsx`);
// shell.cp('-R', `${mainPath}/expand.tsx`, `${libPath}/expand.tsx`);
// shell.cp('-R', `${mainPath}/dependencies.tsx`, `${libPath}/dependencies.tsx`);
// shell.cp('-R', `${mainPath}/plugins`, `${libPath}/plugins`);
