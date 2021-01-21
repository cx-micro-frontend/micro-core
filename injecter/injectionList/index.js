const path = require('path');
const config = require(path.resolve('env.param.config'));

/**
 * Original full injection configuration list
 * 原始全量注入配置清单 - 来自于项目注入配置文件
 * 过滤了 禁用的配置项 disabled=true
 * @returns {*}
 */
function injectConfigList() {
  try {
    //当前模块没有并禁用
    return config.prod_injection.modules.filter(module => !module.disabled);
  }
  catch (e) {
    console.warn(`\x1B[91m 
- The configuration of micro frontend injection is error, please check jekines 
- 微前端注入配置有误，请检查.
\x1B[0m \n`);
    return [];
  }
}

/**
 *
 * @param str
 * @returns {{}}
 */
const parse = str => {
  return typeof str === 'string' ? JSON.parse(str) : {};
};

console.log('所传递的环境变量：', process.env.MODULES_LIST);
console.log('所传递的环境变量：', process.env.SUBSYSTEMS_LIST);
console.log('所传递的环境变量：', process.env.HEADTOOLBAR_LIST);

let SUBSYSTEMS_LIST = null;
let MODULES_LIST = null;

try {
  // 子系统（一级大模块系统，如：arm，system，check_house，work_order等)
  SUBSYSTEMS_LIST = parse(process.env.SUBSYSTEMS_LIST).SUBSYSTEMS_LIST;

// 子模块（内部子模块，如：owner，system，charge，report 等)
  MODULES_LIST = parse(process.env.MODULES_LIST).MODULES_LIST;
}
catch (e) {
  console.log(`\x1B[91m 
- The configuration of environment parameter is error, please check jekines 
- jekines脚本配置中关于子系统和子模块的按需配置有误，请检查.
\x1B[0m \n`);
}

/**
 * 输出 处理后 的 微前端注入配置项目
 * jekines 构建的环境：过滤禁用 + 根据jekines 命令脚本中 环境变量配置项过滤
 * 非jekines 构建的环境：过滤禁用 即可
 */
module.exports = (() => {

  const list = injectConfigList();

  if (!list || !list instanceof Array) return [];

  //是否处于 jekines 构建的环境下
  const isJenkins = process.env.PROD_ENV === 'jenkins';


  if (isJenkins) {

    if (!SUBSYSTEMS_LIST && !MODULES_LIST) {
      return injectConfigList();
    }

    return injectConfigList().filter(module => (
      //从jekines 配置的环境变量中获取 子系统与子模块 的抽取配置清单
      SUBSYSTEMS_LIST.includes(module.rootRepositorie) || MODULES_LIST.includes(module.repositorie)
    ));
  }
  else {
    //当前模块没有并禁用
    return injectConfigList();
  }
})();


// const arguments = process.argv.splice(2);
// console.log('所传递的参数是：', arguments);
//
// /**
//  *
//  * @type {string}
//  */
// const argvSum = arguments.reduce(function(prev, cur, index) {
//
//   const prevObj = typeof prev === 'string' ? JSON.parse(prev) : prev;
//   const prevCur = typeof cur === 'string' ? JSON.parse(cur) : cur;
//
//   return Object.assign({}, prevObj, prevCur);
// });
