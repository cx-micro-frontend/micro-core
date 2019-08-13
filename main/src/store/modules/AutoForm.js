import utils from '@NEAP/mainstay/utils';

/*ns Encapsulation autoForm - Automatic Verification：
On the label of ns-simple-item, any'ns-is-error'class name is used as an error mark, and the activation error identification is as follows
1, the required switch opens: required = true / &amp; checkList contains value (current autoForm key + ordinal value), which does not satisfy the situation.
2, required switch open: required = true &amp; &amp; checkList contains values (current autoForm key value + serial number value) to satisfy the situation, but the autoForm content does not meet the verification requirements
3, the autoForm of the overall submission triggering the above 2 points do not meet the requirements, the autoForm submitted changes checkList contains'all-check', can open the first level verification switch.
4. When defocus / change is verified, change checkList = conform to the current autoForm key value + ordinal value, and open the first level verification switch.
5, when emptying the reset autoForm, set checkList = [] only (the incoming value is'no-check').
5. For details, see the code.
*/
const AutoForm = {
  state: {
    check: {
      checkList: [],
    },
    control: {
      formController: [],
      initModelData: {},
      requestFormId: '',
      counter: [],
    },
  },

  mutations: {
    SETCUSTOMCHECK: (state, data) => {
      if (data === 'no-check') {
        state.check.checkList = [];
      } else {
        if (!utils.arrContainObj(state.check.checkList, data)) {
          state.check.checkList.push(data);
        }
      }
    },
    SETFORMCONTROLLER: (state, data) => {
      let isHasAutoFormInfo = false;
      const controllerList = state.control.formController;
      const type = data.type;
      const ID = data.ID;
      if (type === 'set') {
        const query = data.query;
        if (controllerList.length > 0) {
          controllerList.map((item, index) => {
            if (item.hasOwnProperty(ID)) {
              const itemObj = item[ID];
              Object.assign(itemObj, query);
              isHasAutoFormInfo = true;
            }
          });
          if (!isHasAutoFormInfo) {
            controllerList.push({[ID]: query});
          }
        } else {
          controllerList.push({[ID]: query});
        }
      }
      if (type === 'delete') {
        controllerList.map((item, index) => {
          if (item.hasOwnProperty(ID)) {
            controllerList.splice(index, 1);
          }
        });
      }
      if (type === 'empty') {
        state.control.formController = [];
      }
    },
    AUTOFORMCOUNTER: (state, data) => {
      const counterList = state.control.counter;
      const type = data.type;
      const ID = data.ID;
      switch (type) {
        case 'register':
          if (counterList.length === 0) {
            counterList.push({[ID]: data.initNum});
            break;
          } else {
            let sw = false;
            for (let i = 0; i < counterList.length; i++) {
              if (counterList[i].hasOwnProperty(ID)) {
                sw = true;
              }
            }
            if (sw) {
              counterList.push({[ID]: data.initNum});
            }
            break;
          }
        case 'add':
          for (let i = 0; i < counterList.length; i++) {
            if (counterList[i].hasOwnProperty(ID)) {
              counterList[i][ID]++;
              break;
            }
          }
          break;
        case 'reduce':
          for (let i = 0; i < counterList.length; i++) {
            if (counterList[i].hasOwnProperty(ID)) {
              counterList[i][ID]--;
              break;
            }
          }
          break;
        case 'empty':
          for (let i = 0; i < counterList.length; i++) {
            if (counterList[i].hasOwnProperty(ID)) {
              counterList[i][ID] = 0;
              break;
            }
          }
          break;
        default:
          throw("the auto-from counter methods is error, only 'register', 'add', 'reduce'，and 'empty' methods，find it.");
      }
    },
    INITMODELDATASTORE: (state, data) => {
      state.control.initModelData = data;
    },
    SETREQUESTFORMID: (state, data) => {
      state.control.requestFormId = data;
    },
  },
  actions: {
    setCustomCheck({commit}, data) {
      commit('SETCUSTOMCHECK', data);
    },
    setFormController({commit}, data) {
      commit('SETFORMCONTROLLER', data);
    },
    autoFormCounter({commit}, data) {
      commit('AUTOFORMCOUNTER', data);
    },
    initModelDataStore({commit}, data) {
      commit('INITMODELDATASTORE', data);
    },
    setRequestFormId({commit}, data) {
      commit('SETREQUESTFORMID', data);
    },
  },
};

export default AutoForm;
