<!--缓存示例页面-->
<template>

  <el-menu :mode="mode" default-active="0-0"
           class="ns-side-menu noselect"
           :class="`ns-side-menu__${mode}`"
           background-color="#1A1C38"
           text-color="#9094B5"
           active-text-color="#ffffff"


           @open="handleOpen" @close="handleClose" :collapse="collapse">

    <nav-menu-node :level="0" :data="data" :keyRefer="keyRefer" :collapse="collapse"></nav-menu-node>

  </el-menu>


</template>

<script>

  import navMenuNode from './side-menu-node';


  export default {
    name: 'side-menu',
    components: {
      'nav-menu-node': navMenuNode,

    },
    props: {
      data: { type: Array },
      collapse: { type: Boolean, default: true },
      keyRefer: { type: Object },
    },
    data() {
      return {
        mode: 'vertical',//horizontal / vertical
        // data: data,
      };
    },
    computed: {},
    created() {

    },
    wathch: {},

    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },

    },
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "../style";
</style>
