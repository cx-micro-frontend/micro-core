<!--新增/编辑-->
<template>
  <ns-biz-common-dialog
    :title="dialogType === 'add' ? '新增' : '编辑'"
    :size="dialogSize"
    :visible.sync="showDialog"
    @close="dialogClose"
  >
    <!--按钮区域-->
    <template slot="footer">
      <ns-biz-role-button-area :buttonList="buttonList" @command="roleButtonCommand"></ns-biz-role-button-area>
    </template>

    <!--表单部分-->
    <template>
      <ns-biz-generator
        ref="generateForm"
        :data="previewForm"
        :type="dialogType"
        v-if="previewForm"
      ></ns-biz-generator>
    </template>

  </ns-biz-common-dialog>
</template>

<script>

  import { addItem, editItem, detailItem, getForm } from '@NEAP/service';//service api
  import _ from 'lodash';//后续可以优化删除

  export default {
    name: 'itemDialog',

    props: {
      dialogType: { type: String },
      visible: Boolean,
      scope: { type: Object },//表格行数据传入
      buttonList: Array,  //表单权限按钮传入
    },

    data() {
      return {
        detailData: {},    //详情接口的获取
        previewForm: null,  // 表单传入的json数据
        templateJSON: {},  // 模板JSON
        dialogSize: 'full',   //弹框大小
        showDialog: false,
      };
    },
    //监听
    watch: {
      visible(val) {
        this.showDialog = val;

        if (val) {
          this.previewForm = {
            list: _.cloneDeep(this.templateJSON),
            config: { width: '100%' },
          };

          this.$refs.generateForm.reset();  //重置表单(数据+校验状态)

          if (this.dialogType === 'edit') {
            this.initDetail();
          }
        }
      },
    },

    methods: {
      /**
       * 初始化赋值
       */
      initDetail() {
        detailItem({ id: this.scope.id }).then(res => {
          this.detail = res.resultData;
          this.previewForm.list = this.setFormModelData(this.detail);
        });
      },

      /**
       * role button command - 权限按钮点击操作
       * @param command
       */
      roleButtonCommand(command) {
        //表单确定 - 提交表单
        if (command.code === 'formSubmitBtn') {
          this.submitForm(command);
        }
        //表单取消 - 关闭弹窗
        if (command.code === 'formCancelBtn') {
          this.close();
        }
      },

      /**
       * 提交表单
       * @param command
       */
      submitForm(command) {
        command.disabled = true;

        //校验 获取数据
        let generator = this.$refs.generateForm;

        generator.getData().then(res => {
          let query = { ...this.detailData, ...res };
          (
            this.dialogType === 'add' ?
              addItem
              :
              editItem)(query).then(
            res => {
              this.$message.success('成功');
              this.close();
            }).finally(() => {
            command.disabled = false;
          });
        }).catch(() => {
          command.disabled = false;
        });
      },

      /**
       * 关闭弹窗
       */
      dialogClose() {
        this.showDialog = false;
        this.detailData = {};
        this.$emit('update:visible', this.showDialog);
      },

      /**
       * 初始值塞入大对象, 递归赋值
       * ！！！！后续优化掉，可以删除 ！！！
       * ！！！！后续优化掉，可以删除 ！！！
       * @param model
       */
      setFormModelData(model) {
        //深拷贝
        let blankForm = _.cloneDeep(this.templateJSON);

        const setModelKey = list => {
          list.forEach(i => {
            if (i.hasOwnProperty('modelData')) {
              i.modelData = model[i.modelKey];
            }

            if (i.columns && i.columns.length > 0) {
              i.columns.forEach(col => {
                setModelKey(col.list);
              });
            }
          });
        };

        setModelKey(blankForm);

        return blankForm;
      },

    },

    created() {
      /**
       * 初始化 获取表单数据
       */
      getForm().then(res => {
        //获取表单json渲染数据 和 表单尺寸
        let { formContent, formSize } = res.resultData;
        //解析 字符串 => Json
        this.templateJSON = JSON.parse(formContent);

        this.dialogSize = formSize;
      });
    },
  };
</script>
