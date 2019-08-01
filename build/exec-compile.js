/**
 * Build npm src
 */
const path = require('path');
const shell = require('shelljs');
const signale = require('signale');
const {Signale} = signale;

const p = path.resolve(__dirname, './compiler.js');
const msg = 'compile script in src path';

signale.start(msg);

const interactive = new Signale({interactive: true});
interactive.pending(msg);


shell.exec(`gulp --gulpfile ${p}`, function (error, stdout, stderr) {
    signale.success(msg);
});




