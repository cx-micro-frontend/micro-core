import * as store from '@NEAP/utils/nsQuery/nsStore';
import {autoForm} from '../../service/packages/NS-auto-form/NS-auto-form';//require auto form data API
import loginfo from './log'; //require auto form data API
import utils from '@NEAP/utils'
let vm, requireData = null;

/**
 * log - descriptor
 * @param type
 * @returns {Function}
 */
let log = type => {
  return function (target, name, descriptor) {
    let fomrLog = descriptor.value;
    descriptor.value = (...arg) => {
      fomrLog.apply(target, arg);
      switch (type) {
        case 'remote':
          loginfo.remote(type, vm, requireData);
          break;
        case 'local':
          loginfo.local(type, vm);
          break;
        case 'dataCheck':
          loginfo.dataCheck(vm);
        default:
          break;
      }
    };
  };
};

class dataProject {
  @log('remote')
  /**
   * request data for auto-form  (funcId / interpreter to head, query in params)
   * @param requireData
   * @param cb
   */
  remote(requireData, cb) {
    console.log(requireData);
    autoForm(requireData.url, requireData.head, requireData.query)
      .then(response => {
        cb(response.resultData);
      })
      .catch(response => {
        return Promise.reject(response);
      });
  }

  @log('local')
  /**
   * request loacl-data
   * @param localdata
   * @param cb
   */
  local(localdata, cb) {
    cb(localdata);
  }

  @log('dataCheck')
  /**
   * check auto-form data
   * @param vm
   * @param data
   * @param isCheck   check data switch
   */
  dataCheck(vm, data, isCheck) {
    if (data && isCheck) {
      vm.formDataShow = JSON.parse(JSON.stringify(data)); //assign 'formData' to 'formDataShow' by deep copy.
      vm.dataCheckResult = autoFormResCheck(data, vm.autoFormID); //output detection results List
      //open table - dialog
      vm.$set(vm.dialogVisible, 'visible', true);
    }
  }
}

let dp = new dataProject();

/**
 * Loading auto-form data
 * @param _t              this vm
 * @constructor
 */
const LoadingData = _t => {
  vm = _t; //store vm
  vm.loading = true;
  vm.$store.dispatch('setRequestFormId', vm.autoFormID);
  if (vm.isLocal) {
    if (!utils.isEmpty(vm.localData)) {
      dp.local(vm.localData, localdata => {
        vm.formData = localdata;
      });
      _decorate(vm); //help handle for auto-form
    }
  } else {
    //require data
    requireData = {
      url: vm.requestUrl,
      query: vm.query,
      head: {
        funcId: vm.funcId, //funcId
        interpreter: store.formController.get(vm.autoFormID, 'interpreter'), //interpreter
        formOperateType: store.formController.get(vm.autoFormID, 'formOperateType'), //formOperateType
      },
    };
    dp.remote(requireData, res => {
      vm.formData = res;
      _decorate(vm); //help handle for auto-form
    });
  }

  /**
   * help handle for auto-form
   * @param vm
   * @private
   */
  function _decorate(vm) {
    loginfo.datagetted(vm.formData);
    vm.$emit('afterRequest', vm, vm.formData);
    const initModelData = utils.deepClone(vm.formData.modelData);
    vm.$store.dispatch('initModelDataStore', initModelData);
    loginfo.afterRequest(vm.formData);
    dp.dataCheck(vm, vm.formData, vm.isCheck);
    vm.itemsRender = true;
    vm.loading = false;
  }
};

export default LoadingData;
