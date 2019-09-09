/**
 * clone injection
 */
const path = require('path');
const fs = require('fs');
const utils = require('./utils');
const controller = require(path.resolve(__dirname, '../config/controller/controller'));

const tips = type => `/* eslint-disable */
/*
 * ${type} inject by env.param.config config
 * you can load you business ${
   type === 'core'
     ? 'model / mixins / others in your file entry'
     : 'style / components / plugins in your ui entry'
 }
 * created: ${utils.sysdate()}.
 * version: ${utils.version()}.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) Broccoli spring( gcx )
 * ------------------------------------------
 */
`;

/**
 * build core entry
 * @param injectList
 */
exports.injection_core_entry = injectList => {
  /**
   * inject write
   * @param type     store / mixins
   * @returns {*}
   */
  function injectWrite(type) {
    return roleInjectList(injectList, type).map(module => {
      const moduleName = utils.moduleRename(module.repositorie, `_${type}`);
      return `import ${moduleName} from '${getBasePath(module)}/${utils.repositoryName(
        module
      )}/${type}/index.js';`;
    });
  }

  function mixinsMerge() {
    const content = roleInjectList(injectList, 'mixins').map(
      module => `${utils.moduleRename(module.repositorie, '_mixins')} `
    );
    return `[${content}];`;
  }

  const modelAssign = roleInjectList(injectList, 'store').map(
    module =>
      `modelTotal = _deepMerge(modelTotal, ${utils.moduleRename(module.repositorie, '_store')});`
  );

  const content = `${tips('core')}
//inject store model
${injectWrite('store').join('\n')}
//inject mixins
${injectWrite('mixins').join('\n')}

function _deepMerge(obj1, obj2) {
  let key;
  for (key in obj2) {
    if (obj1[key] && obj1[key].toString() === "[object Object]") {
      _deepMerge(obj1[key], obj2[key])
    }
    else {
      if (obj1.hasOwnProperty(key)) {
        console.warn(
          '\\n 对象', obj1,
          '\\n 对象', obj2,
          '\\n' + '存在 ' + key + ' 字段重复，将被替换, 请检查...')
      }
      obj1[key] = obj2[key];
    }
  }

  return obj1;
}

let modelTotal = {};

//merge
${modelAssign.join('\n')}

const mixinsMerge = ${mixinsMerge()}


export default {
  model: modelTotal,
  mixins: mixinsMerge,
};

`;
  //write and create file
  fs.writeFileSync(utils.inJectPath().core, content);
};

/**
 * build ui entry
 * @param injectList
 */
exports.injection_ui_entry = injectList => {
  const modelImportList = roleInjectList(injectList, 'ui').map(
    module => `import '${getBasePath(module)}/${utils.repositoryName(module)}/UI/index.js';`
  );

  const content = `${tips('ui')}
  
${modelImportList.join('\n')}


`;
  //write and create file
  fs.writeFileSync(utils.inJectPath().ui, content);
};

/**
 * Privilege Control Injection List
 * @param injectList
 * @param type
 * @returns {*}
 */
function roleInjectList(injectList, type) {
  const map = {
    store: 'useVuex',
    mixins: 'useMixins',
    ui: 'useUI',
  };
  const k = map[type];
  return injectList.filter(
    module => !controller[module.repositorie] || controller[module.repositorie][k]
  );
}

/**
 * get base path to splicing
 * @param moduleinfo
 * @returns {string}
 */
function getBasePath(moduleinfo) {
  /*
   * owner module => root path
   * is landing to root => root path
   * other => Relative path - ‘../repositories’
   */
  if (moduleinfo.isOwner) {
    return '@ROOT';
  } else {
    if (moduleinfo.landingRoot) return '@ROOT';
    return '../repositories';
  }
}
