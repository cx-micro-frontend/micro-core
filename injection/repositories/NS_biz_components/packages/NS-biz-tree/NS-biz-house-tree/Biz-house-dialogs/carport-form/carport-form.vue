<!--车位表单-->
<template>
  <ns-dialog
    id="carport-dialog"
    :title="title"
    size="large"
    :visible.sync="dialogVisible.visible"
    @close="dialogClose(autoFormID)"
    v-if="dialogVisible.visible"
  >
    <ns-tabs :class="{ showTab: type !== 'edit' }">
      <ns-tab-pane label="基本信息" v-loading="loadingForm">
        <ns-auto-form
          ref="autoForm"
          :autoFormID="autoFormID"
          :submit-url="submitUrl"
          :is-local="true"
          :local-data="localData"
          :query="{}"
          :cover-data="coverData"
          :showMessage="showMessage"
          cue-type="only-error"
          @afterRequest="afterRequest"
        >
        </ns-auto-form>
        <div class="lock-icon-wrap" v-if="type === 'edit'">
          <ns-icon-svg icon-class="suoopen" v-if="houseInfo.isLock === 0"></ns-icon-svg>
          <ns-icon-svg icon-class="suo" v-else></ns-icon-svg>
        </div>
      </ns-tab-pane>
      <ns-tab-pane label="操作日志" v-if="type === 'edit'">
        <ns-biz-import-logs
          :importData="{ id: itemInfo.houseId, type: 'houseTreeOrViewsForm' }"
        ></ns-biz-import-logs>
      </ns-tab-pane>
    </ns-tabs>
    <!--按钮-->
    <div slot="footer"  v-show="houseInfo.isLock !== 1">
      <ns-button type="primary" @click="autoFormSubmit(autoFormID)" :disabled="submitLoading">保存</ns-button>
      <ns-button @click="autoFormCancel(autoFormID)">取消</ns-button>
    </div>
  </ns-dialog>
</template>

<script>
  import { getDictionaryList } from '../../../../../service/packages/NS-form-components/getOptions';
  import resetData from './carport-form.js';
  import utils from '@NEAP/utils';
  import * as store from '@NEAP/utils/nsQuery/nsStore';
  import mixinForm  from '../mixinForm';


  export default {
    name: 'carport-form',
    pageFormId: 'carport',

    mixins: [mixinForm],

    data() {
      return {
        //============= other ==============
        title: '',
        houseInfo: {},
        afterGetHouse: false, // getHouseInfo请求是否执行完
        afterGetDict: false, // getDictionary请求是否执行完

        //============= auto form ==============
        autoFormID: 'house-tree-carport-form', //表单唯一ID值
        showMessage: false,
        submitUrl: 'owner/owner-rest/house/add-house-node',
        coverData: {
          resourcefieldBindingfnList: {
            houseName: params => {
              //当名称houseName的事件类型为 blur失焦时，保持简称的值与名称同步更改，基础组件需增加失焦事件
              if (params.type === 'change') {
                params.formData.modelData.carportShortName = params.formData.modelData.houseName;
              }
            },
          },
          dynamicQuery: {},
        },
        loadingForm: true,
        submitLoading: false,
        //============= select 下拉列表options ==============
        carportTypeIdItems: [], // 房产类型下拉列表数据

        //表单fields
        assignList: [
          'parentId',
          'houseName',
          'carportTypeId',
          'carportShortName',
          'houseNo',
          'isVirtual',
          'isBlockUp',
          'chargingArea',
          'assistChargingArea',
          'deliveryTime',
          'takeOverTime',
          'remark',
          'insideArea',
          'poolArea',
          'buildingArea',
          'maintenanceDate',
        ],
        changeLogItems: [], //操作日志---时间轴数据
      };
    },

    watch: {
      // 监听getHouseInfo请求执行完成
      afterGetHouse() {
        this.changeDialogShowState();
      },
      // 监听getDictionary请求执行完成
      afterGetDict() {
        this.changeDialogShowState();
      },
    },

    methods: {
      //================== 初始化相关操作 ====================
      init() {
        this.getHouseInfo();
        this.getDictionary();
        this.afterGetHouse = false;
        this.afterGetDict = false;
        this.localData =  utils.deepClone(resetData)
      },

      //@overwritter 把houseJson赋给houseInfo
      setHouseInfo(houseJson) {
        try {
          this.houseInfo = JSON.parse(houseJson);
        } catch (e) {
          this.houseInfo = {};
        }
        this.afterGetHouse = true;
      },

      //格式化数据字典
      formatSelectItems(itemTxt, res) {
        this[itemTxt] = res.map((value, index, res) => {
          return {
            label: value.dictionaryitemItemname,
            value: value.dictionaryitemItemcode,
          };
        });
      },
      //获取数据字典
      getDictionary() {
        getDictionaryList({
          dictionaryDdcodeList: [
            'proNature',
            'performanceStatus',
            'proTypeId',
            'roomTypeId',
            'roomPropertyId',
            'roomHouseType',
            'carportTypeId',
          ],
        })
          .then(res => {
            let resultData = res.resultData;
            if (resultData.carportTypeId && resultData.carportTypeId.length > 0) {
              //车位类型
              this.formatSelectItems(
                'carportTypeIdItems',
                resultData.carportTypeId[0].dictionaryitemVos,
              );
            }
            this.afterGetDict = true;
          })
          .catch(res => {
            this.afterGetDict = true;
          });
      },

      /**
       * 提交前的赋值HouseInfo
       * @param modelData
       */
      assignHouseInfo(modelData) {
        this.assignList.forEach((value, index) => {
          if (value === 'maintenanceDate' && modelData[value] === '') {
            modelData[value] = [];
          }
          this.$set(this.houseInfo, value, modelData[value]);
        });
        this.houseInfo.isVirtual = this.houseInfo.isVirtual ? 1 : 0;
        this.houseInfo.isBlockUp = this.houseInfo.isBlockUp ? 1 : 0;
        return JSON.stringify(this.houseInfo);
      },

      /**
       * 表单请求完成后的赋值操作
       * @param modelData
       */
      afterFormRequestAssign(modelData) {
        this.assignList.forEach((value, index) => {
          this.$set(modelData, value, this.houseInfo[value]);
        });
        //编辑
        if (this.type === 'edit') {
          if (modelData['maintenanceDate'][0] === null && modelData['maintenanceDate'][1] === null) {
            modelData['maintenanceDate'] = [];
          }
          modelData.isVirtual = modelData.isVirtual === 1;
          modelData.isBlockUp = modelData.isBlockUp === 1;
          modelData.parentHouseName =
            this.houseInfo.parentId === 0
              ? ''
              : this.houseInfo.houseFullName.replace('-' + this.houseInfo.houseName, '');
          this.assignQRCode(modelData); //二维码
        }
        //新增
        else {
          modelData.parentHouseName = this.itemInfo.houseFullName || '';
          this.assignQRCode(false);
        }
      },

      //================== 自动表单相关操作 ====================

      /**
       * after request
       * @param vm    this
       * @param data  form data
       */
      afterRequest(vm, data) {
        let modelData = data.modelData;
        this.fields = data.fields;
        if (this.houseInfo.isLock === 1) {
          this.afterFormRequestRemoved(data.fields, true); //不可编辑
        } else {
          this.afterFormRequestRemoved(data.fields, false); //可编辑
        }

        //赋值特定select 的 options 下拉数组列表
        this.coverData.items = {
          carportTypeId: this.carportTypeIdItems,
        };

        //表单请求完成后的赋值操作
        this.afterFormRequestAssign(modelData);
        this.loadingForm = false;
      },

      /**
       * 锁定状态下不可编辑
       * @param fields
       * @param isRemoved
       */
      afterFormRequestRemoved(fields, isRemoved) {
        fields.forEach(item => {
          item.isResourcefieldRemoved = isRemoved;
          if (item.children && item.children.length > 0) {
            this.afterFormRequestRemoved(item.children, isRemoved);
          }
        });
      },


      // 注册渲染表单
      changeDialogShowState() {
        // getHouseInfo和getDictionary两个方法获取到数据之后注册渲染表单
        if (this.afterGetHouse && this.afterGetDict) {
          store.formController.set(this.autoFormID, { show: true }); //注册渲染表单
        }
      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  #carport-dialog {
    .lock-icon-wrap {
      position: absolute;
      right: 0;
      top: 0;
      .ns-icon-svg {
        font-size: 22px;
        color: #6e6e6e;
      }
    }
    .showTab {
      .el-tabs__header {
        display: none;
      }
    }
  }
</style>
