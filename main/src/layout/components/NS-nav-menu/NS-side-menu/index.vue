<template>
  <div class="ns-biz-sidebar">


    <!--多级导航栏-->
    <side-menu :data="sideMenu" :collapse="collapse" :keyRefer="keyRefer"></side-menu>


    <div class="main-menu__expanded">
      <el-tooltip
        :content="collapse ? '展开' : '收起'"
        effect="dark"
        placement="right"
        :hide-after="800"
      >
        <ns-icon-class
          :icon-class="collapse ? 'CombinedShapex' : 'CombinedShapeCopyx'"
          @click="toggleExpand"
        />
      </el-tooltip>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import keyRefer from '../nav-menu-keyRefer';

  import sideMenu from './components/side-menu';
  import data from './components/data';
  // import menuSlotMixins from './menu-slot-mixins';

  export default {
    name: 'ns-biz-sidebar',
    // mixins: [menuSlotMixins],
    components: { sideMenu },
    data() {
      return {
        menuData: [],
        menuSlotProps: null,
        currentNode: null,
        defaultActive: '',
        trigger: 'hover',
        keyRefer,
        collapse: true,
        data,

      };
    },
    computed: {
      ...mapGetters(['sideMenu', 'moduleMenu', 'currentPageInfo', 'sideMenuExpand']),
      //当前路由信息
      currentRoute() {
        return this.$route;
      },
      activeKey() {
        return this.currentPageInfo.menuId;
      },
    },
    methods: {

      /**
       * 切换菜单栏展开/收起 状态
       */
      toggleExpand() {
        this.collapse = !this.collapse;
        // this.$emit('toggle-expand', this.mainExpanded);
      },
    },
    created() {
      console.log(111111111);
      console.log(this.sideMenu);
      console.log(111111111);

    },
  };
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../../../style/mixins/index";

  .ns-biz-sidebar {
    height: 100%;
    background-color: #1A1C38;
    .ns-side-menu {
      height: calc(100% - 55px);
      padding-top: 10px;
    }

    //展开按钮（底部)
    .main-menu__expanded {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 40px;
      text-align: center;
      line-height: 40px;
      background-color: #12142B;
      i.ns-icon-class {
        font-size: 13px;
        cursor: pointer;
        color: #656882;
      }
    }
  }
</style>
