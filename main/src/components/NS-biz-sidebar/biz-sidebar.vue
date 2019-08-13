<template>
  <div class="ns-biz-sidebar">
    <ns-sidebar :type="sidebarType"
                :data="sideBarList"
                :jumpByNavEmpty="jumpByNavEmpty"
                :showTimeout="200"
                :hideTimeout="200"
                :keyRefer="keyRefer"
                @first-nav-click="firstNavClick"
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
  import {mapGetters} from 'vuex';
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
      ...mapGetters(['sideBarList'])
    },
    methods: {

      /**
       * first nav click handle
       * @param index
       * @param item
       */
      firstNavClick(index, item) {
        console.log(index, item);
        // const router = item.menuMenusubname;
        // //目前暂时所有模块页面都要以及菜单下，点击跳转路由
        // if (router === "dashboard") return;
        // this.$router.push(item.menuMenusubname)
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
    }
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  .ns-biz-sidebar {
    height: 100%;
  }
</style>
