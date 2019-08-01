<!-- ns-role-button -->
<template>
  <div
    :class="[
      'ns-role-button',
      'ns-role-button--' + typeTransform.status,
      { 'ns-role-dropdown': typeTransform.isDrop },
      { 'area-action': roleInfo.areaType === 'ACTION' },
    ]"
  >
    <!--button-->
    <el-button
      :code="roleInfo.code"
      :type="btnType"
      :disabled="disabled || status"
      size="small"
      v-if="modeChoice === 'status1'"
      @click="clickMethod"
    >
      {{ roleInfo.name }}
      <slot></slot>
    </el-button>
    <!--icon-->
    <div :class="['clear', { disabled: disabled }]" v-else-if="modeChoice === 'status2'">
      <div class="icon-svg" @click="clickMethod">
        <ns-icon-svg :icon-class="iconTransform"></ns-icon-svg>
        <span class="ns-role-button-title"> {{ roleInfo.name }}</span>
      </div>
    </div>
    <template v-else-if="modeChoice === 'not-render'"></template>
    <!--dropdown-->
    <ns-dropdown
      :items="dropdownList"
      :mode="typeTransform.dpType"
      :iconClas="iconClass"
      @command="dpCommand"
      v-else
    ></ns-dropdown>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import iconMap from './role_iconMap';
export default {
  name: 'ns-role-button',
  data() {
    return {
      btnStatus: false, // 点击确定或保存，按钮置灰，避免重复点击
      coverMap: [
        { baseType: 'button', dpType: null, status: 'status1', isDrop: false },
        { baseType: 'icon', dpType: null, status: 'status2', isDrop: false },
        { baseType: 'dp-text', dpType: 'text', status: 'status3', isDrop: true },
        { baseType: 'dp-icon', dpType: 'icon', status: 'status4', isDrop: true },
        { baseType: 'dp-button', dpType: 'button', status: 'status5', isDrop: true },
        { baseType: 'dp-split-button', dpType: 'split-button', status: 'status6', isDrop: true },
      ],
    };
  },
  computed: {
    ...mapGetters(['roleButtonList']),
    isPermissioned() {
      let status = this.roleButtonList.some(item => {
        return (
          item.code === this.roleInfo.code &&
          item.areaType === this.roleInfo.areaType &&
          item.btnType === this.roleInfo.btnType
        );
      });
      return status || this.coerciveShow;
    },

    typeTransform() {
      return this.coverMap.find(item => item.baseType === this.mode);
    },

    modeChoice() {
      //no not have role to display and th type of button is single
      if (!this.isPermissioned && !this.typeTransform.isDrop) {
        return 'not-render';
      }
      return this.typeTransform.status;
    },

    iconTransform() {
      return iconMap.filter(item => item.name === this.roleInfo.name)[0].iconClass;
    },

    dropdownList() {
      return this.roleButtonList
        .filter(item => item.areaType === 'ACTION' && item.btnType === 'dropDown' && !item.hide)
        .map(val => {
          return { label: val.name, command: val.code };
        });
    },

    status() {
      if (this.roleInfo.code === 'formConfirmBtn') {
        return this.btnStatus;
      } else {
        return false;
      }
    },
  },
  methods: {
    clickMethod() {
      this.$emit('click');
    },

    /**
     * dropdown command
     * @param command
     */
    dpCommand(command) {
      //导出的情况
      this.$emit('command', command);
    },
  },
  props: {
    btnType: { type: String }, //primary,success,warning,danger,info,text,icon
    mode: { type: String }, //button,icon,dp-text,dp-icon,dp-button,dp-split-button
    disabled: { type: Boolean, default: false }, //Only valid for single permissions button
    coerciveShow: { type: Boolean, default: false }, //coercive to display
    iconClass: { type: String }, //custom icon for role dropdown
    //button role information
    roleInfo: {
      type: Object,
      default: function() {
        return {
          code: '', //按钮编码
          name: '', //按钮名称
          nameEn: '', //按钮英文名称
          type: '', //按钮类型
          index: '', //排序号
          btnType: '', //按钮类型 （single / dropDown）
        };
      },
    },
  },
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import '../../../../style/public';

.ns-role-button {
  display: inline-block;
  cursor: pointer;
}
</style>
