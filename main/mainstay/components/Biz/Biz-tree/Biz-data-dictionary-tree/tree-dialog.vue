<template>
  <ns-dialog
    id="dictionary_tree_dialog"
    :title="title"
    :visible.sync="visible.visible"
    size="small"
    type="autoHeight"
    @close="dialogClose"
  >
    <ns-auto-form
      ref="dictionary_tree_form"
      autoFormID="dictionary_tree_form"
      :submit-url="submitUrl"
      :cover-data="coverData"
      :is-local="true"
      :local-data="autoFormoLcaldata"
      :showMessage="showMessage"
      cue-type="only-error"
      @afterRequest="afterRequest"
    >
    </ns-auto-form>
    <!--按钮-->
    <div slot="footer">
      <ns-button type="primary" @click="submit">保 存</ns-button>
      <ns-button @click="cancelHandle">取 消</ns-button>
    </div>
  </ns-dialog>
</template>

<script>
  import * as store from '../../../../utils/nsQuery/nsStore';
  import { reset_group, reset_dic } from './reset';

  export default {
    props: {
      visible: {
        type: Object,
        default() {
          return {
            visible: true,
          };
        },
      },
      type: null,
      organizationId: null,
      itemInfo: {
        type: Object,
      },
      detailInfo: {
        type: Object,
      },
    },
    data() {
      return {
        autoFormoLcaldata: {},
        coverData: {},
        title: '',
        submitUrl: '',
        showMessage: false,
      };
    },
    created() {
      if (this.type === 'add-dic') {
        this.title = '新增字典';
        this.autoFormoLcaldata = reset_dic;
        this.submitUrl = '/system/dictionary/add-dictionary';
        this.changeDialogShowState(true);
      } else if (this.type === 'add-group') {
        this.title = '新增字典类型';
        this.autoFormoLcaldata = reset_group;
        this.submitUrl = '/system/dictionary/add-dictionaryGroup';
        this.changeDialogShowState(true);
      } else if (this.type === 'edit-group') {
        this.title = '编辑字典类型';
        this.autoFormoLcaldata = reset_group;
        this.submitUrl = '/system/dictionary/edit-dictionaryGroup';
        this.changeDialogShowState(true);
      } else if (this.type === 'edit-dic') {
        this.title = '编辑字典';
        this.autoFormoLcaldata = reset_dic;
        this.submitUrl = '/system/dictionary/edit-dictionary';
        this.changeDialogShowState(true);
      }
    },
    methods: {
      dialogClose() {
        this.changeDialogShowState(false);
      },
      //执行dialog开关的一系列操作
      changeDialogShowState(type) {
        if (type) {
          store.formController.set('dictionary_tree_form', {
            show: true,
          });
        } else {
          this.$refs['dictionary_tree_form'].resetForm('dictionary_tree_form');
          store.formController.delete('dictionary_tree_form');
          this.visible.visible = false;
        }
      },

      /**
       * detail Info Assignment(详情信息赋值)
       * */
      detailInfoAssignment() {
        if (this.type === 'edit-group' || this.type === 'edit-dic') {
          this.modelShowData.modelData = this.detailInfo;
        }
      },


      afterRequest(vm, data) {
        this.modelShowData = data;
        this.detailInfoAssignment();
        if (this.type === 'add-dic' || this.type === 'add-group') {
          data.modelData.organizationId = this.organizationId;
          data.modelData.dictionaryGroupId = this.itemInfo.nodeValue;
        }
      },
      cancelHandle() {
        this.changeDialogShowState(false);
      },


      submit() {
        this.showMessage = true;
        this.$refs['dictionary_tree_form'].submitForm('dictionary_tree_form').then(() =>{
          this.$message({ message: '添加成功', type: 'success' });
          this.$emit('query');
          this.changeDialogShowState(false);
        });
      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  #dictionary_tree_dialog.ns-dialog {
    .ns-autoForm-content {
      min-height: 0;
    }
    .ns-autoForm-scroll {
      padding-bottom: 5px;
    }
  }
</style>
