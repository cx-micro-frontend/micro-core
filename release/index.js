const path = require('path');
const shell = require('shelljs');
const signale = require('signale');
const readlineSync = require('readline-sync');
const minimist = require('minimist');
const releasepath = path.resolve(__dirname, './release.sh');


const npm_version = version => {
  shell.exec(`npm version ${version || 'prerelease'} --no-git-tag-version`);
};

/**
 * /entry key version to publish
 * @param mode
 */
const keyInVersion = mode => {

  const VERSION = readlineSync.question(`Enter ${mode} version: `);

  // 'Y' key was pressed.
  if (readlineSync.keyInYN(`${mode} ${VERSION} - are you sure?`)) {

    npm_version(VERSION);

    //run commit && publish
    shell.exec(`${releasepath} ${VERSION} ${mode}`);
  }

  else {
    signale.fatal(' Stop to publish ...');
  }
};


// console.log(process.env);
const options = minimist(process.argv.slice(2));
const MODE = options.version_mode;

shell.exec('clear');
const startMsg = `${MODE} mode is start to pubish....\n`;
signale.start(startMsg);

switch (MODE) {
  //npm 发布预发布版
  case 'prerelease':

    //custom releasepath publish
    if (readlineSync.keyInYN('Enter version to releasing publish?')) {

      //entry key version to publish
      keyInVersion(MODE);

    }
    //auto releasepath publish
    else {

      npm_version();

      const AUTOVERSION = require(path.resolve("package.json")).version;

      //run commit && publish
      shell.exec(`${releasepath} ${AUTOVERSION} ${MODE}`);
    }

    break;
  //npm 发布正式版
  case 'latest':

    //entry key version to publish
    keyInVersion(MODE);

    break;
  default:
    break;
}

signale.success(`NPM ${MODE} publish successful...\n`);

