<template>
  <ns-select-tree
    :size="size"
    appendToBody
    v-model="selectModel"
    :options="options"
    @input="emitInput"
    :defaultExpandLevel="defaultExpandLevel"
    :placeholder="placeholder"
  ></ns-select-tree>
</template>
<script>
  export default {
    name: 'biz-organize-select-tree',

    props: {
      size: String,

      placeholder: {
        type: String,
        default: '请选择'
      },

      defaultExpandLevel: {
        type: Number,
        default: 2
      }
    },

    data(){
      return{
        selectModel: this.value,
        options: null
      }
    },

    watch: {
      value(val){
        this.selectModel = val;
      }
    },

    methods: {
      emitInput: function(){
        this.$emit('input', this.selectModel);
        this.$emit('change', this.selectModel)
      }
    }
  }

</script>
