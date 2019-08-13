const libraryFiles = require.context('./library', true, /\.js/);

let modules = {};

libraryFiles.keys().forEach(key => {

  //file modules object
  const m = libraryFiles(key);

  /**
   * export not has default => {}
   * default => method
   * @type {string}
   */
  const methodItem = Object.keys(m).reduce((s, e) => {
    if (e !== 'default') {
      if (typeof m[e] === 'function') {
        modules[e] = m[e];
        return s
      }
      else s[e] = m[e]
    }
    return s
  }, m.default || {});

  if (methodItem && typeof methodItem === 'function') {

    const fileName = key.replace(/(.*\/)*([^.]+).*/ig, "$2");

    if (modules.hasOwnProperty('fileName')) {
      throw ('entry script modules has the same method')
    }

    modules[fileName] = methodItem;
  }
});

// console.log('控制反转脚本模块');
// console.log(modules);
// console.log('控制反转脚本模块');

export default modules;
