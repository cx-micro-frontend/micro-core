<template>
    <ns-dialog
      class="target-info-tree"
      height="100px"
      :visible.sync="showDialog"
      @close="close"
      :title=" type === 'add' ? '新增查验对象': '编辑查验对象'"
    >
      <ns-form ref="targetForm" :model="model" :rules="rules" label-width="140px">
        <ns-form-item label="父级分类" prop="typeFullName">
          {{model.typeFullName}}
        </ns-form-item>

        <ns-form-item label="查验对象名称" prop="checktargetName">
          <ns-input v-model.trim="model.checktargetName" placeholder="请输入查验对象名称"></ns-input>
        </ns-form-item>
      </ns-form>

      <!--按钮-->
      <div slot="footer">
        <ns-button type="primary" @click="submit" :disabled="submitLoading">保存</ns-button>
        <ns-button @click="showDialog = false">取消</ns-button>
      </div>

    </ns-dialog>
</template>

<script>
  import { submitTargetForm } from '../../../../service/packages/NS-biz-tree/NS-biz-target-tree'
  export default {
    name: 'info-target-dialog',

    props: {
      type: String,

      nodeInfo: Object,

      parentNodeInfo: Object,

      visible: Boolean
    },

    data(){
      var validChecktargetName = (rule, value, callback) => {
        if (value === '' || value === undefined) {
          callback(new Error('请输入查验对象名称'));
        } else {
          value.length > 20 ? callback(new Error('名称长度不能超过20个字符')) : callback();
        }
      };
      return {
        showDialog: false,

        submitLoading: false, //保存

        model: {
          typeId: "",   //父节点的Id
          id: "",      // 子节点的Id
          typeFullName: '',  //父节点的Fullname
          checktargetName: ''  //子节点的name
        },

        rules: {
          checktargetName: [ { required: true, trigger: 'change', validator: validChecktargetName }]
        },
      }
    },

    watch: {
      visible(val){
        if(val){
          this.showDialog = true;
          this.model.typeId = this.parentNodeInfo.id;
          this.model.typeFullName = this.parentNodeInfo.checktargetFullName;
          if(this.type === 'edit'){
            this.model.id = this.nodeInfo.id;
            this.model.checktargetName = this.nodeInfo.checktargetName;
          }
        }
      }
    },

    methods: {
      close(){
        this.showDialog = false;
        this.$refs.targetForm.resetFields();
        this.$emit('update:visible',this.showDialog);
      },

      submit(){
        this.$refs.targetForm.validate((valid) => {
          if(valid){
            this.submitLoading = true;
            let url = this.type === 'add'? '/checkhouse/target/addTarget' :  '/checkhouse/target/updateTarget';
            submitTargetForm(url, this.model).then((res)=>{
              this.submitLoading = false;
              this.showDialog = false;
              if(this.type === 'edit'){
                this.nodeInfo.checktargetName = this.model.checktargetName;
                this.nodeInfo.checktargetFullName = this.model.typeFullName + this.model.checktargetName;
              }else{
                let newNode = {
                  checktargetName: this.model.checktargetName,
                  checktargetFullName:this.model.typeFullName + '->'+this.model.checktargetName,
                  id: res.resultData,
                  nodeType: 'target'
                };
                this.$emit('addNode', this.parentNodeInfo, newNode);
              }
            }, ()=>{
              this.submitLoading = false;
            })
          }
        })
      }
    }
  };
</script>

<style>
  .target-info-tree.ns-dialog .el-dialog .el-dialog__body{
    height: auto;
  }
</style>
