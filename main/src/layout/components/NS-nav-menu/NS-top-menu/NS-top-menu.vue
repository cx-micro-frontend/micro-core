<!--top nav menu - 顶部系统模块导航菜单-->
<template>
  <div class="ns-top-menu clear" v-if="topNavMenuShow">
    <div :class="[
      'ns-top-menu_module back fl',
      {'is-active':isCurrentActive}
      ]" @click="back"
    >
      <ns-icon-class class="ns-header__text back-to-portal-icon"
                     icon-class="el-icon-s-home"
      ></ns-icon-class>
      <span class="ns-header__text">首页</span>
    </div>

    <el-popover
      v-model="model"
      class="fl"
      popper-class="ns-top-menu_popover"
      width="400"
      placement="bottom-start"
      trigger="click"
      :visible-arrow="false"
    >
      <div class="ns-top-menu_module" slot="reference">
        <ns-icon-svg class="ns-header__text" :icon-class="`module-wodeyingyong-${model?'dakai':'guanbi'}`"></ns-icon-svg>
        <span class="ns-header__text" style="margin-left: 2px">我的应用</span>
      </div>

      <div :class="['sub-system_module fl',{'active':currentModuleId === item.moduleId}]"
           v-for="(item, index) in topNavMenu" :key="index" @click="jumper(item,index)"
           @mouseenter="hoverIndex = index"
           @mouseleave="hoverIndex = null"
      >
        <!--<ns-icon-svg :icon-class="item.icon"></ns-icon-svg>-->
        <!--<ns-icon-svg icon-class="bug"></ns-icon-svg>-->
        <!--<ns-icon-svg icon-class="jichufuwu-2"></ns-icon-svg>-->

        <ns-icon-svg :icon-class="isActiveModule(item,index)?`${item.icon}_active`:item.icon"></ns-icon-svg>
        <p>{{item.moduleName}}</p>
      </div>

    </el-popover>

  </div>

</template>

<script>
  import { mapGetters } from 'vuex';
  import { createTopMenu } from '../../../../layout/components/NS-nav-menu/utils/dataHandle';
  import keyRefer from '../../NS-nav-menu/nav-menu-keyRefer';

  export default {
    name: 'ns-top-menu',
    data() {
      return {
        model: false,
        keyRefer,
        activeIndex: null,
        hoverIndex: null,
      };
    },
    computed: {
      ...mapGetters(['moduleMenu', 'currentPageInfo', 'initRoute']),
      isCurrentActive() {
        return this.$route.name === this.initRoute.name;
      },
      isPortalRoute() {
        return this.$route.name === 'portal';
      },
      topNavMenu() {
        return createTopMenu(this.moduleMenu);
      },
      topNavMenuShow() {
        if (!this.topNavMenu) return false;
        if (this.topNavMenu.length === 1 && this.isPortalRoute) {
          return true;
        }
        return this.topNavMenu.length > 1;

      },
      popoverDisplay() {
        return this.topNavMenu && this.topNavMenu.length > 3;
      },
      currentModuleId() {
        return this.currentPageInfo.moduleId;
      },
    },
    methods: {
      isActiveModule(item, index) {
        return this.currentModuleId === item.moduleId || this.hoverIndex === index;
      },
      back() {
        if (this.isCurrentActive) return;
        this.$router.push({ name: this.initRoute.name, params: { noRefresh: true, jumpMode: 'topMenu' } });
      },
      jumper(item, index) {
        this.activeIndex = index;
        if (this.currentModuleId === item.moduleId) return;

        if (item.moduleJumpPath) {
          window.open(item.moduleJumpPath);
          return;
        }


        /**
         * toggle module handle when route is change (two routes belonging to different modules)
         * 通过 moduleId 来切换 模块：
         *  - sideMenu - 切换侧边栏数据
         *  - initRoute - 切换当前侧边栏导航菜单的初始路由
         */
        this.$store.dispatch('toggle_module_handle', item.moduleId).then(navdata => {

          this.$router.push({ name: navdata.subInitRoute.name, params: { noRefresh: true, jumpMode: 'topMenu' } });

          this.model = false;

        }).catch(err => {
            console.warn(err);
          },
        );
      },

    },

    // created() {
    //   console.log(this.moduleMenu);
    // },
  };
</script>


<style rel="stylesheet/scss" lang="scss">
  .el-popover.ns-top-menu_popover {
    margin-top: 0;
    padding: 12px 12px 29px 29px;
    .sub-system_module {
      width: 83px;
      height: 83px;
      margin: 17px 17px 0 0;
      padding: 20px 0 0 0;
      border-radius: 3px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 2px 18px 0px rgba(183, 192, 215, 0.5);
      text-align: center;
      cursor: pointer;
      box-sizing: border-box;

      &:hover, &.active {
        background: #D62127;
        p {
          color: #fff;
        }
      }
      &:nth-child(4n+0) {
        margin-right: 0;
      }
      svg {
        width: 23px;
        height: 20px;
      }
      p {
        color: #000;
        font-size: 12px;
        line-height: 16px;
        margin-top: 11px;
      }
    }
  }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../../../style/var";

  $back-color_active: #f2f2f2;

  //顶部导航菜单
  .ns-top-menu {
    cursor: pointer;
    //各个模块
    .ns-top-menu_module {
      display: inline-block;
      padding: 0 5px;
      margin-right: $NEAP-module__gap;
      /*min-width: 80px;*/
      text-align: center;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        background: rgba(0, 0, 0, .1);
        span {
          font-weight: bold;
        }
      }
      &.is-active, &:hover {
        i, svg {
          transform: scale(1.1, 1.1);
        }
      }
    }

    svg.ns-icon-svg, i.ns-icon-class {
      vertical-align: -0.1em;
      padding: 0;
    }

    i.ns-icon-class {
      font-size: 20px;
      vertical-align: -0.2em;
    }

    span {
      font-size: 14px;
    }
  }
</style>
