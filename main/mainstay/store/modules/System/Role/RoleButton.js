import { roleButtonList } from '../../../../service/System/Role/role-button';


const RoleButton = {
  state: {
    roleButtonList: [],

    roleButton: {
      ACTION: [],
      FORM: [],
      GRID: [],
    },
  },

  mutations: {
    SET_ROLE_BUTTON_LIST: (state, data) => {
      const td = (data, type) => {
        data.forEach(item => {
          if (item.areaType === 'ACTION') {
            item.type = 'text';
          }
          if (item.areaType === 'FORM') {
            let normalBtns = ['formCancelBtn', 'formReturnBtn'];
            item.type = normalBtns.indexOf(item.code) > -1 ? 'normal' : 'primary';
          }
        });
        return data;
      };
      state.roleButtonList = data;
      state.roleButton.ACTION = td(data).filter(item => item.areaType === 'ACTION');
      state.roleButton.FORM = td(data).filter(item => item.areaType === 'FORM');
      state.roleButton.GRID = data.filter(item => item.areaType === 'GRID');

    },

    CLEAR_ROLE_BUTTON_LIST: (state) => {
      state.roleButtonList = [];
      state.roleButton.ACTION = [];
      state.roleButton.FORM = [];
      state.roleButton.GRID = [];
    },
  },

  actions: {
    getRoleButtonList: ({ commit }, requestHead) => {
      commit('CLEAR_ROLE_BUTTON_LIST');
      let btnlist = null;
      return new Promise((resolve, reject) => {
        roleButtonList(requestHead)
          .then(response => {
            try {
              btnlist = response.resultData.map(item => {
                return {
                  code: item.resourcebuttonCode, //按钮编码
                  name: item.resourcebuttonName, //按钮名称
                  nameEn: item.resourcebuttonNameEn, //按钮英文名称
                  areaType: item.resourcebuttonType, //按钮区域类型
                  index: item.syOrderindex, //排序号
                  btnType: item.resourcebuttonBigiconcls, //按钮类型 （single / dropDown）
                  disabled: item.resourcebuttonDisabled === '1',//是否禁用
                  hide: item.resourcebuttonHidden === '1', //是否隐藏
                  icon: item.resourcebuttonIconcls,//按钮图标
                };
              });
            }
            catch (e) {
              btnlist = [];
            }
            commit('SET_ROLE_BUTTON_LIST', btnlist);
            resolve(btnlist);
          }).catch(err => {
            btnlist = [];
            commit('SET_ROLE_BUTTON_LIST', btnlist);
            reject(err);
          },
        );
      });
    },
  },

};

export default RoleButton;
