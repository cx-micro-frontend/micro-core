import {getSearchData} from '../../../../../service/System/Tree/organize-tree';

export default {
  methods: {
    /**
     * 生成树 请求入参
     */
    createRequestQuery() {
      // 控制只显示到公司节点
      const query = {};
      if (this.orgTypeFilter) {
        Object.assign(query, {orgType: this.orgTypeFilter});
      }
      return query;
    },


    /**
     * 获取树数据
     * @param isFirst
     */
    getTreeData(isFirst = false) {

      this.treeloading = true;//loading

      //first request : change searchConditions
      if (isFirst) {
        this.searchConditions.treeConditions = [
          {
            comparison: 'LIKE',
            fieldName: 'path',
            fieldValue: '/',
            type: 'text',
          },
        ];
      }

      //request organize tree data
      this.$store.dispatch('getOrganizeTreeData', this.createRequestQuery()).then(res => {

        this.treeData = this.$store__orgTreeData;

        //设定默认选中项
        this.treeModel = this.$store.state.OrganizeTree.$store__currentTreeNode;

        // searchConditions state change
        this.searchConditions.organizationId = res.organizationId;
        this.searchConditions.companyId = res.companyId;
        this.searchConditions.departmentId = res.departmentId;

        this.treeloading = false;

        // this.$emit('handle-click', null, true);
        this.$emit('tree-item-click', res);

      });
    },


    /**
     * Get origanize tree data by search
     * @param item 搜索输入内容
     */
    origanizeTreeChange(item) {
      console.log(item)
      //存储 搜索输入的值
      this.$store.dispatch('setSearchQuery', item ? item.organizationName : '');
      if (item || item === 0) {
        this.$store.dispatch('origanizeTreeChange', {organizationId: item.organizationId})
      }
      else {
        this.treeloading = true;

        //search organize tree data
        this.$store.dispatch('getOrganizeTreeData', this.createRequestQuery()).then(res => {
          console.log(6666666666666666)
          this.treeData = this.$store__orgTreeData;
          //设定默认选中项
          this.treeModel = this.$store.state.OrganizeTree.$store__currentTreeNode;

          this.treeloading = false;
        });

      }
    },

    /**
     * 树 输入触发 搜索查询
     * @param query
     * @param cb
     */
    remoteSearch(query, cb) {
      if (query !== '') {
        this.searchTip = '搜索数据中...';
        getSearchData({organizationName: query}).then(r => {
          cb(r.resultData);
        }).catch(err => {
          this.searchTip = '服务器出错';
        });
      } else {
        cb([]);
      }
    }
  }

}
