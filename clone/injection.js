const fs = require('fs');
const utils = require('./utils');


const tips = type => `/* eslint-disable */
/*
 * ${type} inject by env.param.config config
 * you can load you business ${type === 'core' ? 'model / mixins / others in your file entry' : 'style / components / plugins in your ui entry'}
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
    return injectList.map(module => {
      const basePath = !module.isOwner ? '../repositories' : '@ROOT';
      const moduleName = utils.moduleRename(module.repositorie, `_${type}`);
      return `import ${moduleName} from '${basePath}/${utils.repositoryName(module)}/${type}/index.js';`;
    });
  }

  const modelAssign = injectList.map(module => `modelTotal = Object.assign(modelTotal, ${utils.moduleRename(module.repositorie, '_store')});`);

  const mixinsMerge = injectList.map(module => `mixinsMerge.push(${utils.moduleRename(module.repositorie, '_mixins')});`);

  const content = `${tips('core')}
//inject store model
${injectWrite('store').join('\n')}
//inject mixins
${injectWrite('mixins').join('\n')}

let modelTotal = {};
let mixinsMerge = [];

//merge
${modelAssign.join('\n')}
${mixinsMerge.join('\n')}


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

  const modelImportList = injectList.map(module => {

    const basePath = !module.isOwner ? '../repositories' : '@ROOT';

    return `import '${basePath}/${utils.repositoryName(module)}/UI/index.js';`

  });


  const content = `${tips('ui')}
  
${modelImportList.join('\n')}


`;
  //write and create file
  fs.writeFileSync(utils.inJectPath().ui, content);
};
