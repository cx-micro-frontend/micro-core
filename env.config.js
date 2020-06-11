'use strict';
const merge = require('webpack-merge');

/**
 * development env config
 * 账号密码：
 *    18958049341  123qwe
 *    18857177119 lin123
 * @type {{NODE_ENV: string, ENV_CONFIG: string, BASE_API: string}}
 */
const dev_env = {
  // PROJECT_NAME: '"NEAP"',
  PROJECT_NAME: '"xcy"',
  NODE_ENV: '"development"',
  ENV_CONFIG: '"dev"',
  IP_CONFIG: '"http://192.168.1.20"',

  BASE_API: '"http://192.168.4.40:7777"',

  // BASE_API: '"http://192.168.1.75/api"',
  // BASE_API: '"http://192.168.1.20:7777"',
  // BASE_API: '"http://new-see.oicp.io:20008/api"', //20 外网地址
  // BASE_API: '"http://192.168.3.139/api"',
  // BASE_API: '"http://192.168.3.2/api"',
  // BASE_API: '"http://192.168.1.78/api"',
  // BASE_API: '"http://saas.zjlcwg.com/api"',
  // BASE_API: '"/api"',
  // BASE_API: '"http://10.200.254.162/api"',
  // BASE_API: '"http://ptcs.nwcloud.cn/elder/api"', //养老
  // BASE_API: '"http://arm-ext.ysservice.com.cn/api"',//永生
  // BASE_API: '"http://192.168.1.20/api"',
};

/**
 * mock data in cloud
 * @type {{NODE_ENV: string, ENV_CONFIG: string, BASE_API: string}}
 */
const mock_cloud_env = {
  PROJECT_NAME: '"NEAP"',
  NODE_ENV: '"development"',
  ENV_CONFIG: '"mock"',
  BASE_API: '"https://www.easy-mock.com/mock/5d240fe12102c0666393d2b7/gaocangxiong/"', //mock
};

/**
 * mock data in local
 * @type {{NODE_ENV: string, ENV_CONFIG: string, BASE_API: string}}
 */
const mock_local_env = {
  PROJECT_NAME: '"NEAP"',
  NODE_ENV: '"development"',
  ENV_CONFIG: '"mock"',
  BASE_API: '""',
};
/**
 * production env config
 * @type {{NODE_ENV: string, ENV_CONFIG: string, BASE_API: string}}
 */
const prod_env = {
  PROJECT_NAME: '"NEAP"',
  NODE_ENV: '"production"',
  ENV_CONFIG: '"prod"',
  BASE_API: '"/api"',
};
/**
 * test env config
 * @type {{NODE_ENV: string, ENV_CONFIG: string, BASE_API: string}}
 */
const test_env = {
  PROJECT_NAME: '"NEAP"',
  NODE_ENV: '"testing"',
  ENV_CONFIG: '"test"',
  BASE_API: '"http://192.168.1.210/api"',
};

/**
 * push module
 * @type {{dev_env: *, mock_env: *, prod_env: {NODE_ENV: string, ENV_CONFIG: string, BASE_API: string}, test_env: *}}
 */
module.exports = {
  dev_env: merge(prod_env, dev_env),
  mock_local_env: merge(prod_env, mock_local_env),
  mock_cloud_env: merge(prod_env, mock_cloud_env),
  prod_env: prod_env,
  test_env: merge(dev_env, test_env),
};
