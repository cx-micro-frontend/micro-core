<template>
  <div>
    <ns-form
      :model="formData.modelData"
      :ref="autoFormID"
      class="ns-auto-form clear"
      :inline="true"
      v-if="formData && fullRender"
      v-loading="loading"
      element-loading-text="拼命加载中"
      :style="{ width: autoFormWidth + 'px' }"
      :validate-on-rule-change="false"
    >
      <div class="ns-autoForm-content fl">
        <div
          v-for="(firstItem, firstIndex) in formData.fields"
          :index="firstIndex"
          :key="firstIndex"
          :class="['fl', 'auto-form-part-' + firstIndex]"
        >
          <div
            v-if="firstItem[fieldsRefer['item-type']] === 'group'"
            class="ns-group-item clear"
            v-show="!firstItem[fieldsRefer['hidden']]"
            :style="{ width: colmax * firstItem[fieldsRefer['colspan']] + 'px' }"
          >
            <div
              :style="{
                height:
                  firstItem[fieldsRefer['height']] || firstItem[fieldsRefer['height']] === 0
                    ? firstItem[fieldsRefer['height']] + 'px'
                    : 'auto',
                width: firstItem[fieldsRefer['width']] + 'px',
              }"
              class="ns-group fl clear"
            >
              <div
                v-for="(secondItem, secondIndex) in firstItem[fieldsRefer['children']]"
                :index="secondIndex"
                :key="secondIndex"
                :class="['ns-group-part', 'group-part-' + secondIndex, 'fl']"
              >
                <ns-repeat-item
                  v-if="itemsRender"
                  repeatItemType="groupItem"
                  :formData="formData"
                  :coverData="coverData"
                  :formItem="secondItem"
                  :formItemFather="firstItem[fieldsRefer['children']]"
                  :firstIndex="firstIndex"
                  :secondIndex="secondIndex"
                  :cueType="cueType"
                  :maxColWidth="groupBaseColWidth(firstItem)"
                >
                </ns-repeat-item>
              </div>
            </div>
          </div>
          <ns-repeat-item
            v-if="firstItem[fieldsRefer['item-type']] !== 'group' && itemsRender"
            repeatItemType="normalItem"
            :formData="formData"
            :coverData="coverData"
            :formItem="firstItem"
            :formItemFather="formData.fields"
            :firstIndex="firstIndex"
            :secondIndex="null"
            :cueType="cueType"
            :maxColWidth="colmax"
            :showMessage="showMessage"
          >
          </ns-repeat-item>
        </div>
      </div>
      <el-form-item
        :class="handleModulesClass"
        :style="handleModulesStyle"
        v-if="submitRender && buttonInfo"
      >
        <ns-auto-form-operation
          :autoFormID="autoFormID"
          :buttonInfo="buttonInfo"
        ></ns-auto-form-operation>
      </el-form-item>
    </ns-form>
  </div>
</template>
<script>
  import utils from '@NEAP/utils';
  import LoadingData from './dataHandle'; //require data (remote/local) methods
  import {autoFormSubmit} from '../../service/packages/NS-auto-form/NS-auto-form';
  import keyRefer from './keyRefer';

  export default {
    name: 'Ns-auto-form',
    props: {
      autoFormID: {type: String},
      cueType: {type: String, default: 'normal'},
      showMessage: {type: Boolean},
      coverData: {type: Object},
      isLocal: {type: Boolean, default: false},
      isFreeSubmit: {type: Boolean, default: false}, //is custom submit model data
      localData: {type: Object, default: null}, //local Data - formData (not {} / [] / null /undefined / false .......)
      requestUrl: {type: String}, //request url
      funcId: [String, Number],
      submitUrl: {type: String}, //submit url
      isCheck: {type: Boolean, default: false}, //is check auto-form data
      //request query
      query: {
        type: [Object, String, Number],
        default: function () {
          return {};
        },
      },
      buttonPosition: {type: String, default: 'right'}, //auto-form button postion
      buttonInfo: {type: Array},
    },
    data() {
      return {
        fieldsRefer: keyRefer.fields,
        infoRefer: keyRefer.info,
        loading: true, //loding
        itemsRender: false, //items start render
        formData: null, //form data
        customModelData: {}, //submit model data
        itemsGap: 0,
        submitRender: false, //submit operation module render
        noLabelList: ['separator'], //no-label list （ form-component ）
        formDataShow: {},
        dataCheckResult: [], //the table-data of auto-form data list show
        dialogVisible: {visible: false}, //dialog-visible
      };
    },
    computed: {
      colmax() {
        if (this.itemsRender) {
          return this.formColMax(this.formData);
        } else {
          return 0;
        }
      },
      autoFormWidth() {
        if (this.itemsRender) {
          const info = this.formData.info;
          const wsKey = this.infoRefer['width-supply'];
          let supplyW = info.hasOwnProperty(wsKey) ? info[wsKey] : 0; //自动表单宽度补足值
          supplyW = supplyW ? parseInt(supplyW) : 0;
          if (info) {
            return (
              (this.colmax + this.itemsGap) * parseInt(info[this.infoRefer['form-cols']]) + supplyW
            );
          } else {
            throw "info'data in auto-form is error or null，please find it";
          }
        } else {
          return 0;
        }
      },
      //item - handle Modules class （ 操作模块Class类名集合 ）
      handleModulesClass() {
        const bp = this.buttonPosition; //button position sign ( 按钮位置标识 )
        /**
         * _judge string
         * @param str
         * @param index
         * @returns {boolean}
         * @private
         */
        function _judgeStr(str, index) {
          return bp.includes(str, index);
        }

        return [
          'ns-autoForm-handle',
          'fl',
          {txtC: bp === 'center'},
          {txtL: _judgeStr('-left', 1)},
          {txtR: _judgeStr('-right', 1)},
          {'e-left': bp === 'e-left'},
          {'e-right': bp === 'e-right'},
          {'f-left': bp === 'f-left'},
          {'f-right': bp === 'f-right'},
        ];
      },
      //item - handle modules style （ 操作模块样式集合 ）
      handleModulesStyle() {
        const handleModulesTopGap = 20; //submit-handle 上间隙  （ 关系到验证提示信息的位置显示空间 ）
        const handleModulesBottomGap = 20; //submit-handle 下间隙 （ 关系到验证提示信息的位置显示空间 ）
        return {
          width: this.autoFormWidth + 'px',
          'margin-top': this.cueType !== 'normal' ? handleModulesTopGap + 'px' : null,
          'margin-bottom': this.cueType === 'normal' ? handleModulesBottomGap + 'px' : null,
          'padding-left':
            this.buttonPosition.includes('e-', 0) || this.buttonPosition === 'center'
              ? null
              : parseInt(this.formData.info[this.infoRefer['label-width']]) + 'px',
        };
      },
      //full-fullRender (整体渲染开关)
      fullRender() {
        const showKey = 'show'; //在表单控制数据中，控制显示的字段名
        const ID = this.autoFormID;
        const controllerList = this.$store.state.AutoForm.control.formController; //表单控制数组
        return this.isShowinControl(controllerList, ID, showKey);
      },
    },
    watch: {
      // if fullRender (this auto-form ID is not in createList in Vuex) change,empty form-data and request again
      fullRender() {
        this.formData = null;
        this.LoadData(); //loading auto-form data
      },
    },
    created() {
      this.LoadData(); //loading auto-form data
    },
    mounted() {
      //submit operation module render
      this.submitRender = true;
    },
    updated: function () {
    },
    filters: {},
    methods: {
      /**
       * Load data for auto-form (local / request)
       */
      LoadData() {
        //full-fullRender (整体渲染开关是否开启)
        if (this.fullRender) {
          //加载获取 表单数据
          LoadingData(this);
        }
      },
      /**
       * set max-base-colWidth in auto-form
       * @param formData          data-form from back-sql
       * @returns {number}
       */
      formColMax(formData) {
        const formFields = formData.fields; //form-fields infomation
        const info = formData.info; //form-info infomation
        if (info && this.itemsRender) {
          let max = 0;
          let a;
          const formCol = parseInt(info[this.infoRefer['form-cols']]); //form-colspan;
          formFields.map((val, index) => {
            const itemId =
              val[this.fieldsRefer['model-key']] +
              '-' +
              val[this.fieldsRefer['item-type']] +
              '-' +
              index; // get items-ID
            const fieldCols = parseInt(val[this.fieldsRefer['colspan']]); // get fields-colspan
            const w = val[this.fieldsRefer['width']]; // get fields-width
            //check the number of form-cols and field-cols
            if (fieldCols > formCol) {
              throw 'The error index: ' +
              index +
              ' , item_ID: ' +
              itemId +
              ', In your auto-formData configuration list ,the value of field-Col' +
              ' is larger than form-col of form , you should change form-col more large or change field-Col more small, find it again.';
            }
            if (w === null || typeof w === 'undefined') {
              a = 0;
            } else {
              a = parseInt(w) / fieldCols;
              max <= a ? (max = a) : (max = max);
            }
          });
          console.log('最大单位宽度：');
          console.log(max);
          return max;
        }
      },

      /**
       * auto form submit
       * @param formName      form name
       * @param addValidate 增加校验规则
       */
      submitForm(formName, addValidate=true) {
        //before validate handle
        return new Promise((resolve, reject) => {

          this.$refs[formName].validate(valid => {
            //表单提交添加'all-check' 标识到checkList中，开启第一级验证开关（即对所有自定义验证的表单进行验证）。
            this.$store.dispatch('setCustomCheck', 'all-check'); //多张表单 存在bug
            //validate right
            if (valid && utils.checkRange('.ns-form', '.ns-is-error')) {
              //sure quert for auto-form submit
              const query = this.isFreeSubmit ? this.customModelData : this.formData.modelData;
              //submit request
              if (!addValidate) {
                return reject();
              }
              autoFormSubmit(this.submitUrl, query).then((res) => {
                resolve(res)
              }).catch(() => {
                reject();
              })
            } else {
              reject();
            }
            // else{
            //   let errDoms =  $('.el-form-item.is-error ');
            //   errDoms && errDoms.eq(0).find('input').focus();
            // }
          });
        })
      },

      /**
       * auto form reset
       * @param formName
       */
      resetForm(formName) {
        const params = {
          vm: this, //vue
          formData: this.formData, //formData
          formName: formName, //form name
        };
        //element base reset function
        this.$refs[formName].resetFields();
        this.$refs[formName].clearValidate();
        this.$store.dispatch('setCustomCheck', 'no-check');
        //附加重置方法
        this.$emit('reset', params);
      },

      /**
       * judge this auto form is show or not by parameter form formController - vuex （ 判断表单整体是否触发显示 ）
       * @param list        formController List
       * @param ID          auto-form-ID
       * @param key         show-key （在表单控制数据中，控制显示的字段名）
       * @returns {boolean}
       */
      isShowinControl(list, ID, key) {
        return list.some((item, index) => {
          if (item.hasOwnProperty(ID)) {
            const switchVal = item[ID][key];
            return utils.isXType('boolean', switchVal) && switchVal;
          }
        });
      },
      /**
       * groupBaseColWidth
       * @param formItem
       * @returns {number}
       */
      groupBaseColWidth(formItem) {
        const baseColWidth = parseInt(formItem[this.fieldsRefer['width']]);
        const groupCols = parseInt(formItem[this.fieldsRefer['groupMaxColspan']]);
        return baseColWidth / groupCols;
      },


      /**
       * button role information ( 按钮权限信息 )
       * @param info            role information (Object)
       * @returns {{code, name, nameEn, areaType, index, btnType, coerciveShow: (*|boolean)}}
       */
      btnRoleInfo(info) {
        return {
          code: info.code, //按钮编码
          name: info.name, //按钮名称
          nameEn: info.nameEn, //按钮英文名称
          areaType: info.areaType, //按钮区域类型
          index: info.index, //排序号
          btnType: info.btnType, //按钮类型 （single / dropDown）
          coerciveShow: info.coerciveShow, //按钮是否强制显示
        };
      },
    },
  };
</script>

