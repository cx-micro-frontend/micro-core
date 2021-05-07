import { mapGetters } from 'vuex';
import { getUrlParam } from '../../utils/library/urlhandle';

export default {
  computed: {
    ...mapGetters(['operatorInfo', 'currentPageInfo']),
    operatorName() {
      return this.operatorInfo.operatorName;
    },
  },
  watch: {
    // operatorName: {
    //   handler: function(val) {
    //     this.changeDocumentTitle();
    //   },
    //   immediate: true,
    // },
    currentPageInfo: {
      handler: function() {
        this.changeDocumentTitle();
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    changeDocumentTitle() {
      const documentTitleType = getUrlParam('documentTitleType');

      /**
       * 浏览器tab页签title类型：
       * 字段：documentTitleType
       * operatorName：租户/公司名称
       * moduleName:模块名称（一级，顶部模块菜单，如：财务，系统设置等）
       * menuName：菜单名称（具体的叶子菜单节点，如：借款单，应收款计算等）
       *
       * 测试地址：//http://localhost:8001/#/system/systemOrgEmployee?documentTitleType=menuName
       */
      switch (documentTitleType) {
        //模块名称（一级，顶部模块菜单，如：财务，系统设置等）
        case 'moduleName':
          break;
        //菜单名称（具体的叶子菜单节点，如：借款单，应收款计算等）
        case 'menuName':
          document.title = this.currentPageInfo.title;
          break;
        //其他，租户/公司名称
        default:
          document.title = this.operatorName;
          break;
      }
    },
  },
};
