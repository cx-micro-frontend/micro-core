<!--区域表单-->
<template>
  <ns-dialog
    id="area-dialog"
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
  import resetData from './area-form.js';
  import mixinForm from '../mixinForm';
  import utils from '@NEAP/utils';

  export default {
    name: 'area-form',
    pageFormId: 'area',

    mixins: [mixinForm],

    data() {
      return {
        //============= other ==============
        title: '',
        houseInfo: {},
        localData: {},

        //============= auto form ==============
        autoFormID: 'house-tree-area-form', //表单唯一ID值
        showMessage: false,
        submitUrl: 'owner/owner-rest/house/add-house-node',
        coverData: {},
        changeLogItems: [], //操作日志---时间轴数据
        loadingForm: true,
        submitLoading: false,
      };
    },
    methods: {
      //================== 初始化相关操作 ====================
      init() {
        this.getHouseInfo();
        this.localData = utils.deepClone(resetData);
      },

      //================== 自动表单相关操作 ====================
      /**
       * 提交前的赋值HouseInfo
       * @param modelData
       */
      assignHouseInfo(modelData) {
        this.houseInfo.houseName = modelData.houseName;
        return JSON.stringify(this.houseInfo);
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

      /**
       * 表单请求完成后的赋值操作
       * @param modelData
       */
      afterFormRequestAssign(modelData) {
        modelData.houseName = this.type === 'edit' ? this.houseInfo.houseName : '';
        modelData.parentId = this.type === 'edit' ? this.houseInfo.parentId : '';
      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  #area-dialog {
    .showTab {
      .el-tabs__header {
        display: none;
      }
    }
  }
</style>
