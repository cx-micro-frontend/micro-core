<template>
  <div class="ns-biz-sidebar">

    <!--多级导航栏-->
    <ns-multiple-navMenu
      :data="menuData"
      :keyRefer="keyRefer"
      :defaultActive="activeKey"
      :slotRander="slotRanderFn"
      :closeByLeafClick="false"
      @node-click="nodeClick"
    >
    </ns-multiple-navMenu>


    <!--侧边栏 - 侧滑弹窗 - 外部资源注入-->
    <component :is="markName(side_slot_name)"
               v-if="is_slot_render"
               :data="menuSlotProps"
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
      ...mapGetters(['sideMenu', 'currentPageInfo']),
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
          console.log(78817837192837);
          console.log(78817837192837);
          console.log(78817837192837);
          console.log(this.sideMenu);
          console.log(78817837192837);
          console.log(78817837192837);
          console.log(78817837192837);
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
        console.log(898989898989);
        console.log(898989898989);
        console.log(898989898989);
        console.log(node);
        console.log(898989898989);
        console.log(898989898989);

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
        console.log(instance);

        // this.menuSlotProps = {
        //   firstItem,
        //   firstIndex,
        //   level: 1,
        // };

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


        console.log(123123123123);
        console.log(targetName);
        console.log(this.currentRoute.name);
        console.log(123123123123);

        // 非当前页点击
        if (this.currentRoute.name !== targetName) {
          //菜单栏 - 跳转目标页面并清除目标页的缓存
          this.$router.push({ name: targetName, params: { noRefresh: false } }); //jump
        }
      },

    },
    created() {
      console.log(12312312);
      console.log(12312312);
      console.log(12312312);
      console.log(12312312);
      console.log(this.currentPageInfo);
      console.log(12312312);
      console.log(12312312);


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
