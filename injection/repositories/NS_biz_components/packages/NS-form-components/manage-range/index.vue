<template>
  <div
    class="cx-manage__range"
    v-model="childManageRange"
    :style="{ width: manageRange_width, height: manageRange_height }"
  >
    <a @click="openChiose">{{ interText }}</a>
    <!--弹窗-->
    <ns-dialog
      class="manage-range__dialog"
      size="mini"
      :visible.sync="dialogVisible.visible"
      :close-on-click-modal="true"
      :show-close="false"
    >
      <!--内容部分-->
      <div class="manage-range__container">
        <!--常规选择-->
        <el-radio-group v-model="normalChiose">
          <el-radio
            v-for="(item, index) in radioGroup"
            :key="index"
            :index="index"
            :label="item.value"
            :disabled="item.disabled"
          >
            {{ item.label }}
          </el-radio>
        </el-radio-group>
        <!--特定选择-->
        <el-checkbox v-model="specialSwitch">特定部门</el-checkbox>
        <!--select （ 请选择所属部门树状数据 ） -->
        <ns-checkbox-tree-select
          v-model="treeSelectModel"
          bizType="role-organizationList"
          width="200px"
          height="auto"
          size="small"
          placeholder="请选择"
          :disabled="false"
          :clearable="false"
          :multiple="true"
          v-show="specialSwitch"
        >
        </ns-checkbox-tree-select>
      </div>
      <span slot="footer">
        <ns-button type="primary" @click="dialogVisible.visible = false">保存</ns-button>
      </span>
    </ns-dialog>
  </div>
</template>
<script>
export default {
  name: 'ns-manage-range',
  components: {},
  data() {
    return {
      dialogVisible: { visible: false }, //dialog-visible
      interText: '设置管理范围',
      childManageRange: {},
      radioGroup: [
        { label: '本集团', value: 4, disabled: false },
        { label: '本公司', value: 3, disabled: false },
        { label: '本部门', value: 2, disabled: false },
        { label: '本人', value: 1, disabled: false },
      ],
      normalChiose: '', //radio data
      specialSwitch: false, //checkbox data
      treeSelectModel: [], //tree-select model data
    };
  },
  created() {},
  methods: {
    initDataReady() {
      this.childManageRange =
        !this.fatherManageRange || this.fatherManageRange === {}
          ? {
              [this.keyRefer['normalChiose']]: '',
              [this.keyRefer['specialChiose']]: [],
            }
          : this.fatherManageRange;

      console.log(this.childManageRange);

      this.normalChiose = this.childManageRange[this.keyRefer['normalChiose']];
      this.treeSelectModel = this.childManageRange[this.keyRefer['specialChiose']];
      console.log(this.treeSelectModel);
      if (this.treeSelectModel.length > 0) {
        this.specialSwitch = true;
      }
    },
    change() {
      this.$emit('change');
    },
    openChiose() {
      this.initDataReady();
      this.dialogVisible.visible = true; //dialog-visible
    },
  },
  watch: {
    normalChiose() {
      this.childManageRange[this.keyRefer['normalChiose']] = this.normalChiose;
    },
    treeSelectModel() {
      this.childManageRange[this.keyRefer['specialChiose']] = this.treeSelectModel;
    },
    childManageRange() {
      console.log('model-data 值变化了！！！');
      console.log(this.childManageRange);
      this.$emit('change', this.childManageRange);
    },
    //父组件model数据变化，实时变化子组件model
    fatherManageRange() {
      this.childManageRange = this.fatherManageRange;
    },
  },
  computed: {
    manageRange_width() {
      return this.autoForm.convertUnits(this.width, 'width', '100%');
    },
    manageRange_height() {
      return this.autoForm.convertUnits(this.height, 'height');
    },
  },
  model: {
    prop: 'fatherManageRange',
    event: 'change',
  },
  props: {
    fatherManageRange: { type: Object },
    type: { type: String, default: 'normal' }, //级联选择器 内容
    width: { type: [String, Number], default: '100%' },
    height: { type: [String, Number], default: '32px' },

    //动态获取级联各级内容
    dynamicUrl: { type: String, default: '/owner/cascader/area/test' }, //请求地址
    dynamicQuery: { type: [Object, String, Array], default: null }, //请求参数
    //指代属性
    keyRefer: {
      type: Object,
      default: function() {
        return {
          normalChiose: 'seeScopeType',
          specialChiose: 'seeOtherOrgIdList',
        };
      },
    },
  },
};
</script>
<style rel="stylesheet/scss" lang="scss">
.cx-manage__range {
  display: block;
  a {
    cursor: pointer;
  }
}

.ns-dialog.manage-range__dialog {
  .el-dialog__header {
    display: none;
  }
  .el-dialog__body {
    height: auto;
    .manage-range__container {
      .el-radio-group {
        display: block;
        .el-radio {
          display: block;
          margin: 15px 0;
        }
      }
      .el-checkbox {
        margin-bottom: 15px;
      }
      //下拉框多选的情况下手动去掉全部删除的按钮（element bug）
      .el-input {
        .el-icon-circle-close {
          display: none;
        }
      }
    }
  }
}
</style>
