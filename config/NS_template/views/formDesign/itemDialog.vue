<!--新增/编辑-->
<template>
  <ns-biz-common-dialog
    :title="dialogTitle"
    size="large"
    :visible.sync="showDialog"
    @close="close"
  >
    <!--按钮区域-->
    <template slot="footer">
      <ns-biz-role-button-area :buttonList="buttonList" @command="roleButtonCommand"></ns-biz-role-button-area>
    </template>
    <!--表单部分-->
    <template>
      <ns-biz-generator
        v-if="previewForm"
        style="margin-top: 16px"
        ref="generateForm"
        :data="previewForm"
      ></ns-biz-generator>
    </template>
  </ns-biz-common-dialog>
</template>

<script>
  import { addItem, editItem, detailItem, getForm } from '@NEAP/service'
  import _ from 'lodash'

  export default {
    name: 'itemDialog',

    props: {
      dialogType: { type: String },
      visible: Boolean,

      scope: { type: Object },//表格行数据
      buttonList: Array,  //表单权限按钮
    },

    data() {
      return {
        previewForm: null,  // 展示的数据
        detail: {},    //详情接口的获取

        templateJSON: {},  // 模板JSON
        size: 'full',   //弹框大小

        showDialog: false,
      }
    },


    watch: {
      visible(val) {
        this.showDialog = val

        if (val) {
          this.previewForm = {
            list: _.cloneDeep(this.templateJSON),
            config: { width: '100%' },
          }
          this.$refs.generateForm.reset()  //重置
          if (this.dialogType === 'edit') {
            this.initDetail()
          }
        }
      },
    },

    computed: {
      dialogTitle() {
        return this.dialogType === 'add' ? '新增' : '编辑'
      },
    },

    methods: {
      /**
       * 初始化赋值
       */
      initDetail() {
        detailItem({ id: this.scope.id }).then(res => {
          this.detail = res.resultData
          // let generator = this.$refs.generateForm
          // generator.setData(this.detail)
          // generator.resetModels = this.detail
          // generator.reset()

          this.previewForm.list = this.setFormModelData(this.detail)
        })
      },


      //初始值塞入大对象, 递归赋值
      setFormModelData(model) {
        let blankForm = _.cloneDeep(this.templateJSON)
        const setModelKey = (list) => {
          list.forEach(i => {
            if (i.hasOwnProperty('modelData')) {
              i.modelData = model[i.modelKey]
            }

            if (i.columns && i.columns.length > 0) {
              i.columns.forEach(col => {
                setModelKey(col.list)
              })
            }
          })
        }

        setModelKey(blankForm)
        return blankForm
      },

      /**
       * role button command - 权限按钮点击操作
       * @param command
       */
      roleButtonCommand(command) {
        //确定 - 提交表单
        if (command.code === 'formSubmitBtn') {
          this.submitForm(command)
        }
        //取消 - 关闭弹窗
        if (command.code === 'formCancelBtn') {
          this.close()
        }
      },

      /**
       * 提交表单
       * @param command
       */
      submitForm(command) {
        command.disabled = true

        //校验 获取数据
        let generator = this.$refs.generateForm
        generator.getData().then(res => {
          let query = { ...this.detail, ...res };
          (
            this.dialogType === 'add' ?
              addItem
              :
              editItem)(query).then(
            res => {
              this.$message.success('成功')
              this.$emit('refreshGrid') //刷新表格
              this.close()
            }).finally(() => {
            command.disabled = false
          })
        }).catch(() => {
          command.disabled = false
        })
      },

      /**
       * 关闭弹窗
       */
      close() {
        this.showDialog = false
        this.detail = {}
        this.$emit('update:visible', this.showDialog)
      },
    },

    /**
     * 初始化 获取表单
     */
    created() {
      getForm().then(res => {
        let { formContent, formSize } = res.resultData
        this.templateJSON = JSON.parse(formContent)
        this.size = formSize
      })
    },
  }
</script>
