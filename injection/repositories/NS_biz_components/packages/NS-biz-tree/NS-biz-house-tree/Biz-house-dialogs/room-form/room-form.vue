<!--新增/编辑房间表单-->
<template>
  <ns-dialog
    id="room-dialog"
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
    <div slot="footer" v-show="houseInfo.isLock !== 1">
      <ns-button type="primary" @click="autoFormSubmit(autoFormID)" :disabled="submitLoading">保存</ns-button>
      <ns-button @click="autoFormCancel(autoFormID)">取消</ns-button>
    </div>
  </ns-dialog>
</template>

<script>
import resetData from './room-form.js';
import mixinForm  from '../mixinForm';
import * as store from '@NEAP/utils/nsQuery/nsStore';
import utils from '@NEAP/utils';
import { getDictionaryList } from '../../../../../service/packages/NS-form-components/getOptions';

export default {
  name: 'room-form',
  pageFormId: 'room',

  mixins: [mixinForm],

  data() {
    return {
      //============= other ==============
      title: '',
      houseInfo: {},
      localData: {},
      afterGetHouse: false, // getHouseInfo请求是否执行完
      afterGetDict: false, // getDictionary请求是否执行完

      //============= auto form ==============
      autoFormID: 'house-tree-room-form', //表单唯一ID值
      showMessage: false,
      submitUrl: 'owner/owner-rest/house/add-house-node',
      coverData: {
        resourcefieldBindingfnList: {
          houseName: params => {
            //当名称houseName的事件类型为 blur失焦时，保持简称的值与名称同步更改，基础组件需增加失焦事件
            if (params.type === 'change') {
              params.formData.modelData.houseNo = params.formData.modelData.roomShortName =  params.formData.modelData.houseName;
            }
          },
        },
        dynamicQuery: {},
        isResourcefieldRemoved: {},
        items: {},
        isResourcefieldHidden: {},
      },

      //============= select 下拉列表options ==============
      roomTypeIdItems: [], // 房产类型下拉列表数据
      roomPropertyIdItems: [], // 房产性质下拉列表数据
      roomHouseTypeItems: [], // 房产户型下拉列表数据

      //表单fields
      assignList: [
        'houseName',
        'roomTypeId',
        'roomShortName',
        'houseNo',
        'isVirtual',
        'isBlockUp',
        'floor',
        'floorNum',
        'chargingArea',
        'assistChargingArea',
        'roomPropertyId',
        'roomHouseType',
        'deliveryTime',
        'takeOverTime',
        'remark',
        'insideArea',
        'poolArea',
        'gardenArea',
        'basementArea',
        'giftArea',
        'buildingArea',
        'maintenanceDate',
        'parentId',
      ],
      changeLogItems: [], //操作日志---时间轴数据
      loadingForm: true,
      submitLoading: false
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
      this.localData =   utils.deepClone(resetData);
    },

    //overwrite  把houseJson赋给houseInfo
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
          if (resultData.roomTypeId && resultData.roomTypeId.length) {
            this.formatSelectItems('roomTypeIdItems', resultData.roomTypeId[0].dictionaryitemVos); //房产类型
          }
          if (resultData.roomPropertyId && resultData.roomPropertyId.length) {
            this.formatSelectItems(
              'roomPropertyIdItems',
              resultData.roomPropertyId[0].dictionaryitemVos
            ); //房产性质
          }
          if (resultData.roomHouseType && res.resultData.roomHouseType.length) {
            this.formatSelectItems(
              'roomHouseTypeItems',
              resultData.roomHouseType[0].dictionaryitemVos
            ); //房产户型
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
    addValidate(){
      let {takeOverTime, deliveryTime} = this.localData.modelData;
      if(takeOverTime && deliveryTime && deliveryTime > takeOverTime ){
        this.$message({ message: '收房日期不能小于移交日期', type: 'error' });
        return false;
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
      this.fields = data.fields;
      if (this.houseInfo.isLock === 1) {
        this.afterFormRequestRemoved(data.fields, true); //不可编辑
      } else {
        this.afterFormRequestRemoved(data.fields, false); //可编辑
      }

      //赋值特定select 的 options 下拉数组列表
      this.coverData.items = {
        roomPropertyId: this.roomPropertyIdItems,
        roomTypeId: this.roomTypeIdItems,
        roomHouseType: this.roomHouseTypeItems,
      };

      console.log( this.coverData.items, 'dwdededewdwdweededed');

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

    // @@overwrite 注册渲染表单
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
#room-dialog {
  .ns-text{
    padding: 0 !important;
  }
  .lock-icon-wrap {
    position: absolute;
    right: 0;
    top: 0;
    svg.ns-icon-svg {
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
