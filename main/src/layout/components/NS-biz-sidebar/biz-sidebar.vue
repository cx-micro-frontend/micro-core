<template>
  <div class="ns-biz-sidebar">
    <ns-sidebar :type="sidebarType"
                :data="sideBarList"
                :jumpByNavEmpty="jumpByNavEmpty"
                :showTimeout="200"
                :hideTimeout="200"
                :keyRefer="keyRefer"
                hasVirtualNode
                @first-nav-click="firstNavClick"
                @second-nav-click="secondNavClick"
                @mouse-enter="mouseEnter">
      <template slot="first-slot" slot-scope="scope">
        <ns-icon-svg icon-class="jiantou" v-if="scope.item.menuIndex === 1" style="margin-left: 25px"></ns-icon-svg>
      </template>
      <template slot="second-slot" slot-scope="scope">
        <span v-if="secondNavSlot(scope)">=></span>
      </template>
    </ns-sidebar>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import keyRefer from './sidebar-keyRefer';

  export default {
    name: 'ns-biz-sidebar',
    props: {},
    data() {
      return {
        sidebarType: 'collapse', //bubble,collapse
        jumpByNavEmpty: true,
        keyRefer: keyRefer,
      };
    },
    computed: {
      ...mapGetters(['sideBarList']),
      //当前路由信息
      currentRoute() {
        return this.$route;
      },
    },
    methods: {

      /**
       * first nav click handle
       * @param firstItem
       * @param firstIndex
       */
      firstNavClick(firstItem, firstIndex) {

        console.log(firstItem, firstIndex);
        console.log(this.currentRoute);
        const currentPath = this.currentRoute.path;
        const targetPath = `/${firstItem[this.keyRefer.menuRouter]}`;
        console.log(currentPath);
        console.log(targetPath);
        console.log(currentPath === targetPath);

        this.judgeAndJump(currentPath, targetPath);

      },


      /**
       * first nav click handle
       * @param firstItem
       * @param secondItem
       * @param firstaIndex
       * @param secondIndex
       */
      secondNavClick(firstItem, secondItem, firstaIndex, secondIndex) {

        console.log(firstItem, secondItem, firstaIndex, secondIndex);
        console.log(this.currentRoute);

        const targetPath = '/' + firstItem[this.keyRefer.menuRouter] + '/' + secondItem[this.keyRefer.menuRouter];
        const currentPath = this.currentRoute.path;

        this.judgeAndJump(currentPath, targetPath);

      },

      /**
       * judege and router jump
       */
      judgeAndJump(currentPath, targetPath) {
        // 非当前页点击
        if (currentPath !== targetPath) {
          //菜单栏 - 跳转目标页面并清除目标页的缓存
          this.$router.push({ path: targetPath}); //jump
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
