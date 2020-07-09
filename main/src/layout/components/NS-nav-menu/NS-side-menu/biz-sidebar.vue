<template>
  <div class="ns-biz-sidebar">

    <!--多级导航栏-->
    <ns-side-menu
      :data="menuData"
      :keyRefer="keyRefer"
      :defaultActive="activeKey"
      :expanded="sideMenuExpand"
      :slotRander="slotRanderFn"
      :closeByLeafClick="false"
      @node-click="nodeClick"
      @toggle-expand="toggleExpand"
    >
    </ns-side-menu>


    <!--侧边栏 - 侧滑弹窗 - 外部资源注入-->
    <component :is="markName(side_slot_name)"
               v-if="is_slot_render"
               :node="menuSlotProps"
    ></component>


  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import keyRefer from '../nav-menu-keyRefer';
  import menuSlotMixins from './menu-slot-mixins';
  import expand from '../../../../../expand';


  export default {
    name: 'ns-biz-sidebar',
    mixins: [menuSlotMixins],

    data() {
      return {
        menuSlotProps: null,
        currentNode: null,
        keyRefer,
      };
    },
    computed: {
      ...mapGetters(['sideMenu', 'currentPageInfo', 'sideMenuExpand']),
      //当前路由信息
      currentRoute() {
        return this.$route;
      },
      activeKey() {
        return this.currentPageInfo.activeKey;
      },

      menuData() {
        try {
          //为适应暂时的多级菜单 - 增加虚拟节点处理
          return this.sideMenu;
        }
        catch (e) {
          console.error('【 NEAP-ERROR 】Failed to generate nav menu data ');
          return [];
        }
      },
    },
    methods: {
      slotRanderFn(h, node) {
        //导航
        if (node.data[keyRefer['routeName']] === 'guide') {
          return h('ns-icon-svg', {
            'attrs': {
              iconClass: 'menu-shezhi',
            },
            style: {
              'margin-left': '15px',
            },
          });
        }
      },

      navClick(parame, fn) {
        expand.layout.sidebar.jump(parame, fn);
      },

      nodeClick(node, instance) {
        this.currentNode = node;
        console.log('nodeClick-nodeClick');
        console.log(node);

        this.menuSlotProps = node;

        this.navClick(
          { node, instance },
          this.judgeAndJump,
        );
      },

      /**
       * judege and router jump
       */
      judgeAndJump() {

        //非叶子节点不能点击跳转路由
        if (!this.currentNode || !this.currentNode.isLeaf) return;

        const routeNameKey = keyRefer.routeName;
        const targetName = this.currentNode.data[routeNameKey];

        // 非当前页点击
        if (this.currentRoute.name !== targetName) {
          //菜单栏 - 跳转目标页面并清除目标页的缓存
          this.$router.push({ name: targetName, params: { noRefresh: false } }); //jump
        }
      },
      toggleExpand(state) {
        this.$store.dispatch('toggleSideMenuExpandState', state);
      },
    },
    created() {
      console.log('created-created');
      console.log('created-created');
      console.log(this.currentPageInfo);
      console.log('created-created');
      console.log('created-created');
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  .ns-biz-sidebar {
    height: 100%;
    .first-nav.hasVirtualNode {
      ul.second-nav .right {
        padding-top: 0 !important;
        .second-nav-tit {
          font-size: 16px !important;
          padding-left: 16px !important;
          background-color: #eeeeee;
        }
        li.second-nav-items {
          padding-left: 32px;
          &.is-virtual-node {
            a.nav-link {
              color: #222222 !important;
              text-indent: 8px !important;
              cursor: auto !important;
              font-weight: 600;
            }
            &:hover {
              a.nav-link {
                background-color: transparent !important;
              }
            }
          }
        }
      }
    }
  }
</style>
