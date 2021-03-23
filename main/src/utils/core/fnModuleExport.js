/**
 * fn module export
 * 方法模块输出，控制反转
 * @param files
 * @returns {{}}
 */
export default files => {
  let modules = {};

  files.keys().forEach(key => {
    //file modules object
    const m = files(key);

    /**
     * export not has default => {}
     * default => method
     * @type {string}
     */
    const methodItem = Object.keys(m).reduce((s, e) => {
      if (e !== 'default') {
        if (typeof m[e] === 'function') {
          modules[e] = m[e];
          return s;
        } else s[e] = m[e];
      }
      return s;
    }, m.default || {});

    if (methodItem && typeof methodItem === 'function') {
      const fileName = key.replace(/(.*\/)*([^.]+).*/gi, '$2');

      if (modules.hasOwnProperty('fileName')) {
        throw 'entry script modules has the same method';
      }

      modules[fileName] = methodItem;
    }
  });

  return modules;
};
