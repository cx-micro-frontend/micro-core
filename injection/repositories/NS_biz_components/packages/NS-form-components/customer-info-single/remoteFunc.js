import { getsSelectOption } from '../../../service/packages/NS-form-components/getOptions';

/**
 * base remote request
 * @param vm          this
 * @param url         equest url
 * @param params      equest params
 * @param cb          callback
 * @param method
 */
export function request(vm, url, params, cb, method) {
  console.log('slect - 远程搜索请求参数如下：');
  console.log(params);
  vm.loading = true;
  getsSelectOption(url, params, method)
    .then(res => {
      handleSelectionOption(vm, res, cb);
    })
    .catch(err => {
      return Promise.reject(err);
    });
}

/**
 * handle selection option
 * @param vm          this
 * @param res
 * @param cb          callback
 */
export function handleSelectionOption(vm, res, cb) {
  console.log('slect - 远程搜索获取参数如下：');
  console.log(res.resultData);
  vm.remoteList = res.resultData; //store remote request data list
  cb(res.resultData);
  vm.loading = false;
}

/**
 * choice one remote-method to request data (base on business)
 * @param vm                this
 * @param type              business type
 * @param url               request url
 * @param query             one of request query (remote value)
 * @param method
 */
export function choiceRemoteMethod(vm, type, url, query, method) {
  if (type === 'customerSearch') {
    request(vm, url, query, res => {
      vm.options = setRemoteOption(res); //set remote option
    }, method);
  }
  if (type === 'custom') {
    // const params = query;
  } else {
    request(vm, url, query, res => {}, method);
  }
}

/**
 * set remote option
 * @param resList
 * @returns {Array}
 */
export function setRemoteOption(resList) {
  let remoteOption = [];
  resList.map(item => {
    remoteOption.push({ label: item.ownerName, value: item.ownerId, disabled: false });
  });
  return remoteOption;
}

