const path = require('path');
const glob = require('glob');
const shell = require('shelljs');
const signale = require('signale');
const { Signale } = signale;


const p = path.resolve(__dirname, './compile-injecter.js');
const msg = 'compile injecter in clone';

signale.start(msg);

const interactive = new Signale({ interactive: true });
interactive.pending(msg);


shell.exec(`gulp --gulpfile ${p}`, function(error, stdout, stderr) {
  signale.success(msg);
});
