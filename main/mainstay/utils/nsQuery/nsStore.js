/*
 * auxiliary for Vue
 * With the wrapper function below, you can use the Vue extension function more quickly
 * created: 2017/7/3.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */
import ns from './nsQuery';
import $store from '../../store/index';



/*============= bussiness data ===============*/
//funcId - handle
export const funcId = {
  //set funcId
  set: function (val) {
    $store.dispatch('setFuncId', val);
  },
  //get funcId
  get: function () {
    return $store.state.Store.core.funcId;
  },
  //delete funcId
  delete: function () {
    $store.dispatch('setFuncId', '');
  },
};
//ownerId - handle
export const ownerId = {
  //set funcId
  set: function (val, time) {
    $store.dispatch('ownerIdHandle', {
      val: val,
      type: 'set',
      time: time ? time : null,
    });
  },
  //get funcId
  get: function () {
    return $store.state.Store.store.ownerId;
  },
  //delete funcId
  delete: function () {
    $store.dispatch('ownerIdHandle', {
      type: 'delete',
    });
  },
};
//detailId - handle
export const detailId = {
  //set funcId
  set: function (val, time) {
    $store.dispatch('detailIdHandle', {
      val: val,
      type: 'set',
      time: time ? time : null,
    });
  },
  //get funcId
  get: function () {
    return $store.state.Store.store.detailId;
  },
  //delete funcId
  delete: function () {
    $store.dispatch('detailIdHandle', {
      type: 'delete',
    });
  },
};
//houseId - handle
export const houseId = {
  //set funcId
  set: function (val, time) {
    $store.dispatch('houseIdHandle', {
      val: val,
      type: 'set',
      time: time ? time : null,
    });
  },
  //get funcId
  get: function () {
    return $store.state.Store.store.houseId;
  },
  //delete funcId
  delete: function () {
    $store.dispatch('houseIdHandle', {
      type: 'delete',
    });
  },
};
//houseName - handle
export const houseName = {
  //set funcId
  set: function (val, time) {
    $store.dispatch('houseNameHandle', {
      val: val,
      type: 'set',
      time: time ? time : null,
    });
  },
  //get funcId
  get: function () {
    return $store.state.Store.store.houseName;
  },
  //delete funcId
  delete: function () {
    $store.dispatch('houseNameHandle', {
      type: 'delete',
    });
  },
};
//houseType - handle
export const houseType = {
  //set funcId
  set: function (val, time) {
    $store.dispatch('houseTypeHandle', {
      val: val,
      type: 'set',
      time: time ? time : null,
    });
  },
  //get funcId
  get: function () {
    return $store.state.Store.store.houseType;
  },
  //delete funcId
  delete: function () {
    $store.dispatch('houseTypeHandle', {
      type: 'delete',
    });
  },
};

/*============= form handle ===============*/
// form - controller
export const formController = {
  //set the value of the field under a specific object
  set: function (ID, query) {
    if (ns.base.judgeType(query) !== 'object') {
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
    if (!ns.base.isXType('string', ID) || !ns.base.isXType('string', ID)) {
      throw 'The function of formController - get have two params (ID and Key), ID and Key is String format, you better find it';
    }
    let getVal = null;
    const ControllerList = $store.state.Form.control.formController;
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
    if (ns.base.judgeType(ID) !== 'string') {
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
// form counter
export const formCounter = {
  register: function (ID, initNum) {
    $store.dispatch('autoFormCounter', {type: 'register', ID: ID, initNum: initNum});
  },
  //counter add
  add: function (ID) {
    $store.dispatch('autoFormCounter', {type: 'add', ID: ID});
  },
  //counter reduce
  reduce: function (ID) {
    $store.dispatch('autoFormCounter', {type: 'reduce', ID: ID});
  },
  //return to zero
  empty: function () {
    $store.dispatch('autoFormCounter', {type: 'empty'});
  },
  //get form-item-component counter
  get: function (ID) {
    const counterList = $store.state.Form.control.counter;
    if (counterList.length > 0) {
      for (let i = 0; i < counterList.length; i++) {
        if (counterList[i].hasOwnProperty(ID)) {
          return counterList[i][ID];
        }
      }
    }
    throw "the length of items-component'area-linkage counter-List is 0, because items-component has not registered, " +
    "please run 'register' methods first.";
  },
};

/*============= form handle ===============*/
//conditions - handle
export const conditions = {
  //get conditions by ID
  get: ID => {
    if (ns.base.judgeType(ID) !== 'string') {
      throw "The function of conditions handle - set only one params (ID), ID must exist，it's String format, you better find it";
    }
    $store.dispatch('getConditions', ID);
    const conditions = $store.state.Search.conditions[ID];
    return conditions;
  },
  empty: _ => {
    $store.dispatch('emptyConditions'); //empty conditions
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

