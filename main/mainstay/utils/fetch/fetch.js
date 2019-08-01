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
import requestHead from '../../store/modules/System/Common/RequestHeader';
import { elMessage } from './fetch-message';
import router from '../../router/index';

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 30000,
  withCredentials: true,
  headers: requestHead.state.base,
});

service.interceptors.request.use(
  config => {
    solveGetCache(config);
    return config;
  },
  error => {
    Promise.reject(error);
  },
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
      const resData = response.data;
      if (resData && (resData.resultCode === '200' || resData.resultCode === 200)) {

        return Promise.resolve(resData);

      } else {

        elMessage(resData.resultMsg, () => service.redirect(resData.resultMsg));

        return Promise.reject(resData);
      }
    }
  },
  error => {

    if (error.resultMsg) {
      elMessage(error.resultMsg, () => service.redirect(error.message));
    }
    else if (error.response.data.message === 'GENERAL') {
      elMessage('服务正在重启', () => service.redirect(error.message));
    }

    let errorInfo = error.data.error ? error.data.error.message : error.data;
    return Promise.reject(errorInfo);
  },
);

//token error break
service.redirect = msg => {
  if (
    msg &&
    ['登陆已过期', '没有token', 'pre:PermissionFilter'].some(err => msg.indexOf(err) > -1)
  ) {
    router.push({ path: '/front/login' });
  }
};

export default service;
