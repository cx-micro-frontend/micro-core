<!--车库表单-->
<template>
  <ns-dialog
    id="garage-dialog"
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
      </ns-tab-pane>
      <ns-tab-pane label="操作日志" v-if="type === 'edit'">
        <ns-biz-import-logs
          :importData="{ id: itemInfo.houseId, type: 'houseTreeOrViewsForm' }"
        ></ns-biz-import-logs>
      </ns-tab-pane>
    </ns-tabs>
    <!--按钮-->
    <div slot="footer">
      <ns-button type="primary" @click="autoFormSubmit(autoFormID)" :disabled="submitLoading">保存</ns-button>
      <ns-button @click="autoFormCancel(autoFormID)">取消</ns-button>
    </div>
  </ns-dialog>
</template>

<script>
  import resetData from './garage-form.js';
  import utils from '@NEAP/utils';
  import mixinForm  from '../mixinForm';

  export default {
    name: 'garage-form',
    pageFormId: 'garage',

    mixins: [mixinForm],

    data() {
      return {
        //============= other ==============
        title: '',
        houseInfo: {},
        localData: {},

        operationType: { isTrue: true },

        //============= auto form ==============
        autoFormID: 'house-tree-garage-form', //表单唯一ID值
        showMessage: false,
        submitUrl: 'owner/owner-rest/house/add-house-node',
        coverData: {
          resourcefieldBindingfnList: {
            houseName: params => {
              //当名称houseName的事件类型为 blur失焦时，保持简称的值与名称同步更改，基础组件需增加失焦事件
              if (params.type === 'change') {
                params.formData.modelData.garageShortName = params.formData.modelData.houseName;
              }
            },
          },
          dynamicQuery: {},
        },
        loadingForm: true,
        submitLoading: false,

        //表单fields
        assignList: [
          'parentId',
          'parentHouseName',
          'houseName',
          'garageShortName',
          'houseNo',
          'builder',
          'remark',
          'developer',
          'carportCount',
          'buildingArea',
          'deliveryTime',
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
       * 表单请求完成后的赋值操作
       * @param modelData
       */
      afterFormRequestAssign(modelData) {
        this.assignList.forEach((value, index) => {
          this.$set(modelData, value, this.houseInfo[value]);
        });
        //编辑
        if (this.type === 'edit') {
          modelData.parentHouseName =
            this.houseInfo.parentId === 0
              ? ''
              : this.houseInfo.houseFullName.replace('-' + this.houseInfo.houseName, '');
        }
        //新增
        else {
          modelData.parentHouseName = this.itemInfo.houseFullName || '';
        }
      },

      /**
       * after request
       * @param vm    this
       * @param data  form data
       */
      afterRequest(vm, data) {
        let modelData = data.modelData;
        this.afterFormRequestAssign(modelData);
        this.loadingForm = false;
      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  #garage-dialog {
    .showTab {
      .el-tabs__header {
        display: none;
      }
    }
  }
</style>
