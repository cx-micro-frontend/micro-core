/*
 * auxiliary for Vue
 * With the wrapper function below, you can use the Vue extension function more quickly
 * created: 2017/7/3.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */

import {autoForm, autoFormSubmit} from '../service/packages/NS-auto-form/NS-auto-form';
import tableHeadMap from '../packages/NS-auto-form/BateData/table-head';
import utils from '@NEAP/utils';
import keyRefer from '../packages/NS-auto-form/keyRefer';
import * as store from '@NEAP/utils/nsQuery/nsStore';
/**
 * create params for validate/reset
 * @param formName
 * @returns {{vm, formData, formName: *}}
 */
function _createParams(formName) {
  const vm = store.vm.get(formName);
  return {
    vm: vm, //vue
    formData: vm.formData, //formData
    formName: formName, //form name
  };
}

export default {
  install: function (Vue, options) {
    //autoForm
    Vue.prototype.autoForm = {
      /**
       * create auto-form data
       * @param url
       * @param requestHead
       * @param query
       * @param cb            success callback function
       */
      create: (url, requestHead, query, cb) => {
        autoForm(url, requestHead, query)
          .then(response => {
            cb(response.resultData);
          })
          .catch(response => {
            return Promise.reject(response);
          });
      },


      /**
       * auto-form submit
       * @param url
       * @param query
       * @param cb       success callback function
       */
      submit: (url, query) => {
        return autoFormSubmit(url, query)
          .then(response => {
            console.log('表单提交成功！！');
            console.log(response);
            return response.resultData;
          });
      },

      /**
       * validate
       * @param formName
       */
      validate: formName => {
        return new Promise((resolve, reject) => {
          let cp = _createParams(formName);
          console.log('提交数据如下：');
          console.log(cp.formData.modelData);
          // console.log(JSON.stringify(cp.formData.modelData, null, 4));
          cp.vm.$refs[formName].validate(valid => {
            //表单提交添加'all-check' 标识到checkList中，开启第一级验证开关（即对所有自定义验证的表单进行验证）。
            cp.vm.$store.dispatch('setCustomCheck', 'all-check'); //多张表单 存在bug
            if (valid && utils.checkRange('.ns-form', '.ns-is-error')) {
              console.log('表单验证成功');
              resolve(cp);
            } else {
              console.log('表单验证失败');
              reject();
            }
          });
        });
      },
      /**
       * auto form reset
       * @param formName
       */
      resetForm: formName => {
        return new Promise((resolve, reject) => {
          const cp = _createParams(formName);
          //element base reset function
          cp.vm.$refs[formName].resetFields();
          cp.vm.$store.dispatch('setCustomCheck', 'no-check');
          resolve(cp);
        });
      },
      /**
       * element base reset function
       * @param formName
       */
      elResetForm(formName) {
        const cp = _createParams(formName);
        cp.vm.$refs[formName].resetFields();
      },

      /**
       * convert width / height - units
       * @param val
       * @param type
       * @param base
       * @returns {*}
       */
      convertUnits: function (val, type, base) {
        if (val || val === 0) {
          if (utils.judgeType(val) === 'number') {
            return val + 'px';
          } else if (utils.judgeType(val) === 'string') {
            return val;
          } else {
            throw 'the value of the units must be string or number format ，you better find it';
          }
        } else {
          if (type) {
            if (base) {
              return base;
            } else {
              return type === 'width' ? '100%' : null;
            }
          } else {
            throw 'in function of \'convertUnits\', you should set type-value to tell this function ' +
            'which style ( width / height ) you went to set value.';
          }
        }
      },

      /**
       * get table-head data from local static data
       * @param name          //table-head-name(key) && the value of this TableFetch'area-linkage v-model
       */
      getTableHead: name => {
        const data = tableHeadMap;
        return data[name];
      },

      /**
       * group-witch (show or hide) for auto-form
       * @param params
       */
      groupSwitch: params => {
        const fieldsRefer = keyRefer.fields; //指代属性集合
        const initiator = 'separator';
        const formItem = params.formItem;
        //judge initiator is 'separator' or not ， because only 'separator' can handle form-items hide or show
        if (formItem[fieldsRefer['item-type']] !== initiator) return;
        params.formItemFather.map((item, index) => {
          /*Exclude the object(initiator) whitch is handle(has clicked) itself by index, and target-groupname equals(is) initiator-groupname*/
          if (
            index !== params.index &&
            item[fieldsRefer['group-name']] === formItem[fieldsRefer['group-name']]
          ) {
            item[fieldsRefer['hidden']] = utils.invert(item[fieldsRefer['hidden']]);
          }
        });
      },
    };
  },
};
