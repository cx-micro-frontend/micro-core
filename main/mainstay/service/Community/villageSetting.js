/*==========================================================================================================================*/
import fetch from '../../utils/fetch/fetch';
import { dataFilter } from '../../utils/fetch/fetchDataType';

/*==========================================================================================================================*/

export function getPhoneList(query) {
  //表数据-获取
  dataFilter(query);
  return fetch({
    url: '/o2o/precinct/getServicePhoneList',
    method: 'post',
    data: query
  });
};


export function getCompanyList() {
  //表数据-获取
  return fetch({
    url: '/o2o/precinct/getCompanyNameList',
    method: 'post',
  });
};

export function saveServicePhoneList(query) {
  //表数据-获取
  dataFilter(query);
  return fetch({
    url: '/property-service/property-rest/rest/precinct/saveServicePhoneList',
    method: 'post',
    data: query
  });
};

export function delServicePhone(query) {
  //表数据-获取
  dataFilter(query);
  return fetch({
    url: '/o2o/precinct/delServicePhone',
    method: 'post',
    data: query
  });
};



export function checkhouse(query) {
  //表数据-获取
  dataFilter(query);
  return fetch({
    url: '/o2o/precinct/checkHouse',
    method: 'post',
    data: query
  });
};

export function getPrecinctInfo(query) {
  //表数据-获取
  dataFilter(query);
  return fetch({
    url: '/o2o/precinct/getPrecinct',
    method: 'post',
    data: query
  });
};

export function savePrecinctInfo(query) {
  //表数据-获取
  dataFilter(query);
  return fetch({
    url: '/o2o/precinct/savePrecinct',
    method: 'post',
    data: query
  });
};
