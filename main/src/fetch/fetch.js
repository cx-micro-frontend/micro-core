/*
 * Type of data handle for axios-api
 * You can use those fun in help js
 * created: 2017/9/30.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */
/*==========================================================================================================================*/
import axios from 'axios';
import { fileFlowDistribute, flowTypeList } from './fileFlowDistribute';
import solveGetCache from './solveGetCache';
import requestHead from '../store/modules/Request/RequestHeader';
import { elMessage } from './fetch-message';
import $store from '../store';

import { backIniView } from '../utils/behavior';
import { getToken } from '../utils/library/auth';

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 300000, //300s 5分钟
  withCredentials: true,
  headers: requestHead.state.base,
});

service.interceptors.request.use(
  config => {
    service.injectHeaders(config);
    config.cancelToken = new axios.CancelToken(function(cancel) {
      $store.commit('registerCancelToken', { cancelToken: cancel });
    });

    solveGetCache(config);
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const headers = response.headers;
    //distribution according to content-type
    if (headers && flowTypeList.some(item => item === headers['content-type'])) {
      //file flow distribute handle
      fileFlowDistribute(response, response => {
        return response;
      });
    } else {
      let resData = response.data;
      //file blob type
      if (resData.type === 'application/json') {
        let reader = new FileReader();
        reader.readAsText(resData, 'utf-8');
        reader.onload = e => {
          console.log('--- file blob type ---', JSON.parse(e.target.result));
          resData = JSON.parse(e.target.result);
          elMessage(resData.resultMsg, () => service.redirect(resData.resultCode, resData.message));
        };
      }
      //normal type
      else {
        const resultCodeList = ['200', 200, '0000'];
        if (resData && resultCodeList.indexOf(resData.resultCode) > -1) {
          return Promise.resolve(resData);
        } else {
          elMessage(resData.resultMsg, () => service.redirect(resData.resultCode, resData.message));
          return Promise.reject(resData);
        }
      }
    }
  },
  error => {
    if (error.resultMsg) {
      elMessage(error.resultMsg, () => service.redirect(error.resultCode, error.message));
    } else if (error.response && error.response.data.message === 'GENERAL') {
      elMessage('服务正在重启', () => service.redirect(error.resultCode, error.message));
    } else if (error.message && error.message.type === 'cancelToken') {
      console.warn(error.message.resultMsg);
    }

    let errorInfo = error.data && error.data.error ? error.data.error.message : error.data;
    return Promise.reject(errorInfo);
  }
);

//token error break
service.redirect = (code, msg) => {
  if (['710', '712', '720'].some(c => c === code)) {
    backIniView();
  }

  if (
    msg &&
    ['登陆已过期', '没有token', 'pre:PermissionFilter'].some(err => msg.indexOf(err) > -1)
  ) {
    backIniView();
  }
};

/**
 * service inject header config
 * @param config
 */
service.injectHeaders = config => {
  //非登录后接口，无需增加请求头属性
  if (config.headers.noAuth) return;
  [
    { key: 'token', value: getToken() },
    { key: 'funcId', value: $store.state.Core.funcId },
    { key: 'precinctId', value: $store.state.Precinct.precinctId },
    { key: 'orgId', value: $store.state.Precinct.organizationId },
  ].forEach((item, key) => {
    !config.headers.hasOwnProperty(item.key) &&
      item.value &&
      (config.headers[item.key] = item.value);
  });
};

export default service;
