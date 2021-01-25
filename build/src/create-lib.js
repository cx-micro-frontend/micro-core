/**
 * clone
 */
const path = require('path');
const fs = require('fs');
const shell = require('shelljs');

const root = path.resolve('');

if (fs.existsSync(`${path.resolve('')}/main`)) {

  shell.cp('-R', `${root}/main/mock`, `${root}/lib/mock`);
  shell.cp('-R', `${root}/main/src`, `${root}/lib/src`);
  shell.cp('-R', `${root}/main/static`, `${root}/lib/static`);
  shell.cp('-R', `${root}/main/main.js`, `${root}/lib/main.js`);
  shell.cp('-R', `${root}/main/expand.js`, `${root}/lib/expand.js`);
  shell.cp('-R', `${root}/main/dependencies.js`, `${root}/lib/dependencies.js`);
  shell.cp('-R', `${root}/main/plugins`, `${root}/lib/plugins`);

}
