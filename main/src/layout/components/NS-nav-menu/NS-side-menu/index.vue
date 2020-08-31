<template>
  <div :class="['ns-biz-sideMenu',`ns-biz-sideMenu--${sideMenuTheme}`]"
       :style="{'background-color': themeStyle.backgroundColor}"
  >
    <!--多级导航栏-->
    <side-menu :data="sideMenu"
               :collapse="collapse"
               :keyRefer="keyRefer"
               :themeColor="themeColor"
               :defaultActive="activeKey"
               @node-click="nodeClick">

    </side-menu>

    <div class="main-menu__expanded">
      <el-tooltip
        :content="collapse ? '展开' : '收起'"
        effect="dark"
        placement="right"
        :hide-after="800"
      >
        <ns-icon-class
          :icon-class="collapse ? 'CombinedShapeCopyx':'CombinedShapex' "
          @click="toggleCollapse"
        />
      </el-tooltip>
    </div>


    <!--侧边栏 - 侧滑弹窗 - 外部资源注入-->
    <component :is="markName(side_slot_name)"
               v-if="is_slot_render"
               :node="currentNode"
    ></component>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import keyRefer from '../nav-menu-keyRefer';

  import sideMenu from './components/side-menu';
  import menuNodeProps from '../utils/menuNodeProps';

  import menuSlotMixins from './mixins/menu-slot-mixins';
  import sideMenuPalette from './mixins/side-menu-palette';

  import expand from '../../../../../expand';

  export default {
    name: 'ns-biz-sideMenu',
    mixins: [menuSlotMixins, sideMenuPalette],
    components: { sideMenu },
    data() {
      return {
        menuData: [],
        currentNode: null,
        trigger: 'hover',
        keyRefer,
        collapse: true,
      };
    },
    computed: {
      ...mapGetters(['sideMenu', 'moduleMenu', 'currentPageInfo', 'sideMenuExpand', 'userinfo']),
      themeColor() {
        return this.userinfo.themeColor;
      },
      //当前路由信息
      currentRoute() {
        return this.$route;
      },
      activeKey() {
        return this.currentPageInfo.menuId;
      },
      moduleId() {
        return this.currentPageInfo.moduleId;
      },
    },
    watch: {

      moduleId: {
        handler: function(newID, oldID) {

          /**
           * toggle module handle when route is change (two routes belonging to different modules)
           * 通过 moduleId 来切换 模块：
           *  - sideMenu - 切换侧边栏数据
           *  - initRoute - 切换当前侧边栏导航菜单的初始路由
           */
          this.$store.dispatch('toggle_module_handle', newID).then(navdata => {
            this.$nextTick(() => {
              this.menuData = navdata.sideMenu || [];
            });
          }).catch(err => {
              console.warn(`【 NEAP-ERROR 】Failed to generate nav menu data: ${err} `);
            },
          );
        },
        immediate: true,
      },

    },

    methods: {

      /**
       * 切换菜单栏展开/收起 状态
       */
      toggleCollapse() {
        this.collapse = !this.collapse;
        this.$store.dispatch('toggleSideMenuCollapseState', this.collapse);

      },

      /**
       * menu node click
       * @param node
       */
      nodeClick(node) {
        console.log('菜单节点点击事件');
        console.log(node);

        this.currentNode = node;

        //add sign for click time
        if (this.currentNode) {
          this.$set(this.currentNode, 'activeTime', new Date().getTime());
        }

        this.navClick(this.currentNode, this.judgeAndJump);
      },

      /**
       * navClick
       * @param parame
       * @param fn
       */
      navClick(parame, fn) {
        expand.layout.sidebar.jump(parame, fn);
      },

      /**
       * judege and router jump
       */
      judgeAndJump() {
        console.log('judgeAndJump-judgeAndJump');
        const isLeaf = this.currentNode[keyRefer['isLeaf']];
        const routeName = this.currentNode[keyRefer['routeName']];


        //非叶子节点不能点击跳转路由
        if (!this.currentNode || !isLeaf) return;

        // 剔除侧滑情况
        if (menuNodeProps.isSlipPage(this.currentNode)) return;

        // 非当前页点击
        if (this.currentRoute.name !== routeName) {

          //菜单栏 - 跳转目标页面并清除目标页的缓存
          this.$router.push({ name: routeName, params: { noRefresh: false, jumpMode: 'sideMenu' } }); //jump
        }
      },

    },
  };
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../../../style/mixins/index";

  .ns-biz-sideMenu {

    height: 100%;
    border-right: 1px solid #e6e6e6;
    box-sizing: border-box;
    .ns-side-menu {
      height: calc(100% - 55px);
      padding-top: 10px;

    }

    //展开按钮（底部)
    .main-menu__expanded {
      position: absolute;
      bottom: 0;
      width: calc(100% - 1px);
      height: 40px;
      line-height: 40px;
      text-align: center;
      i.ns-icon-class {
        font-size: 13px;
        cursor: pointer;
        color: #656882;
      }
    }
  }

</style>
