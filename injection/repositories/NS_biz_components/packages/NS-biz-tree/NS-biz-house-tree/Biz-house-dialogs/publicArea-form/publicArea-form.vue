<!--公共区域表单-->
<template>
  <ns-dialog
    id="publicArea-dialog"
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
          <i title="已解锁" v-if="houseInfo.isLock == 0">
            <ns-icon-svg icon-class="suoopen"></ns-icon-svg>
          </i>
          <i title="已锁定" v-else>
            <ns-icon-svg icon-class="suo"></ns-icon-svg>
          </i>
        </div>
      </ns-tab-pane>
      <ns-tab-pane label="操作日志" v-if="type === 'edit'">
        <ns-biz-import-logs
          :importData="{ id: itemInfo.houseId, type: 'houseTreeOrViewsForm' }"
        ></ns-biz-import-logs>
      </ns-tab-pane>
    </ns-tabs>
    <!--按钮-->
    <div slot="footer" v-show="houseInfo.isLock !== 1">
      <ns-button type="primary" @click="autoFormSubmit(autoFormID)" :disabled="submitLoading">保存</ns-button>
      <ns-button @click="autoFormCancel(autoFormID)">取消</ns-button>
    </div>
  </ns-dialog>
</template>

<script>
  import resetData from './publicArea-form.js';
  import mixinForm from '../mixinForm';
  import utils from '@NEAP/utils';

  export default {
    name: 'publicArea-form',
    pageFormId: 'publicArea',

    mixins: [mixinForm],

    data() {
      return {
        //============= other ==============
        title: '',
        houseInfo: {},
        loadingForm: true,
        submitLoading: false,

        //============= auto form ==============
        autoFormID: 'house-tree-publicArea-form', //表单唯一ID值
        showMessage: false,
        submitUrl: 'owner/owner-rest/house/add-house-node',
        coverData: {
          resourcefieldBindingfnList: {
            houseName: params => {
              //当名称houseName的事件类型为 blur失焦时，保持简称的值与名称同步更改，基础组件需增加失焦事件
              if (params.type === 'change') {
                params.formData.modelData.publicAreaShortName = params.formData.modelData.houseName;
              }
            },
          },
          dynamicQuery: {},
          isResourcefieldRemoved: {},
          items: {},
          isResourcefieldHidden: {},
        },

        //表单fields
        assignList: [
          'parentId',
          'houseName',
          'publicAreaShortName',
          'houseNo',
          'deliveryTime',
          'developer',
          'remark',
          'startWorkTime',
          'completeTime',
          'buildingArea',
          'builder',
        ],
        changeLogItems: [], //操作日志---时间轴数据
      };
    },

    methods: {
      //================== 初始化相关操作 ====================
      init() {
        this.getHouseInfo();
        this.localData =  utils.deepClone(resetData);
      },

      /**
       * 提交前的赋值HouseInfo
       * @param modelData
       */
      assignHouseInfo(modelData) {
        this.assignList.forEach((value, index) => {
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
        this.afterFormRequestAssign(modelData);
        this.loadingForm = false;
      },

      //================== 自动表单相关操作 ====================
      addValidate(){
        let {startWorkTime, completeTime} = this.localData.modelData;
        if(startWorkTime && completeTime && startWorkTime > completeTime ){
          this.$message({ message: '竣工日期不能小于开工日期', type: 'error' });
          return false;
        }
        return true
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

    },
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  #publicArea-dialog {
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
