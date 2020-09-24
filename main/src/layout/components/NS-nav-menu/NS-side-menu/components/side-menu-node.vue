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
        <p class="ns-menu-group__title" :style="{'padding-left': baseGap +'px','color': themeStyle.groupTitle}">
          {{getProperty(child,'label')}}
        </p>

        <template slot="title">
          <div :class="nodeContentClass(childIndex)"
               :style="{
               'padding-left': paddingGap,
                ...nodeStyle(child,childIndex,'submenu')
               }"
               @click="nodeClick(child)">

            <ns-icon-svg :icon-class="getProperty(child,'icon') || ''" v-if="iconShow(child)"></ns-icon-svg>

            <!--<span>{{menuIndex(childIndex)}}</span>-->
            <!--<span>{{getProperty(child,'isLeaf')}}</span>-->

            <span slot="title" :style="{'font-size':labelFontSize}">{{getProperty(child,'label')}}</span>

          </div>
        </template>


        <nav-menu-node :data="child.childMenus"
                       :index="menuIndex(childIndex)"
                       :level="menuLevel"
                       :collapse="collapse"
                       :indexPath="indexPath"
                       :activeIndex="activeIndex"
                       :keyRefer="keyRefer"
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
          <div :class="nodeContentClass(childIndex)"
               :style="{
               'padding-left': paddingGap,
                ...nodeStyle(child,childIndex,'leaf')}
               ">
            <ns-icon-svg :icon-class="getProperty(child,'icon') || ''" v-if="iconShow(child)"></ns-icon-svg>

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
  import { mapGetters } from 'vuex';
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
      activeIndex: { type: String },
      indexPath: { type: Array },
      keyRefer: { type: Object },
    },
    data() {
      return {
        baseGap: 16,
      };
    },
    computed: {
      ...mapGetters(['browserInfo']),

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

      /**
       * icon show state
       * @param child
       */
      iconShow(child) {
        const _icon = this.getProperty(child, 'icon');
        return _icon && this.menuLevel === 1;
      },


      menuIndex(i) {
        return this.index ? `${this.index}-${i}` : i + '';
      },

      /**
       * node 节点  class
       * @param childIndex
       */
      nodeContentClass(childIndex) {
        return ['ns-menu-item__content oneline-ellipsis',`is-${this.sideMenuTheme}` ,this.levelClass, { 'is-active': this.inIndexPath(childIndex) }];
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

      /**
       * create node style
       * @param child
       * @param childIndex
       * @param type
       * @returns {{'background-color': string, color: any, 'font-weight': string}}
       */
      nodeStyle(child, childIndex, type) {
        //是否在 active 链中
        const isInActiveChain = this.inIndexPath(childIndex);
        // const isActiveIndex = this.activeIndex === menuIndex;

        return {
          'background-color': isInActiveChain ? this.themeStyle.activeBackgroundColor : 'transparent',
          'color': isInActiveChain ? this.themeStyle.activeTextColor : null,
          'font-weight': isInActiveChain ? 'bold' : 'normal',
          '--backgroundColorHover': this.themeStyle.backgroundColorHover,
        };

      },

      inIndexPath(index) {
        const menuIndex = this.menuIndex(index);
        return this.indexPath.indexOf(menuIndex) > -1;
      },
    },
  };
</script>
