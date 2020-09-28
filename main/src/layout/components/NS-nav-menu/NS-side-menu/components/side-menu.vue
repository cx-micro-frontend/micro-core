<!--缓存示例页面-->
<template>
  <el-menu :mode="mode"
           :default-active="defaultActive"
           class="ns-side-menu noselect"
           :class="`ns-side-menu__${mode} ns-side-menu__${sideMenuTheme}`"

           :text-color="themeStyle.textColor"
           :background-color="themeStyle.backgroundColor"
           :active-text-color="themeStyle.activeTextColor"

           :collapse="collapse"
           :unique-opened="uniqueOpened"

           @select="select"
  >

    <nav-menu-node :data="data"
                   :keyRefer="keyRefer"
                   :level="0"
                   :collapse="collapse"
                   :indexPath="indexPath"
                   :activeIndex="activeIndex"
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
        indexPath: [],
        activeIndex: '',
      };
    },

    // watch: {
    //   defaultActive: {
    //     handler: function(newID, oldID) {
    //
    //
    //     },
    //     immediate: true,
    //   },
    // },

    methods: {
      menuNodeClick(node, instance) {

        this.broadcast('menu-node', 'menu-node-click', node);

        this.$emit('node-click', node, instance); //向外抛出 事件 node-expand

      },

      /**
       * create init index path
       * @param initActive
       * @returns {Array}
       */
      createInitIndexPath(initActive) {
        if (!initActive) return [];
        let sign = '';
        const arr = [];
        initActive.split('-').forEach(i => {
          sign = sign + i;
          arr.push(sign);
          sign = sign + '-';
        });

        return arr;
      },

      /**
       * select - 选中事件
       * @param index
       * @param indexPath
       */
      select(index, indexPath) {
        this.activeIndex = index;
        this.indexPath = indexPath;
      },
    },
    created() {
      this.activeIndex = this.defaultActive;
      this.indexPath = this.createInitIndexPath(this.activeIndex);
    },

  };
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "../style";
</style>
