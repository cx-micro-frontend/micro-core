/**
 * clone
 */
const path = require('path');
const fs = require('fs');
const shell = require('shelljs');
const utils = require('../injecter/utils');

if (fs.existsSync(`${utils.inJectPath().root}/main`)) {

  shell.cp('-R', `${utils.inJectPath().root}/main/mock`, `${utils.inJectPath().root}/lib/mock`);
  shell.cp('-R', `${utils.inJectPath().root}/main/src`, `${utils.inJectPath().root}/lib/src`);
  shell.cp('-R', `${utils.inJectPath().root}/main/static`, `${utils.inJectPath().root}/lib/static`);
  shell.cp('-R', `${utils.inJectPath().root}/main/main.js`, `${utils.inJectPath().root}/lib/main.js`);
  shell.cp('-R', `${utils.inJectPath().root}/main/expand.js`, `${utils.inJectPath().root}/lib/expand.js`);
  shell.cp('-R', `${utils.inJectPath().root}/main/dependencies.js`, `${utils.inJectPath().root}/lib/dependencies.js`);
  shell.cp('-R', `${utils.inJectPath().root}/main/plugins`, `${utils.inJectPath().root}/lib/plugins`);
}
