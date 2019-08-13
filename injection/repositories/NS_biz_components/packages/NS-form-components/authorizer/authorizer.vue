<!--role-authorizer（ 新增授权人 ）-->
<template>
  <el-transfer
    class="ns-transfer ns-authorizer"
    v-loading="loading"
    element-loading-text="加载中"
    v-model="childAuthorizer"
    :data="transferList"
    :titles="titList"
    filterable
    :filter-method="filterMethod"
    filter-placeholder="输入关键字，快速筛选员工"
    :style="{ width: checkbox_width, height: 'auto' }"
  >
  </el-transfer>
</template>

<script>
import { getAuthorizerList } from '../../../service/packages/NS-form-components/authorizer';

export default {
  name: 'ns-authorizer',
  data() {
    return {
      childAuthorizer: [],
      loading: true, //loding
      titList: ['待选', '已选'], //transfer - title
      transferList: [],
    };
  },
  computed: {
    checkbox_width() {
      return this.autoForm.convertUnits(this.width, 'width', '100%');
    },
  },
  created() {
    this.childAuthorizer = this.fatherAuthorizer;
    //get authorizer list (获取某个组织下的所有员工（授权人）列表)
    this.getAuthorizerList();
  },
  methods: {
    /**
     * get authorizer list (获取某个组织下的所有员工（授权人）列表)
     */
    getAuthorizerList() {
      this.loading = true;
      getAuthorizerList({ organizationId: this.dynamicQuery })
        .then(response => {
          this.transferList = this.createNewList(response.resultData);
          this.loading = false;
        })
        .catch(err => {
          return Promise.reject(err);
        });
    },
    createNewList(list) {
      const newList = [];
      list.forEach((item, index) => {
        newList.push({
          label: item.userName,
          value: item.userId,
          account: item.userAccount,
          mobile: item.userTelephone,
          key: item.userId,
        });
      });
      return newList;
    },
    filterMethod(query, item) {
      return item.label.indexOf(query) > -1;
      //        return item.label.indexOf(query) > -1 || item.account.indexOf(query) > -1 || item.mobile.indexOf(query) > -1;
    },
  },
  props: {
    fatherAuthorizer: Array,
    width: { type: [String, Number] }, //表单控件宽度
    height: { type: [String, Number] }, //表单控件高度
    type: { type: String, default: 'normal' }, //checkbox 类型
    min: { type: Number, default: 0 }, //可被勾选的 checkbox 的最小数量
    max: { type: Number }, //可被勾选的 checkbox 的最大数量
    dynamicUrl: { type: String, default: null },
    dynamicQuery: { type: [String, Number], default: null }, //外部传入请求参数
  },
  model: {
    prop: 'fatherAuthorizer',
    event: 'change',
  },
  watch: {
    childAuthorizer() {
      this.$emit('change', this.childAuthorizer);
    },
    fatherAuthorizer() {
      this.childAuthorizer = this.fatherAuthorizer;
    },
  },
};
</script>
<style rel="stylesheet/scss" lang="scss"></style>
