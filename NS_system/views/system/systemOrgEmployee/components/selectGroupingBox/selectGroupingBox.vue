<template>
  <div id="selectGroupingBox">
    <el-select
      v-model="childModel"
      multiple
      size="small"
      collapse-tags
      clearable
      @change="change"
      placeholder="请选择"
    >
      <el-option-group v-for="group in options1" :key="group.label" :label="group.label">
        <el-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-option-group>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'selectGroupingBox',
  props: {
    items: {
      type: Array,
      default: [],
    },
    fatherModel: {
      type: [String, Number, Object, Array],
    },
  },
  data() {
    return {
      options1: [],
      childModel: [],
    };
  },
  created() {
    this.options1 = this.items;
    this.childModel = this.fatherModel;
  },
  model: {
    prop: 'fatherModel',
    event: 'change',
  },
  watch: {
    childModel() {
      this.$emit('change', this.childModel);
    },
    fatherModel() {
      this.childModel = this.fatherModel;
    },
    items() {
      this.options1 = this.items;
    },
  },
  methods: {
    change(val) {
      this.$emit('change', val);
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss">
#selectGroupingBox {
  .el-input__inner {
    width: 200px !important;
  }
}
</style>
