/*
 * auxiliary for Vue
 * With the wrapper function below, you can use the Vue extension function more quickly
 * created: 2017/7/3.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */
import $store from '@NEAP/mainstay/store/';
import utils from '../../../main/mainstay/utils'


/*============= form handle ===============*/
// form - controller
export const formController = {
  //set the value of the field under a specific object
  set: function (ID, query) {
    if (utils.judgeType(query) !== 'object') {
      throw 'The function of formController - set have two params (ID and query), ID is String format, ' +
      'query should be Object format (not arrary), you better find it';
    }
    $store.dispatch('setFormController', {
      type: 'set',
      ID: ID,
      query: query,
    });
  },
  //get the value of the field under a specific object
  get: function (ID, Key) {
    if (!utils.isXType('string', ID) || !utils.isXType('string', ID)) {
      throw 'The function of formController - get have two params (ID and Key), ID and Key is String format, you better find it';
    }
    let getVal = null;
    const ControllerList = $store.state.AutoForm.control.formController;
    if (ControllerList.length > 0) {
      ControllerList.map((item, index) => {
        if (item.hasOwnProperty(ID)) {
          if (item[ID].hasOwnProperty(Key)) {
            getVal = item[ID][Key];
          }
        }
      });
    }
    return getVal;
  },
  //delete one info
  delete: function (ID) {
    if (utils.judgeType(ID) !== 'string') {
      throw 'The function of formController - delete only one params (ID), ID is String format, you better find it';
    }
    $store.dispatch('setFormController', {
      type: 'delete',
      ID: ID,
    });
  },
  //empty all
  empty: function () {
    $store.dispatch('setFormController', {
      type: 'empty',
    });
  },
};


/*============= help ===============*/
//vue compontents store
export const vm = {
  set: function (ID, query) {
    $store.dispatch('vmhandle', {type: 'set', ID: ID, query: query});
  },
  //counter add
  get: function (ID) {
    let getVal = null;
    const vmList = $store.state.Store.vm;
    if (vmList.length > 0) {
      vmList.map((item, index) => {
        if (item.hasOwnProperty(ID)) {
          getVal = item[ID];
        }
      });
    }
    return getVal;
  },
  //counter reduce
  delete: function (ID) {
    $store.dispatch('vmhandle', {type: 'delete', ID: ID});
  },
  //return to zero
  empty: function () {
    $store.dispatch('vmhandle', {type: 'empty'});
  },
};

