<template>
  <ns-dialog
    :title="title"
    id="add_or_edit_company"
    :visible.sync="companyVisible.visible"
    @close="dialogClose"
  >
    <ns-form
      :model="companyForm"
      class="invariable"
      :rules="rules"
      ref="companyForm"
      label-width="150px"
    >
      <ns-form-item label="上级组织" prop="parentOrganizationName">
        {{ companyForm.parentOrganizationName }}
      </ns-form-item>
      <ns-form-item label="公司名称" prop="companyName">
        <ns-input
          @blur="autoMakeMassage"
          v-model.trim="companyForm.companyName"
          placeholder="请输入公司名称"
        ></ns-input>
      </ns-form-item>
      <ns-form-item label="公司编号" prop="companyCode">
        <ns-input
          v-judgeChange="judgeChangeParams_code"
          v-model="companyForm.companyCode"
          placeholder="请输入公司编号"
        ></ns-input>
      </ns-form-item>
      <ns-form-item label="公司简称" prop="companyShortName">
        <ns-input
          v-judgeChange="judgeChangeParams_shortName"
          v-model.trim="companyForm.companyShortName"
          placeholder="请输入公司简称"
        ></ns-input>
      </ns-form-item>
      <ns-form-item label="排序编号" prop="orderNo">
        <ns-input
          v-model="companyForm.orderNo"
          placeholder="请输入排序编号"
        ></ns-input>
      </ns-form-item>
      <ns-form-item label="法定名称" prop="companyLegalName">
        <ns-input
          v-model="companyForm.companyLegalName"
          placeholder="请输入法定名称"
        ></ns-input>
      </ns-form-item>
      <ns-form-item label="负责人" prop="companyManagerName">
        <el-select
          v-model="companyForm.companyManagerName"
          filterable
          remote
          reserve-keyword
          placeholder="请输入关键词"
          :loading-text="searchTip"
          :remote-method="remoteMethod"
          :loading="loading"
          @change="handleSelect"
          clearable
          style="width:200px"
          size="small"
        >
          <el-option
            v-for="item in list"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :info="item.info"
          ></el-option>
        </el-select>
      </ns-form-item>
      <ns-form-item label="成立日期" prop="companyBuildDate">
        <ns-date-picker
          value-format="yyyy-MM-dd HH:mm:ss"
          format="yyyy-MM-dd"
          v-model="companyForm.companyBuildDate"
          type="date"
          placeholder="请选择成立日期"
          :picker-options="pickerOptions"
        >
        </ns-date-picker>
      </ns-form-item>
      <ns-form-item
        label="公司性质"
        prop="companyNature"
        requireMsg="请选择公司性质"
        trigger="change,blur"
      >
        <el-select size="small" v-model="companyForm.companyNature" placeholder="请选择" style="width: 200px">
          <el-option
            v-for="item in companyOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </ns-form-item>
      <ns-form-item label="详细地址" prop="address">
        <ns-input
          width="350px"
          v-model="companyForm.address"
          placeholder="请输入详细地址"
        ></ns-input>
      </ns-form-item>
      <ns-form-item label="备注" prop="remark">
        <ns-input
          width="100%"
          type="textarea"
          maxlength="200"
          v-model="companyForm.remark"
          placeholder="请输入备注（输入字数限制: 0-200）"
        ></ns-input>
      </ns-form-item>
    </ns-form>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click.native="companySubmitForm" size="medium" :loading="submitLoading">确 定</el-button>
      <el-button @click="closeHandle" size="medium">取 消</el-button>
    </span>
  </ns-dialog>
</template>

<script>
import {
  companyAdd,
  fetchOrgDetail,
  companyEdit,
  searchUserFetch,
  getDetail,
  autoMakeMassage,
} from '../../../../../service/System/System-pages/organize-tree';
export default {
  directives: {
    // 失去焦点时判断是否需要更新简称与编号
    judgeChange: {
      inserted(el, params, vnode, oldVnode) {
        el.querySelector('.el-input__inner').onblur = () => {
          // 失焦时触发
          let val = eval('vnode.context.' + params.value.val);
          let preVal = eval('vnode.context.' + params.value.preVal);
          if (!val || val === preVal) {
            // val为空或者val等于上一个值的时候，flag = false
            eval('vnode.context.' + params.value.flag + ' = false');
          } else if (val !== preVal) {
            // val不等于上一个值的时候,flag = true
            eval('vnode.context.' + params.value.flag + ' = true');
          }
        };
      },
    },
  },
  props: {
    type: {
      type: [String],
    },
    companyVisible: {
      type: Object,
      default() {
        return {
          visible: false,
        };
      },
    },
    nodeInfo: {
      type: Object,
      default() {
        return {};
      },
    },
    parentNodeInfo: {
      type: Object,
      default() {
        return {
          organizationName: '',
          organizationId: '',
        };
      },
    },
    editInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      judgeChangeParams_code: {
        flag: 'judgeChange_code',
        preVal: 'companyCode_preVal',
        val: 'companyForm.companyCode',
      },
      judgeChangeParams_shortName: {
        flag: 'judgeChange_shortName',
        preVal: 'companyShortName_preVal',
        val: 'companyForm.companyShortName',
      },
      loading: false,
      submitLoading: false,
      searchTip: '搜索数据中...',
      title: '',
      list: [],
      pickerOptions: {},
      //部门性质
      companyOptions: [
        {
          label: '联营公司',
          value: 0,
        },
        {
          label: '专业公司',
          value: 1,
        },
      ],
      companyForm: {
        //公司表单
        parentOrganizationName: '',
        parentOrganizationId: '',
        companyCode: '',
        companyShortName: '',
        companyType: '1',
        companyLegalName: '',
        companyManagerId: '0',
        companyManagerName: '',
        companyBuildDate: '',
        companyNature: '',
        address: '',
        organizationId: '',
        companyId: '',
        companyName: '',
        orderNo: '',
        remark: '',
      },
      rules: {
        companyName: [{ required: true, message: '请输入公司名称', trigger: 'blur' }],
        companyNature: [{ required: true, message: '请选择公司性质', trigger: 'change' }],
        companyShortName: [{ required: true, message: '请输入公司简称', trigger: 'blur' }],
      },
    };
  },
  methods: {
    // 自动生成简称与编号
    autoMakeMassage() {
      if (this.companyForm.companyName) {
        // 有公司名称才去请求
        autoMakeMassage({
          // 从后台获取简称和编号
          parentOrgId: this.companyForm.parentOrganizationId,
          currentOrgName: this.companyForm.companyName,
        }).then(res => {
          if (!this.judgeChange_shortName || !this.judgeChange_code) {
            //
            const idata = res.resultData;
            if (!this.judgeChange_shortName) {
              // flag = false更新简称
              this.companyForm.companyShortName = idata.shortName;
              this.companyShortName_preVal = this.companyForm.companyShortName;
            }
            if (!this.judgeChange_code) {
              // flag = false更新编码
              this.companyForm.companyCode = idata.code;
              this.companyCode_preVal = this.companyForm.companyCode;
            }
          }
        });
      }
    },
    resetForm() {
      //==表单重置
      this.$refs['companyForm'].resetFields();
    },
    companySubmitForm() {
      //==表单提交
      this.$refs['companyForm'].validate(valid => {
        if (valid) {
          this.submitLoading = true;
          if (this.type === 'edit') {
            //编辑保存
            companyEdit(this.companyForm).then(r => {
              this.$message({
                message: '保存成功',
                type: 'success',
              });
              this.submitLoading = false;
              this.$emit('query');
              this.$emit('transferValue', this.nodeInfo);

              this.companyVisible.visible = false;
            });
          } else if (this.type === 'add') {
            //新增保存
            companyAdd(this.companyForm).then(r => {
              this.$message({
                message: '保存成功',
                type: 'success',
              });
              this.submitLoading = false;
              this.$emit('query');
              this.$emit('transferValue', this.nodeInfo);

              this.companyVisible.visible = false;
            });
          }
        }
      });
    },
    fetchEditData() {
      //==编辑信息
      fetchOrgDetail({
        organizationId: this.nodeInfo.organizationId,
      }).then(r => {
        this.companyForm = r.resultData.company;
      });
    },
    dialogClose() {
      this.resetForm();
    },
    closeHandle() {
      //==取消
      this.resetForm();
      this.companyVisible.visible = false;
    },
    //模糊查询
    remoteMethod(query) {
      if (query != '' && query != ' ') {
        this.loading = true;
        searchUserFetch({
          userName: query,
        })
          .then(r => {
            this.loading = false;
            this.list = this.listHandle(r.resultData);
          })
          .catch(err => {
            this.searchTip = '服务器出错';
          });
      } else {
        this.list = [];
      }
    },
    listHandle(data) {
      return data.map((value, index, array) => {
        return {
          label: value.userName,
          value: value.userId,
          info: value,
        };
      });
    },
    //选择人员回调
    handleSelect(item) {
      if (item) {
        for (let i = 0, val; (val = this.list[i]); i++) {
          if (val.value === item) {
            this.companyForm.companyManagerId = val.value;
            this.companyForm.companyManagerName = val.label;
            break;
          } else {
            this.companyForm.companyManagerId = '0';
            this.companyForm.companyManagerName = '';
          }
        }
      } else {
        this.companyForm.companyManagerId = '0';
        this.companyForm.companyManagerName = '';
      }
    },
    //新增的时候获取父节点
    getNodeFullName() {
      getDetail({ organizationId: this.parentNodeInfo.organizationId })
        .then(res => {
          this.companyForm.parentOrganizationName = res.resultData
            ? res.resultData
            : this.parentNodeInfo.organizationName;
        })
        .catch(() => {
          this.companyForm.parentOrganizationName = this.parentNodeInfo.organizationName;
        });
    },
  },
  created() {
    // console.log('...........................................')
    // console.log(this.nodeInfo)
    // console.log(this.parentNodeInfo)
    // console.log(this.editInfo)
    if (this.type === 'add') {
      this.title = '新建子公司';
      // this.companyForm.parentOrganizationName = this.parentNodeInfo.organizationName;
      this.getNodeFullName();
      this.companyForm.parentOrganizationId = this.parentNodeInfo.organizationId;
    } else {
      this.title = '公司编辑';
      this.fetchEditData();
    }
  },
  updated() {},
};
</script>

<style rel="stylesheet/scss" lang="scss">
#add_or_edit_company {
  .el-textarea__inner {
    width: 350px;
  }
  .width350 {
    width: 350px;
  }
}
</style>
