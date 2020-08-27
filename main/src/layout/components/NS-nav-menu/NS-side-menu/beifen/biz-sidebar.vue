<template>
  <div class="ns-biz-sidebar">

    <!--多级导航栏-->
    <ns-side-menu
      ref="ns-biz-sidebar"
      :data="menuData"
      :keyRefer="keyRefer"
      :defaultActive="defaultActive"
      :expanded="sideMenuExpand"
      :slotRander="slotRanderFn"
      :closeByLeafClick="true"
      :trigger="trigger"
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
  import keyRefer from '../../nav-menu-keyRefer';
  import menuSlotMixins from './menu-slot-mixins';
  import menuNodeProps from '../../utils/menuNodeProps';
  import expand from '../../../../../../expand';

  export default {
    name: 'ns-biz-sidebar',
    mixins: [menuSlotMixins],

    data() {
      return {
        menuData: [],
        menuSlotProps: null,
        currentNode: null,
        defaultActive: '',
        trigger: 'hover',
        keyRefer,
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
      sideMenuChange() {
        console.log(22222222222)
        console.log(22222222222)
        console.log(this.currentPageInfo)
        console.log(this.currentPageInfo.moduleId)
        console.log(22222222222)
        console.log(22222222222)
        return {
          moduleId: this.currentPageInfo.moduleId,
          activeKey: this.activeKey,
        };
      },
    },
    watch: {
      sideMenuChange: {
        //这里还要优化 moduleId 和 activeKey ，分情况，activeKey变化需需变更执行菜单数据处理
        handler: function(newVal, oldVal) {
          console.log(216836128379812793871298)
          console.log(216836128379812793871298)
          console.log(newVal)
          console.log(216836128379812793871298)
          console.log(216836128379812793871298)
          /**
           * toggle module handle when route is change (two routes belonging to different modules)
           * 通过 moduleId 来切换 模块：
           *  - sideMenu - 切换侧边栏数据
           *  - initRoute - 切换当前侧边栏导航菜单的初始路由
           */
          this.$store.dispatch('toggle_module_handle', newVal.moduleId).then(navdata => {
            this.menuData = navdata.sideMenu || [];
            this.$nextTick(() => {
              const _t = this.$refs['ns-biz-sidebar'];
              if (_t) {
                _t.setActive(newVal.activeKey);
              }
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
      slotRanderFn(h, node) {
        //导航
        if (node.data[keyRefer['routeName']] === 'guide') {
          return h('ns-icon-svg', {
            'attrs': {
              iconClass: 'PathCopy1',
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
        console.log('nodeClick-nodeClick');
        console.log(node);

        this.currentNode = node;

        this.menuSlotProps = this.currentNode;

        //add sign for click time
        if (this.menuSlotProps) {
          this.$set(this.menuSlotProps, 'activeTime', new Date().getTime());
        }

        this.navClick(
          { node: this.menuSlotProps, instance },
          this.judgeAndJump,
        );
      },

      /**
       * judege and router jump
       */
      judgeAndJump() {

        //非叶子节点不能点击跳转路由
        if (!this.currentNode || !this.currentNode.isLeaf) return;

        // 剔除侧滑情况
        if (menuNodeProps.isSlipPage(this.currentNode.data)) return;

        const routeNameKey = keyRefer.routeName;
        const targetName = this.currentNode.data[routeNameKey];

        // 非当前页点击
        if (this.currentRoute.name !== targetName) {
          //菜单栏 - 跳转目标页面并清除目标页的缓存
          this.$router.push({ name: targetName, params: { noRefresh: false, jumpMode: 'sideMenu' } }); //jump
        }
      },

      /**
       * toggle sideMenu expand state
       * @param state
       */
      toggleExpand(state) {
        if (this.trigger === 'hover') return;
        this.$store.dispatch('toggleSideMenuExpandState', state);
      },
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
