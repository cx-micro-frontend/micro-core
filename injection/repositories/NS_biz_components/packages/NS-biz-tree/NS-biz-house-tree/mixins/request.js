import {
  treeDataFetch,
  treeDataFetchDetail,
  treeChildrenDataFetch,
  deleteHouseNode,
  getSearchData } from '../../../../service/packages/NS-biz-tree/NS-biz-house-tree';
import transformKeyFun from '../../transformNode';
import keyRefer from '../keyRefer';
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


     treeDataFetch({ houseId: 0 }).then((res)=>{
       this.treeData = transformKeyFun([res.resultData], keyRefer, { lazy: true, expandedIndex: 1});
       //设定默认选中项
       this.treeModel = {};
       this.treeloading = false;
     }, ()=>{
       this.treeloading = false;
     });
   },


   /**
    * load childNodes
    * */
   loadNode(node) {
     this.$set(node, 'loading', true);
     treeChildrenDataFetch({ houseId: node.houseId }).then((res)=>{
       this.$set(node, 'loading', false);
       const childData = transformKeyFun(res.resultData, keyRefer, { lazy: true});//转换树数据
       this.$refs.bizHouseTree.addNodes(node, childData);
     });
   },


   /**
    * 前端手动增加node
    */
   addHouseNode(pNode, node){
     //未加载出子节点的节点 增加节点
     if(pNode.async && pNode.isHasChild&& pNode.childOwnerHouseBaseInfoTreeNodeList.length === 0){
       this.loadNode(pNode);
     }else{
       let newNode = transformKeyFun([node], keyRefer, {lazy: true});
       this.$refs.bizHouseTree.addNodes(pNode, newNode);
     }

   },

   /**
    * 删除节点
   * */
   deleteHouseNode(pNode, node, index){
     deleteHouseNode({houseId: node.houseId}).then(()=>{
       this.$message({ message: '删除成功', type: 'success' });
       this.$refs.bizHouseTree.delNode(node, pNode, index);
     });
   },

   /**
    * Get house tree data by search
    * @param item 搜索输入内容
    */

   houseTreeChange(item) {
     if(item) {
       this.treeloading = true;//loading
       treeDataFetchDetail({houseId: item.houseId}).then((res)=>{
         this.treeData = transformKeyFun([res.resultData], keyRefer, { lazy: true, expandedIndex: 1});
         //设定默认选中项
         this.treeModel = {};
         this.treeloading = false;
       },()=>{
         this.treeloading = false;
       })
     }else{
       this.getTreeData()
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
       getSearchData({
         houseName: query,
         houseType: 0
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
