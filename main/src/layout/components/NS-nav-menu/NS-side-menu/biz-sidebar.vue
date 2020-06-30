<template>
  <div class="ns-biz-sidebar">

    <ns-sidebar :type="sidebarType"
                :data="menuData"
                :jumpByNavEmpty="jumpByNavEmpty"
                :showTimeout="200"
                :hideTimeout="200"
                :keyRefer="keyRefer"
                hasVirtualNode
                @first-nav-click="firstNavClick"
                @second-nav-click="secondNavClick"
                @mouse-enter="mouseEnter">
      <template slot="first-slot" slot-scope="scope">
        <!--<ns-icon-svg icon-class="jiantou" v-if="scope.item.menuIndex === 1" style="margin-left: 25px"></ns-icon-svg>-->
        <ns-icon-svg icon-class="jiantou" v-if="scope.item.menuMenusubname === 'guide'" style="margin-left: 25px"></ns-icon-svg>
      </template>
      <template slot="second-slot" slot-scope="scope">
        <span v-if="secondNavSlot(scope)">=></span>
      </template>
    </ns-sidebar>


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
  import virtual from './virtual';
  import menuSlotMixins from './menu-slot-mixins';
  import expand from '../../../../../expand';

  export default {
    name: 'ns-biz-sidebar',
    mixins: [menuSlotMixins],
    data() {
      return {
        sidebarType: 'collapse', //bubble,collapse
        jumpByNavEmpty: true,
        keyRefer: keyRefer,
        menuSlotProps: null,
      };
    },
    computed: {
      ...mapGetters(['sideMenu']),
      //当前路由信息
      currentRoute() {
        return this.$route;
      },
      menuData() {
        try {
          //为适应暂时的多级菜单 - 增加虚拟节点处理
          return virtual(this.sideMenu);
        }
        catch (e) {
          console.error('【 NEAP-ERROR 】Failed to generate nav menu data ');
          return [];
        }
      },
    },
    methods: {
      navClick(parame, fn) {
        expand.layout.sidebar.jump(parame, fn);
      },

      /**
       * first nav click handle
       * @param firstItem
       * @param firstIndex
       */
      firstNavClick(firstItem, firstIndex) {

        this.menuSlotProps = {
          firstItem,
          firstIndex,
          level: 1,
        };

        console.log(firstItem, firstIndex);
        console.log(this.currentRoute);

        if (firstItem[keyRefer.children].length) return;

        this.navClick(
          { firstItem, firstIndex, level: 1 },
          this.judgeAndJump,
        );

      },


      /**
       * first nav click handle
       * @param firstItem
       * @param secondItem
       * @param firstIndex
       * @param secondIndex
       */
      secondNavClick(firstItem, secondItem, firstIndex, secondIndex) {

        console.log(firstItem, secondItem, firstIndex, secondIndex);
        console.log(this.currentRoute);

        this.menuSlotProps = {
          firstItem,
          secondItem,
          firstIndex,
          secondIndex,
          level: 2,
        };

        this.navClick(
          { firstItem, firstIndex, secondItem, secondIndex, level: 2 },
          this.judgeAndJump,
        );

      },

      /**
       * judege and router jump
       */
      judgeAndJump(firstItem, secondItem) {
        if (!firstItem) return;

        const pathKey = this.keyRefer.menuRouter;
        const targetName = secondItem ? secondItem[pathKey] : firstItem[pathKey];

        // 非当前页点击
        if (this.currentRoute.name !== targetName) {
          //菜单栏 - 跳转目标页面并清除目标页的缓存
          this.$router.push({ name: targetName, params: { noRefresh: false } }); //jump
        }
      },

      secondNavSlot(scope) {
        const firstitem = scope.item.firstitem;
        const seconditem = scope.item.seconditem;
        if (!firstitem && !firstitem.childMenus && !firstitem.childMenus.length) {
          return false;
        }
        return firstitem.menuIndex === 3 && seconditem.menuIndex === 1;
      },
      /**
       * nav mouse event
       * @param index
       * @param item
       */
      mouseEnter(index, item) {
        // console.log('mouseEvent-mouseEvent');
        // console.log(index, item);
      },
    },
    created() {
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
