import { houseTypeEnum } from '../houseTypeEnum';
import { getHouseForm, getHouseDetail } from '../../../../service/packages/NS-biz-tree/NS-biz-house-tree'
import * as store from '@NEAP/utils/nsQuery/nsStore';
import utils from '@NEAP/utils';

export default  {
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

  watch: {
    'dialogVisible.visible': function(val) {
      if (val) {
        this.title =  `${ houseTypeEnum[this.$options.pageFormId].label}${this.type === 'edit'? '编辑': '新增'}` ;
        this.init();
      }
    },
  },

  methods: {
    //================== 初始化相关操作 ====================
    //获取HouseInfo
    getHouseInfo() {
      if (this.type === 'edit') {
        getHouseDetail({ houseId: this.itemInfo.houseId })
          .then(r => {
            this.setHouseInfo(r.resultData.houseJson);
          })
          .catch(() => {
            this.changeDialogShowState();
          });
      } else {
        getHouseForm({ houseType: 2, houseId: 0 })
          .then(r => {
            this.setHouseInfo(r.resultData.houseJson);
          })
          .catch(() => {
            this.changeDialogShowState();
          });
      }
    },

    // 把houseJson赋给houseInfo
    setHouseInfo(houseJson) {
      this.changeDialogShowState();
      try {
        this.houseInfo = JSON.parse(houseJson);
      } catch (e) {
        this.houseInfo = {};
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
      return JSON.stringify(this.houseInfo);
    },

    /**
     * auto form cancel 表单取消按钮 => 关闭弹窗
     * @param formName
     */
    autoFormCancel(formName) {
      store.formController.delete(formName); //销毁表单
      this.dialogVisible.visible = false; //关闭弹窗
    },

    /**
     *auto Form Submit 自动表单提交事件
     * @param formName
     */
    autoFormSubmit(formName) {
      this.showMessage = true;

      //整理入参
      this.localData.modelData[this.type === 'edit'? 'houseId': 'parentId'] =  this.itemInfo.houseId;
      this.localData.modelData['houseType'] =  houseTypeEnum[this.$options.pageFormId].value;
      this.localData.modelData['houseTypeEnum'] =  this.$options.pageFormId.toLocaleUpperCase();

      //特殊化处理
      if(this.$options.pageFormId === 'project'){
        this.localData.modelData['houseTypeEnum'] = 'PRECINCT';
      }
      this.localData.modelData['houseInfo'] =  this.assignHouseInfo( this.localData.modelData);

      //提交
      this.submitLoading = true;
      this.$refs['autoForm'].submitForm(this.autoFormID, this.addValidate()).then((res)=>{
        this.$message({ message: '保存成功', type: 'success' });
        if(this.type === 'add'){
          this.localData.modelData.houseId = res.resultData;
          this.localData.modelData.houseFullName = this.itemInfo.houseFullName + '-' +  this.localData.modelData.houseName;
          this.$emit('addNodes',this.itemInfo,  this.localData.modelData);
        }else{
          this.itemInfo.houseName = this.localData.modelData.houseName;
        }
        store.formController.delete(formName);
        this.dialogVisible.visible = false;
        this.submitLoading = false;
      }).catch(()=>{
        this.submitLoading = false;
      });
    },


    addValidate(){
      return true
    },


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
      // getHouseInfo获取到数据之后注册渲染表单
      store.formController.set(this.autoFormID, { show: true }); //注册渲染表单
    },

    /**
     * 二维码信息赋值到modelData
     * @param modelData
     */
    assignQRCode(modelData) {
      if (modelData) {
        let QRCodeData = this.makeQRCode();
        setTimeout(()=>{
          modelData.qrCode =  QRCodeData._oDrawing._elImage.src;
        }, 0);
      }
      this.coverData.isResourcefieldHidden = {
        qrCode: !modelData
      }
    },

    //生成二维码
    makeQRCode() {
      let qrCodeInfo = {
          organizationId: this.houseInfo.organizationId,
          precinctId: this.houseInfo.precinctId,
          houseId: this.houseInfo.houseId,
        },
        $qrCodeInfo = JSON.stringify(qrCodeInfo);
      return utils.createQRCode(null, {
        text: $qrCodeInfo,
        width: 150,
        height: 150,
      });
    },

  }
}
