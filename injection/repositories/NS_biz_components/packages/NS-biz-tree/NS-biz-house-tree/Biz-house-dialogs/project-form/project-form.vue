<!--项目表单-->
<template>
  <ns-dialog
    id="project-dialog"
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
import { getDictionaryList } from '../../../../../service/packages/NS-form-components/getOptions';
import { getHouseForm, getHouseDetail } from '../../../../../service/packages/NS-biz-tree/NS-biz-house-tree';
import { treeDataFetch, getChildOrganization } from '../../../../../service/packages/NS-biz-tree/NS-biz-organize-tree';
import resetData from './project-form.js';
import mixinForm  from '../mixinForm';
import utils from '@NEAP/utils';
import * as store from '@NEAP/utils/nsQuery/nsStore';

export default {
  name: 'project-form',
  pageFormId: 'project',

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
      autoFormID: 'house-tree-project-form', //表单唯一ID值
      showMessage: false,
      submitUrl: 'owner/owner-rest/house/add-house-node',
      coverData: {
        resourcefieldBindingfnList: {
          houseName: params => {
            //当名称houseName的事件类型为 blur失焦时，保持简称的值与名称同步更改，基础组件需增加失焦事件
            if (params.type === 'change') {
                params.formData.modelData.proShortName = params.formData.modelData.houseName;
            }
          },
        },
        dynamicQuery: {
          provinceCityArea: {},
        },
        items: {},
      },

      //============= select 下拉列表options ==============
      proTypeItems: [], // 项目类型下拉列表数据
      performanceStatusItems: [], // 履行状态下拉列表数据
      proNatureItems: [], // 项目性质下拉列表数据
      organizationIdItems: [],

      //表单fields
      assignList: [
        'houseName',
        'proShortName',
        'developer',
        'houseNo',
        'address',
        'proNature',
        'proTypeId',
        'performanceStatus',
        'proManager',
        'builder',
        'remark',
        'startWorkTime',
        'completeTime',
        'completeTime',
        'deliveryTime',
        'quitTime',
        'takeOverTime',
        'buildingArea',
        'floorArea',
        'groundArea',
        'undergroundArea',
        'deliveryArea',
        'greenArea',
        'assistArea',
        'greeningRate',
        'plotRatio',
        'households',
        'checkInHouseholds',
        'groundParkingSpace',
        'groundParkingChargeStandard',
        'tempParkingSpace',
        'proManagerPhone',
        'managementPhone',
        'servicePhone',
        'propertyManageArea',
        'propertyOperateArea',
        'hallArea',
        'communityArea',
        'chargeArea',
        'refOrganizationId',
        'parentId',
      ],
      changeLogItems: [], //操作日志---时间轴数据
      loadingForm: true,
      submitLoading: false
    };
  },
  methods: {
    //================== 初始化相关操作 ====================
    init() {
      this.getHouseInfo();
      this.getDictionary();
      this.getTreeDataFetch();
      this.afterGetDict = false;
      this.afterGetHouse = false;
      this.localData =  utils.deepClone(resetData);
      this.organizationIdItems = [];
    },
    //overwrite 获取HouseInfo
    getHouseInfo() {
      if (this.type === 'edit') {
        getHouseDetail({ houseId: this.itemInfo.houseId })
          .then(r => {
            this.setHouseInfo(r.resultData.houseJson);
            this.getProvinceCityAreaQueryParams();
          })
          .catch(() => {
            this.afterGetHouse = true;
          });
      } else {
        getHouseForm({ houseType: 2, houseId: 0 })
          .then(r => {
            this.setHouseInfo(r.resultData.houseJson);
          })
          .catch(() => {
            this.afterGetHouse = true;
          });
        this.title = '项目新增';
      }
    },

    // 把houseJson赋给houseInfo
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
          if (resultData.proNature && resultData.proNature.length > 0) {
            //项目性质
            this.formatSelectItems('proNatureItems', resultData.proNature[0].dictionaryitemVos);
          }
          if (resultData.performanceStatus && resultData.performanceStatus.length > 0) {
            //履行状态
            this.formatSelectItems(
              'performanceStatusItems',
              resultData.performanceStatus[0].dictionaryitemVos
            );
          }
          if (resultData.proTypeId && resultData.proTypeId.length > 0) {
            //项目类型
            this.formatSelectItems('proTypeItems', resultData.proTypeId[0].dictionaryitemVos);
          }
          //新增项目默认
          if (this.type === 'add') {
            this.localData.modelData.proNature = '1';
            this.localData.modelData.performanceStatus = '1';
          }
          this.afterGetDict = true;
        })
        .catch(res => {
          this.afterGetDict = true;
        });
    },

    //省市区地址查询参数
    getProvinceCityAreaQueryParams() {
      this.coverData.dynamicQuery.provinceCityArea = {
        province: this.houseInfo.provinceId,
        city: this.houseInfo.cityId,
        district: this.houseInfo.areaId,
      };
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
        modelData.provinceCityArea = {
          province: this.houseInfo.provinceId,
          city: this.houseInfo.cityId,
          district: this.houseInfo.areaId,
        };
        modelData.parentHouseName =
          this.houseInfo.parentId === 0
            ? ''
            : this.houseInfo.houseFullName.replace('-' + this.houseInfo.houseName, '');
      } else {
        modelData.provinceCityArea = {
          province: '',
          city: '',
          district: '',
        };
        // console.log("==========***********===============")
        // console.log(this.treeValue)
        modelData.parentHouseName = this.itemInfo.houseFullName || '';
        // modelData.organizationId = this.treeValue.treeData.companyName;
        // modelData.refOrganizationId = this.treeValue.treeData.companyName;
      }
    },


    /**
     * 提交前的赋值HouseInfo
     * @param modelData
     */
    assignHouseInfo(modelData) {
      this.assignList.forEach((value, index) => {
        this.$set(this.houseInfo, value, modelData[value]);
      });
      if (modelData.provinceCityArea) {
        this.houseInfo.provinceId = modelData.provinceCityArea.province;
        this.houseInfo.cityId = modelData.provinceCityArea.city;
        this.houseInfo.areaId = modelData.provinceCityArea.district;
      }
      return JSON.stringify(this.houseInfo);
    },

    /**
     * after request
     * @param vm    this
     * @param data  form data
     */
    afterRequest(vm, data) {
      let modelData = data.modelData;
      //赋值特定select 的 options 下拉数组列表
      this.coverData.items = {
        proNature: this.proNatureItems,
        performanceStatus: this.performanceStatusItems,
        proTypeId: this.proTypeItems,
        refOrganizationId: this.organizationIdItems,
      };
      this.afterFormRequestAssign(modelData);
      if (this.type === 'add') {
        this.localData.modelData.refOrganizationId = this.itemInfo.organizationId;
      }
      this.loadingForm = false;
    },


    //获取部门组织树数据
    getTreeDataFetch() {
      treeDataFetch({}).then(r => {
        this.getOptionsItems([r.resultData]);
      });
    },
    /**
     * 将部门组织树数据转换为所属组织下拉框数据
     * @param arr
     */
    getOptionsItems(arr) {
      arr.map(item => {
        // if(item.organizationType===1 || item.organizationType===0){//筛选出所有公司
        this.organizationIdItems.push({ label: item.organizationName, value: item.organizationId });
        if (item.isHasChild) {
          item.childOrganizations.length > 0
            ? this.getOptionsItems(item.childOrganizations)
            : this.getChildOptionsItems(item.organizationId);
        }
        // }
      });
    },
    /**
     * 获取 子公司/子部门 数据
     * @param fatherId
     */
    getChildOptionsItems(fatherId) {
      getChildOrganization({ organizationId: fatherId })
        .then(r => {
          this.getOptionsItems(r.resultData);
        })
        .catch(() => {
          console.log('error!');
        });
    },
    /**
     * auto form cancel 表单取消按钮 => 关闭弹窗
     * @param formName
     */
    autoFormCancel(formName) {
      store.formController.delete(formName); //销毁表单
      this.dialogVisible.visible = false; //关闭弹窗
    },

    //================== 其他 ====================
    /**
     * dialog close 关闭弹窗
     * @param formName
     */
    dialogClose(formName) {
      store.formController.delete(formName);
      this.dialogVisible.visible = false;
    },

    // 注册渲染表单
    changeDialogShowState() {
      // getHouseInfo和getDictionary两个方法获取到数据之后注册渲染表单
      if (this.afterGetHouse && this.afterGetDict) {
        store.formController.set(this.autoFormID, { show: true }); //注册渲染表单
      }
    },
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
};
</script>

<style rel="stylesheet/scss" lang="scss">
#project-dialog {
  .showTab {
    .el-tabs__header {
      display: none;
    }
  }
}
</style>
