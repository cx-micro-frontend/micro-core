<template>
  <div class="ns-menu-group__content">
    <template v-for="(child, childIndex) in data">
      <el-submenu v-if="showSubmenu(child)"

                  :class="subMenuClass"
                  :popper-class="subMenuClass"

                  :show-timeout="300" :hide-timeout="300"

                  :key="menuIndex(childIndex)"
                  :index="menuIndex(childIndex)"
                  v-show="getProperty(child,'visible')"

      >
        <p class="ns-menu-group__title" :style="{'padding-left': baseGap +'px','--groupTitle':themeStyle.groupTitle}">{{getProperty(child,'label')}}</p>

        <template slot="title">
          <div :class="['ns-menu-item__content oneline-ellipsis',levelClass]"
               :style="{
               'padding-left': paddingGap,
               '--themeColor':themeColor,
               '--textColor':themeStyle.textColor,
               '--backgroundColorHover':themeStyle.backgroundColorHover
               }"
               @click="nodeClick(child,childIndex,$event)">
            <ns-icon-svg :icon-class="getProperty(child,'icon') || ''" v-if="getProperty(child,'icon')"></ns-icon-svg>

            <!--<span>{{menuIndex(childIndex)}}</span>-->
            <!--<span>{{getProperty(child,'isLeaf')}}</span>-->

            <span slot="title" :style="{'font-size':labelFontSize}">{{getProperty(child,'label')}}</span>

          </div>
        </template>


        <nav-menu-node :data="child.childMenus"
                       :index="menuIndex(childIndex)"
                       :level="menuLevel"
                       :collapse="collapse"
                       :keyRefer="keyRefer"
                       :themeColor="themeColor"
                       @node-click="nodeClickBroadcast"
        ></nav-menu-node>

      </el-submenu>

      <el-menu-item v-else
                    :index="menuIndex(childIndex)"
                    style="padding-right: 0;"
                    @click="nodeClick(child)"
                    v-show="getProperty(child,'visible')"
      >
        <el-tooltip :disabled="!collapse || menuLevel > 1"
                    effect="dark"
                    placement="right"
                    :content="getProperty(child,'label')"
        >
          <div :class="['ns-menu-item__content oneline-ellipsis',levelClass]"
               :style="{
               'padding-left': paddingGap,
               '--themeColor':themeColor,
               '--textColor':themeStyle.textColor,
               '--backgroundColorHover':themeStyle.backgroundColorHover}
              ">
            <ns-icon-svg :icon-class="getProperty(child,'icon') || ''" v-if="getProperty(child,'icon')"></ns-icon-svg>

            <!--<span>{{menuIndex(childIndex)}}</span>-->
            <!--<span>{{getProperty(child,'isLeaf')}}</span>-->

            <span :style="{'font-size':labelFontSize}">{{getProperty(child,'label')}}</span>

          </div>
        </el-tooltip>

      </el-menu-item>

    </template>


  </div>

</template>

<script>
  import Emitter from '../../../../../mixins/Utils/emitter';
  import sideMenuPalette from '../mixins/side-menu-palette';
  import slotRender from './slotRender';

  export default {
    name: 'nav-menu-node',
    mixins: [Emitter, sideMenuPalette],
    components: { slotRender },
    // inheritAttrs: true, v-bind="$attrs"
    props: {
      index: { type: String },
      level: { type: Number },
      data: { type: Array },

      collapse: { type: Boolean },
      keyRefer: { type: Object },
      themeColor: { type: String },
    },
    data() {
      return {
        baseGap: 16,
      };
    },
    computed: {
      menuLevel() {
        return this.level + 1;
      },
      paddingGap() {
        const _n = this.collapse ? 1 : this.menuLevel;
        return _n * this.baseGap + 'px';
      },
      levelClass() {
        return `level-${this.menuLevel}`;
      },
      subMenuClass() {
        return `ns-sub-menu ns-sub-menu__popup ${this.levelClass}`;
      },

      labelFontSize() {
        return this.menuLevel > 1 ? '13px' : '14px';
      },
    },
    methods: {
      getProperty(data, key) {
        return data[this.keyRefer[key]];
      },
      menuIndex(i) {
        return this.index ? `${this.index}-${i}` : i + '';
      },

      showSubmenu(node) {
        const _children = this.getProperty(node, 'children');
        const _isLeaf = this.getProperty(node, 'isLeaf');

        if (!_isLeaf && (_children && _children.length)) {
          const visibleKey = this.keyRefer['visible'];
          const isChildrenAllHidden = _children.every(node => !node[visibleKey]);
          return !isChildrenAllHidden;
        }
        else {
          return false;
        }
      },


      /**
       * node click event
       * @param node
       */
      nodeClick(node) {
        this.$emit('node-click', node, this);
      },


      /**
       * 内层  子树组件 展开节点
       * @param node
       * @param instance
       */
      nodeClickBroadcast(node, instance) {

        this.broadcast('menu-node', 'menu-node-click', node);

        this.$emit('node-click', node, instance);
      },

    },
    created() {

    },
  };
</script>

<style scoped>

</style>
