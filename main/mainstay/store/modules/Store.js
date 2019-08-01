import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';
import ns from '../../utils/nsQuery/nsQuery';

const lifetime = 0;
const cookieName = 'StoreName';
const cookieKey = 'StoreKey';

/**
 * deCrypto stroe-data
 * @returns {{}}
 */
function _deCryptoCookie() {
  return Cookies.get(cookieName)
    ? JSON.parse(
      CryptoJS.AES.decrypt(Cookies.get(cookieName), cookieKey).toString(CryptoJS.enc.Utf8),
    )
    : {};
}

/**
 * store data handle (set / delete)
 * @param key
 * @param store
 * @param data
 * @private
 */
function _storHandle(key, store, data) {
  if (data.type === 'set') {
    /*
      judge new data === old data , if it'area-linkage not the same，overlay the old value
      avoid：Uncaught TypeError: Converting circular structure to JSON
    */
    if (store[key] !== data.val) {
      store[key] = data.val;
      ns.crypto.cryptoCookie(cookieName, store, cookieKey, lifetime);
    } else {
      return;
    }
  }
  if (data.type === 'delete') {
    store[key] = '';
    ns.crypto.cryptoCookie(cookieName, store, cookieKey, lifetime);
  }
}

const Stroe = {
  state: {
    iscache: false,
    // some normal data for business
    store: {
      ownerId: _deCryptoCookie().ownerId,
      detailId: _deCryptoCookie().detailId,
      houseId: _deCryptoCookie().houseId,
      houseName: _deCryptoCookie().houseName,
      houseType: _deCryptoCookie().houseType,
    },
    vm: [], //this vue living
    precinct: {
      precinctId: '',
      precinctName: '',
    },
    /*
     * Stroe grid'headlist and requestPath for download excel
     */
    downloadExcel: {
      requestPath: '',
      requestParams: {},
    },
  },

  mutations: {
    /* =================== normal data =================== */
    //detailId handle
    DETAILIDHANDLE: (state, data) => {
      _storHandle('detailId', state, data);
    },
    //houseId handle
    HOUSEIDHANDLE: (state, data) => {
      _storHandle('houseType', state, data);
    },
    //houseName handle
    HOUSENAMEHANDLE: (state, data) => {
      _storHandle('houseId', state, data);
    },
    //houseType handle
    HOUSETYPEHANDLE: (state, data) => {
      _storHandle('houseName', state, data);
    },
    //ownID handle
    OWNERIDHANDLE: (state, data) => {
      _storHandle('ownerId', state, data);
    },
    //vm store handle
    VMHANDLE: (state, data) => {
      const vmList = state.vm;
      const type = data.type;
      const ID = data.ID;
      const query = data.query;

      function _jhas() {
        return vmList.some(item => {
          return item.hasOwnProperty(ID);
        });
      }

      if (type === 'set') {
        if (_jhas) {
          vmList.push({ [ID]: query });
        } else {
          return;
        }
      }
      if (type === 'delete') {
        vmList.map((item, index) => {
          if (item.hasOwnProperty(ID)) {
            vmList.splice(index, 1);
          }
        });
      }
      if (type === 'empty') {
        state.vm = [];
      }
      return;
    },


    //2、request params
    REQUESTPARAMS: (state, data) => {
      state.downloadExcel.requestParams = data;
    },
  },
  actions: {
    /* =================== normal data =================== */

    //detailId handle
    detailIdHandle: ({ commit }, data) => {
      commit('DETAILIDHANDLE', data);
    },
    //houseId handle
    houseIdHandle: ({ commit }, data) => {
      commit('HOUSEIDHANDLE', data);
    },
    //houseId handle
    houseNameHandle: ({ commit }, data) => {
      commit('HOUSENAMEHANDLE', data);
    },
    //houseId handle
    houseTypeHandle: ({ commit }, data) => {
      commit('HOUSETYPEHANDLE', data);
    },
    //ownerID handle
    ownerIdHandle: ({ commit }, data) => {
      commit('OWNERIDHANDLE', data);
    },
    //VM handle
    vmhandle({ commit }, data) {
      commit('VMHANDLE', data);
    },

    requestParams({ commit }, data) {
      commit('REQUESTPARAMS', data);
    },
  },
};

export default Stroe;
