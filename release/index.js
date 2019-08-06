const path = require('path');
const shell = require('shelljs');
const signale = require('signale');
const readlineSync = require('readline-sync');
const releasepath = path.resolve(__dirname, './release.sh');

const startMsg = 'Start to pubish ....\n';
signale.start(startMsg);


const npm_version = version => {
  shell.exec(`npm version ${version || 'prerelease'} --no-git-tag-version`);
};



const keyInVersion = mode =>{

  const VERSION = readlineSync.question(`Enter ${mode} version: `);

  // 'Y' key was pressed.
  if (readlineSync.keyInYN(`${mode} ${VERSION} - are you sure?`)) {

    npm_version(VERSION);

    //run commit && publish
    shell.exec(`${releasepath} ${VERSION}`);
  }

  else {
    console.log(' stop to publish ...');
  }
};





//custom releasepath publish
if (readlineSync.keyInYN('Enter version to releasing publish?')) {

  //entry key version to publish
  keyInVersion('Releasing');

}
//auto releasepath publish
else {

  npm_version();

  const AUTOVERSION =  require(path.resolve("package.json")).version;

  //run commit && publish
  shell.exec(`${releasepath} ${AUTOVERSION}`);
}

