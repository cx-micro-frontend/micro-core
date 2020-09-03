<!--缓存示例页面-->

<!--:active-text-color="themeColor"-->
<template>

  <el-menu :mode="mode"
           :default-active="defaultActive"
           class="ns-side-menu noselect"
           :class="`ns-side-menu__${mode}`"

           :background-color="themeStyle.backgroundColor"


           :collapse="collapse"

           :unique-opened="uniqueOpened"
  >

    <nav-menu-node :data="data"
                   :keyRefer="keyRefer"
                   :level="0"
                   :collapse="collapse"
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
      keyRefer: { type: Object },
      defaultActive: { type: String },
      collapse: { type: Boolean, default: true },
      uniqueOpened: { type: Boolean, default: true },
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
