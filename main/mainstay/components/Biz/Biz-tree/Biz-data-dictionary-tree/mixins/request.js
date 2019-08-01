import {
  treeDataFetch,
} from '../../../../../service/System/Tree/dictionary-tree';
import transformKeyFun from '../../utils/transformNode';

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
      treeDataFetch({
        organizationId: this.organizationId,
      }).then(res => {
        this.treeData = transformKeyFun([res.resultData], this.keyRefer, {expandedIndex: 1});
        this.treeModel =  this.treeData[0];
        this.nodeClick(this.treeModel);
        this.treeloading = false;
      }, ()=>{
        this.treeloading = false;
      });
    },
  }

}
