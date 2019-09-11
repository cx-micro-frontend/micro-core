/**
 * clone
 */
const path = require('path');
const fs = require('fs');
const shell = require('shelljs');
const utils = require('../clone/utils');

shell.rm('-rf', `${utils.inJectPath().root}/lib`);

if (fs.existsSync(`${utils.inJectPath().root}/main`)) {

  shell.cp('-R', `${utils.inJectPath().root}/main`, `${utils.inJectPath().root}/lib`);

}
