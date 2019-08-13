import {
  getTargetRootTree,getTargetChildrenTree,delTarget
} from '../../../../service/packages/NS-biz-tree/NS-biz-target-tree';
import transformKeyFun from '../../transformNode';


export default {
  methods: {

    /**
     * 获取树数据
     * @param isFirst
     */
    getTreeData(isFirst = false) {
      //获取树数据
      this.treeloading = true;
      this.treeModel = {};
      getTargetRootTree().then(res => {
        let rootTreeData = [{
          checktargetName: '所有检查项',
          children: res.resultData || []
        }];
        this.treeData = transformKeyFun(rootTreeData, this.keyRefer, {lazy: true, expandedIndex:2});
        this.treeloading = false;
      }, ()=>{
        this.treeloading = false;
      });
    },


    /**
     * get childNode
     */
    // getChildrenNodes
    getChildrenTree(node){
      this.$set(node, 'loading', true);
      getTargetChildrenTree({id: node.id, checktargetFullName: node.checktargetFullName}).then((res)=>{
        this.$set(node, 'loading', false);
        let childData =  transformKeyFun(res.resultData, this.keyRefer, {lazy: true});
        this.$refs.targetTree.addNodes(node, childData);
      });
    },

    /**
     * 删除节点
     * @param node
     * @param parent
     * @param index
     */
    delNode(node, parent, index){
      this.$confirm(`此操作将永久删除节点（${node.checktargetFullName}）, 是否继续?`, '提示').then(()=>{
        delTarget({id: node.id}).then(()=>{
          this.$message.success('删除成功');
          this.$refs.targetTree.delNode(node, parent, index);
        })
      })
    },

    /**
     * 新增的节点
     * @param pNode node
     */
    addNode(pNode, node){
      //未加载出子节点的节点 增加节点
      let children = pNode.children || [];
      if(pNode.async && pNode.isHasChild&& (children.length === 0)){
        this.getChildrenTree(pNode);
      }else{
        this.$refs.targetTree.addNodes(pNode, transformKeyFun([node], this.keyRefer));
      }

    }
  }

}
