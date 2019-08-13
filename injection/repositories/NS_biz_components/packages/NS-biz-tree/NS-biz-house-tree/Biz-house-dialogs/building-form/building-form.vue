<!--楼栋表单-->
<template>
  <ns-dialog
    id="building-dialog"
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
import resetData from './building-form.js';
import mixinForm  from '../mixinForm';
import utils from '@NEAP/utils';
export default {
  name: 'building-form',
  pageFormId: 'building',

  mixins: [mixinForm],

  data() {
    return {
      //============= other ==============
      title: '',
      houseInfo: {},
      localData: {},
      afterGetHouse: false, // getHouseInfo请求是否执行完

      //============= auto form ==============
      autoFormID: 'house-tree-building-form', //表单唯一ID值
      showMessage: false,
      submitUrl: 'owner/owner-rest/house/add-house-node',
      coverData: {
        resourcefieldBindingfnList: {
          houseName: params => {
            //当名称houseName的事件类型为 blur失焦时，保持简称的值与名称同步更改，基础组件需增加失焦事件
            if (params.type === 'change') {
              params.formData.modelData.buildingShortName = params.formData.modelData.houseName;
            }
          },
        },
        dynamicQuery: {},
      },

      //表单fields
      assignList: [
        'parentId',
        'parentHouseName',
        'houseName',
        'buildingShortName',
        'houseNo',
        'developer',
        'builder',
        'remark',
        'startWorkTime',
        'completeTime',
        'deliveryTime',
        'buildingArea',
        'totalFloorNumber',
        'totalRoomNumber',
      ],
      loadingForm: true,
      submitLoading: false,
      changeLogItems: [], //操作日志---时间轴数据
    };
  },
  methods: {
    //================== 初始化相关操作 ====================
    init() {
      this.getHouseInfo();
      this.localData = utils.deepClone(resetData);
    },
    /**
     * 表单请求完成后的赋值操作
     * @param modelData
     */
    afterFormRequestAssign(modelData) {
      this.assignList.forEach((value, index) => {
        this.$set(modelData, value, this.houseInfo[value]);
      });
      if (this.type === 'edit') {
        //编辑
        modelData.parentHouseName =
          this.houseInfo.parentId === 0
            ? ''
            : this.houseInfo.houseFullName.replace('-' + this.houseInfo.houseName, '');
      } else {
        //新增
        modelData.parentHouseName = this.itemInfo.houseFullName || '';
      }
    },

    //================== 自动表单相关操作 ====================

    /**
     * addValidate  增加校验
     */
    addValidate(){
      let {startWorkTime, completeTime, deliveryTime, } = this.localData.modelData;
      if(startWorkTime && completeTime && startWorkTime > completeTime){
        this.$message({ message: '竣工日期不能小于开工日期', type: 'error' });
        return false
      }

      if(startWorkTime && deliveryTime && startWorkTime > deliveryTime){
        this.$message({ message: '交付日期不能小于开工日期', type: 'error' });
        return false
      }

      if(completeTime && deliveryTime && completeTime > deliveryTime){
        this.$message({ message: '交付日期不能小于竣工日期', type: 'error' });
        return false
      }

      return true
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
#building-dialog {
  .showTab {
    .el-tabs__header {
      display: none;
    }
  }
}
</style>
