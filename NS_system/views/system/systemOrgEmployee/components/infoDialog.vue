<template>
  <ns-biz-slip-dialog
    id="employeeForm"
    :title="dialogTit"
    :visible.sync="dialogVisible.visible"
    @close="dialogClose()"
  >
    <template slot="btns">
      <ns-biz-role-button-area :buttonList="roleButtonForm" @command="roleButtonCommand"></ns-biz-role-button-area>
    </template>

    <template slot="main">
      <ns-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm">
        <ns-row>
          <ns-col :span="12">
            <ns-form-item label="所属组织" prop="organizationId">
              <ns-checkbox-tree-select
                v-model="ruleForm.organizationId"
                bizType="role-organization"
                size="small"
                placeholder="请选择"
                @change="change"
              ></ns-checkbox-tree-select>
            </ns-form-item>
          </ns-col>
          <ns-col :span="12">
            <ns-form-item label="员工角色" prop="roleids">
              <selectGroupingBox
                v-model="ruleForm.roleids"
                :items="items"
                @change="changErolecategory"
              ></selectGroupingBox>
            </ns-form-item>
          </ns-col>
          <ns-col :span="12">
            <ns-form-item label="是否企业管理员">
              <ns-radio v-model="ruleForm.isAdminState" :options="isAdminOptions"></ns-radio>
            </ns-form-item>
          </ns-col>
          <ns-col :span="12">
            <ns-form-item label="在职状态" prop="">
              <ns-radio v-model="ruleForm.userState" :options="statusOptions"></ns-radio>
            </ns-form-item>
          </ns-col>
          <ns-col :span="12">
            <ns-form-item label="姓名" prop="userName">
              <ns-input v-model.trim="ruleForm.userName" placeholder="请输入姓名"></ns-input>
            </ns-form-item>
          </ns-col>
          <ns-col :span="12">
            <ns-form-item label="性别" prop="userSex">
              <ns-select
                v-model="ruleForm.userSex"
                :options="options"
                placeholder="请选择"
                :clearable="true"
              ></ns-select>
            </ns-form-item>
          </ns-col>
          <ns-col :span="12">
            <ns-form-item label="生日" prop="userBirthday">
              <ns-date-picker
                v-model="ruleForm.userBirthday"
                type="date"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd HH:mm:ss"
                range-separator=""
                placeholder="请选择生日日期"
              >
              </ns-date-picker>
            </ns-form-item>
          </ns-col>
          <ns-col :span="12">
            <ns-form-item label="手机" prop="userTelephone">
              <ns-input
                v-model="ruleForm.userTelephone"
                placeholder="请输入手机号码"
                maxlength="11"
              ></ns-input>
            </ns-form-item>
          </ns-col>
          <ns-col :span="12">
            <ns-form-item label="账号" prop="userAccount">
              <ns-input v-model.trim="ruleForm.userAccount" placeholder="请输入账号"></ns-input>
            </ns-form-item>
          </ns-col>
          <ns-col :span="12">
            <ns-form-item label="员工密码" prop="userPassword">
              <ns-input
                v-model="ruleForm.userPassword"
                placeholder="请输入6-15位英文和数字混合密码"
              ></ns-input>
            </ns-form-item>
          </ns-col>
          <ns-col :span="12">
            <ns-form-item label="证件类型" prop="userCertificateType">
              <ns-select
                v-model="ruleForm.userCertificateType"
                :options="documentTypeOptions"
                placeholder="请选择"
                :clearable="true"
              ></ns-select>
            </ns-form-item>
          </ns-col>
          <ns-col :span="12">
            <ns-form-item label="证件号码" prop="userCertificateNumber">
              <ns-input
                v-model="ruleForm.userCertificateNumber"
                placeholder="请输入证件号码"
              ></ns-input>
            </ns-form-item>
          </ns-col>
          <ns-col :span="12">
            <ns-form-item label="入职日期" prop="userHiredate">
              <ns-date-picker
                v-model="ruleForm.userHiredate"
                type="date"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd HH:mm:ss"
                range-separator=""
                placeholder="请选择入职日期"
              >
              </ns-date-picker>
            </ns-form-item>
          </ns-col>
          <ns-col :span="12">
            <ns-form-item label="所属岗位" prop="sentryId">
              <ns-select
                v-model="ruleForm.sentryId"
                :options="sentryOptions"
                placeholder="请选择"
                :clearable="true"
              ></ns-select>
            </ns-form-item>
          </ns-col>
        </ns-row>
      </ns-form>
    </template>
  </ns-biz-slip-dialog>
</template>

<script>
import {
  getEmployeeRole,
  getDocumentType,
  submitFormData,
} from '../../../../service/System/systemOrgEmployee';
import selectGroupingBox from './selectGroupingBox/selectGroupingBox.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'employeeForm',
  components: {
    selectGroupingBox,
  },
  props: {
    dialogTit: {
      type: String,
    },
    dialogVisible: {
      type: Object,
      default: {
        visible: false,
      },
    },
    treeNodeObj: {
      type: Object,
    },
    scope: {
      type: Object,
    },
    funcId: [String, Number]
  },

  data() {
    var validOrganizationId = (rule, value, callback) => {
      !this.id ? callback(new Error('请选择所属组织')) : callback();
    };
    var validRoleids = (rule, value, callback) => {
      if (this.ruleForm.isAdminState === '0') {
        value.length === 0 ? callback(new Error('请选择员工角色')) : callback();
      } else {
        callback();
      }
    };
    var validUserName = (rule, value, callback) => {
      value === '' || value === undefined ? callback(new Error('请输入姓名')) : callback();
    };
    var validUserTelephone = (rule, value, callback) => {
      var reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
      if (value === '' || value === undefined) {
        callback(new Error('请输入手机号码'));
      } else {
        !reg.test(value) ? callback(new Error('请输入正确的手机号码')) : callback();
      }
    };
    var validUserAccount = (rule, value, callback) => {
      value === '' || value === undefined ? callback(new Error('请输入账号')) : callback();
    };
    var validUserPassword = (rule, value, callback) => {
      var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$/;
      if (value === '' || value === undefined) {
        callback(new Error('请输入6-15位英文和数字混合密码'));
      } else {
        !reg.test(value) ? callback(new Error('请输入6-15位英文和数字混合密码')) : callback();
      }
    };
    return {
      id: '',
      items: [],
      options: [],
      documentTypeOptions: [],
      sentryOptions: [],
      statusOptions: [],
      isAdminOptions: [{ label: '是', value: '1' }, { label: '否', value: '0' }],
      ruleForm: {
        organizationId: '',
        roleids: [],
        userName: '',
        userSex: '',
        userTelephone: '',
        userAccount: '',
        userPassword: '',
        userCertificateType: '10',
        userCertificateNumber: '',
        userHiredate: '',
        sentryId: '',
        userState: '1',
        isAdminState: '1',
      },
      submitLoading: false,
      rules: {
        organizationId: [{ required: true, validator: validOrganizationId, trigger: 'blur' }],
        roleids: [{ validator: validRoleids, trigger: 'change' }],
        userName: [{ required: true, validator: validUserName, trigger: 'change' }],
        userTelephone: [{ required: true, validator: validUserTelephone, trigger: 'change' }],
        userAccount: [{ required: true, validator: validUserAccount, trigger: 'change' }],
        userPassword: [{ required: true, validator: validUserPassword, trigger: 'change' }],
      },
    };
  },

  computed: {
    ...mapGetters(['roleButtonForm']),
  },

  methods: {
    //获取下拉框数据
    getDocumentType(query) {
      getDocumentType(query)
        .then(res => {
          this.ruleForm = res.resultData.modelData;
          this.options = res.resultData.fields[3].items; //性別
          this.documentTypeOptions = res.resultData.fields[8].items; //证件类型
          this.sentryOptions = res.resultData.fields[11].items; //所属岗位
          this.statusOptions = res.resultData.fields[12].items; //在职状态
          this.ruleForm.isAdminState = res.resultData.modelData.userRoleType;
        })
        .catch(() => {});
    },
    //所属组织 -> change -> 传值
    change(value) {
      this.id = value;
      // this.ruleForm.organizationId = value;
      this.ruleForm.roleids = []; //组织变化--->员工清零
      this.getEmployeeRoleData(value);
    },
    // 员工角色 -> change -> 传值
    changErolecategory(val) {
      this.ruleForm.roleids = val;
    },
    //获取员工角色数据
    getEmployeeRoleData(id) {
      if (id !== undefined) {
        getEmployeeRole({ organizationId: id })
          .then(res => {
            this.dc(res.resultData);
          })
          .catch();
      }
    },
    dc(arr) {
      this.items = arr.map((item, index) => {
        let options = [];
        if (item.roleVos.length > 0) {
          options = item.roleVos.map(val => {
            return { label: val.rolename, value: val.roleid };
          });
        }
        return { label: item.rolecategoryName, options: options };
      });
    },
    //按钮点击
    roleButtonCommand(command){
      if(command.code === 'formConfirmBtn'){
        this.submitForm(command);
      }

      if(command.code === 'formCancelBtn'){
        this.formCancel();
      }
    },


    // 提交表单
    submitForm(command) {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$set(command, 'disabled', true);
          this.ruleForm.type = this.scope.type === 'edit' ? 'edit' : 'add';
          this.ruleForm.organizationId = this.id;
          submitFormData(this.ruleForm)
            .then(res => {
              this.$emit('refreshGrid');
              this.$message({ message: res.resultMsg, type: 'success' });
              this.dialogVisible.visible = false;
              this.$set(command, 'disabled', false);
            })
            .catch(() => {
              this.$set(command, 'disabled', false);
            });
        } else {
          return false;
        }
      });
    },
    // 取消表单
    formCancel() {
      this.dialogVisible.visible = false;
    },
    // 关闭表单
    dialogClose() {
      this.dialogVisible.visible = false;
    },
  },

  created() {
    this.ruleForm.organizationId =
      this.scope.type === 'edit' ? this.scope.organizationId : this.treeNodeObj.organizationId;
    let query =
      this.scope.type === 'edit'
        ? { conditions: {}, funcId: this.funcId, userId: this.scope.userId }
        : { conditions: {}, funcId: this.funcId };
    this.getDocumentType(query);
  },
};
</script>

<style rel="stylesheet/scss" lang="scss">
#employeeForm {
  .el-form-item__label {
    width: 110px;
  }
}
</style>
