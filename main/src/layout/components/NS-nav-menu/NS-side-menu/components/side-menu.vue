<!--缓存示例页面-->
<template>

  <el-menu :mode="mode"
           :default-active="defaultActive"
           class="ns-side-menu noselect"
           :class="`ns-side-menu__${mode}`"


           :background-color="themeStyle.backgroundColor"
           :text-color="themeStyle.textColor"
           :active-text-color="themeColor"

           :collapse="collapse"
  >

    <nav-menu-node :data="data"
                   :keyRefer="keyRefer"
                   :level="0"
                   :collapse="collapse"
                   :themeColor="themeColor"
                   @node-click="menuNodeClick"

    ></nav-menu-node>

  </el-menu>


</template>

<script>
  import Emitter from '../../../../../mixins/Utils/emitter';
  import sideMenuPalette from '../mixins/side-menu-palette';
  import navMenuNode from './side-menu-node';


  export default {
    name: 'side-menu',
    mixins: [Emitter, sideMenuPalette],
    components: {
      'nav-menu-node': navMenuNode,
    },
    props: {
      data: { type: Array },
      collapse: { type: Boolean, default: true },
      keyRefer: { type: Object },
      defaultActive: { type: String },
      themeColor: { type: String },
    },
    data() {
      return {
        mode: 'vertical',//horizontal / vertical
      };
    },

    computed: {},
    methods: {
      menuNodeClick(node, instance) {

        this.broadcast('menu-node', 'menu-node-click', node);

        this.$emit('node-click', node, instance); //向外抛出 事件 node-expand

      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "../style";
</style>
