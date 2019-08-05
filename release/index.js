const path = require('path');
const shell = require('shelljs');
const signale = require('signale');
const version = require(path.resolve("package.json")).version;

const startMsg = 'Start to pubish ....\n';
signale.start(startMsg);



const releasepath = path.resolve(__dirname, './release.sh');



shell.exec(`${releasepath} ${version}`, function (error, stdout, stderr) {

});
