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
}
