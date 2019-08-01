export default {
 methods: {
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
           comparison: 'EQUAL',
           fieldName: 'houseId',
           fieldValue: '0',
           type: 'text',
         },
       ];
       this.searchConditions.houseId = 0;
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
    * Get house tree data by search
    * @param item 搜索输入内容
    */

   houseTreeChange(item) {
     console.log('搜索的值', item);
     if(item) {
       this.$store.dispatch('houseTreeChange', {houseId: item.houseId})
     }else{

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
       this.$store.getSearchData({
         houseName: query,
         houseType: 0,
       }).then(r => {
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
