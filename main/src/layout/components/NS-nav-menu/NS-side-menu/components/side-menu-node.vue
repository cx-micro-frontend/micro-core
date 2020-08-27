<template>
  <div class="ns-menu-group__content">
    <template v-for="(child, childIndex) in data">
      <el-submenu v-if="showSubmenu(child)"

                  :class="subMenuClass"
                  :popper-class="subMenuClass"

                  :show-timeout="300" :hide-timeout="300"

                  :key="menuIndex(childIndex)"
                  :index="menuIndex(childIndex)"


      >
        <p class="ns-menu-group__title" :style="{'padding-left': baseGap +'px'}">测试测试</p>
        <template slot="title">
          <div :class="['ns-menu-item__content oneline-ellipsis',levelClass]"
               :style="{'padding-left': paddingGap}"
               @click="nodeClick(child,childIndex)">
            <ns-icon-svg :icon-class="getProperty(child,'icon') || ''" v-if="getProperty(child,'icon')"></ns-icon-svg>
            <!--<span>{{menuIndex(childIndex)}}</span>-->

            <span slot="title" :style="{'font-size':labelFontSize}">{{getProperty(child,'label')}}</span>
          </div>
        </template>


        <nav-menu-node :data="child.childMenus"
                       :index="menuIndex(childIndex)"
                       :level="menuLevel"
                       :collapse="collapse"
                       :keyRefer="keyRefer"
        ></nav-menu-node>

      </el-submenu>

      <el-menu-item v-else
                    :index="menuIndex(childIndex)"
                    style="padding-right: 0;"
                    @click="nodeClick(child,childIndex)">
        <div :class="['ns-menu-item__content oneline-ellipsis',levelClass]" :style="`padding-left: ${paddingGap}`">
          <ns-icon-svg :icon-class="getProperty(child,'icon') || ''" v-if="getProperty(child,'icon')"></ns-icon-svg>
          <!--<span>{{menuIndex(childIndex)}}</span>-->
          <span :style="{'font-size':labelFontSize}">{{getProperty(child,'label')}}</span>
        </div>
      </el-menu-item>
    </template>


  </div>

</template>

<script>
  export default {
    name: 'nav-menu-node',
    // inheritAttrs: true, v-bind="$attrs"
    props: {
      index: { type: String },
      level: { type: Number },
      data: { type: Array },

      collapse: { type: Boolean },
      keyRefer: { type: Object },
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
      popuplimitedHeight(){

      }
    },
    created() {
      console.log(222222222);
      console.log(this.data);
      console.log(this.keyRefer);
      console.log(this.$attrs);
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
        return !_isLeaf && (_children && _children.length);

      },
      nodeClick(node, index) {
        console.log('菜单节点点击事件');
        console.log(node);
        console.log(index);
      },
    },
  };
</script>

<style scoped>

</style>
