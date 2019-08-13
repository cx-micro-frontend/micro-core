<!--单元表单-->
<template>
  <ns-dialog
    id="unit-dialog"
    :title="title"
    size="large"
    :visible.sync="dialogVisible.visible"
    @close="dialogClose(autoFormID)"
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
  import resetData from './unit-form.js';
  import mixinForm  from '../mixinForm';
  import utils from '@NEAP/utils';

  export default {
    name: 'unit-form',
    pageFormId: 'unit',

    mixins: [mixinForm],

    props: {
      //dialog 开关
      dialogVisible: {
        type: Object,
        default: function() {
          return {
            visible: false,
          };
        },
      },
      //点击的树节点的数据
      itemInfo: {
        type: Object,
      },
      //操作类型 新增、编辑
      type: {
        type: String,
      },
    },
    data() {
      return {
        //============= other ==============
        title: '',
        houseInfo: {},
        localData: {},

        //============= auto form ==============
        autoFormID: 'house-tree-unit-form', //表单唯一ID值
        showMessage: false,
        submitUrl: 'owner/owner-rest/house/add-house-node',
        coverData: {
          resourcefieldBindingfnList: {
            houseName: params => {
              //当名称houseName的事件类型为 blur失焦时，保持简称的值与名称同步更改，基础组件需增加失焦事件
              if (params.type === 'change') {
                params.formData.modelData.unitShortName = params.formData.modelData.houseName;
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
          'unitShortName',
          'houseNo',
          'builder',
          'remark',
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
      }
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  #unit-dialog {
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
