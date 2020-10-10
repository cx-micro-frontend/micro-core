<!--top nav menu - 顶部系统模块导航菜单-->
<template>
  <div class="ns-top-menu">
    <el-popover
      v-model="model"
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

      <div v-for="(item, index) in topNavMenuData" :key="index" @click="jumper(item,index)"
           :class="['sub-system_module fl',{'active':currentModuleId === item.moduleId}]"
           :style="{backgroundColor:isActiveModule(item,index)?themeColor:'transparent'}"
           @mouseenter="hoverIndex = index"
           @mouseleave="hoverIndex = null"
      >
        <!--<ns-icon-svg :icon-class="item.icon"></ns-icon-svg>-->
        <!--<ns-icon-svg icon-class="bug"></ns-icon-svg>-->
        <!--<ns-icon-svg icon-class="jichufuwu-2"></ns-icon-svg>-->

        <ns-icon-svg :icon-class="isActiveModule(item,index)?`${item.icon}_active`:item.icon" v-if="item.icon"></ns-icon-svg>
        <ns-icon-svg :icon-class="isActiveModule(item,index)?`xiangmutuozhan_active`:xiangmutuozhan" v-else></ns-icon-svg>

        <p>{{item.moduleName}}</p>
      </div>

    </el-popover>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex';
  import keyRefer from '../../NS-nav-menu/nav-menu-keyRefer';

  export default {
    name: 'ns-top-menu',
    props: {
      topNavMenuData: {
        type: Array, default: () => {
          return [];
        },
      },
    },
    data() {
      return {
        model: false,
        keyRefer,
        activeIndex: null,
        hoverIndex: null,
      };
    },
    computed: {
      ...mapGetters(['currentPageInfo', 'initRoute', 'themeColor']),

      isCurrentActive() {
        return this.$route.name === this.initRoute.name;
      },

      popoverDisplay() {
        return this.topNavMenuData && this.topNavMenuData.length > 3;
      },

      currentModuleId() {
        return this.currentPageInfo.moduleId;
      },
    },
    methods: {
      isActiveModule(item, index) {
        return this.currentModuleId === item.moduleId || this.hoverIndex === index;
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
        /*background: #D62127;*/
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
  //顶部导航菜单
  .ns-top-menu {
    .ns-top-menu_module {

    }
  }
</style>
