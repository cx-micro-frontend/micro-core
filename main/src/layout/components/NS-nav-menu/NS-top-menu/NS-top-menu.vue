<!--top nav menu - 顶部系统模块导航菜单-->
<template>
  <div class="ns-top-menu clear" v-if="topNavMenu && topNavMenu.length>1">
    <div :class="[
      'ns-top-menu_module back fl',
      {'is-active':isActive}
      ]" @click="back"
    >
      <ns-icon-class class="back-to-portal-icon"
                     icon-class="el-icon-s-home"
      ></ns-icon-class>
      <span>首页</span>
    </div>

    <el-popover
      v-model="model"
      popper-class="ns-top-menu_popover"
      width="380"
      placement="bottom"
      trigger="click"
      v-if="popoverDisplay"
    >
      <div class="ns-top-menu_module" slot="reference">
        <ns-icon-svg :icon-class="`module-wodeyingyong-${model?'dakai':'guanbi'}`"></ns-icon-svg>
        <span style="margin-left: 2px">我的应用</span>
      </div>

      <div class="sub-system_module fl" v-for="(item, index) in topNavMenu" :key="index" @click="jumper(item)">
        <ns-icon-svg :icon-class="item.icon"></ns-icon-svg>
        <p>{{item.moduleName}}</p>
      </div>

    </el-popover>

    <div class="fl clear" v-if="!popoverDisplay">
      <div class="ns-top-menu_module fl" v-for="(item, index) in topNavMenu" :key="index" @click="jumper(item)">
        <span>{{item.moduleName}}</span>
      </div>
    </div>

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
        currentModuleId: null,
        portalName: 'portal',
        keyRefer,
      };
    },
    created() {
      console.log(1312312312);
      console.log(1312312312);
      console.log(1312312312);
      console.log(this.moduleMenu);
      console.log(1312312312);
      console.log(1312312312);
    },
    computed: {
      ...mapGetters(['moduleMenu', 'initRoute', 'moduleId']),
      isActive() {
        return this.$route.name === this.portalName;
      },
      topNavMenu() {
        return createTopMenu(this.moduleMenu);
      },
      popoverDisplay() {
        return this.topNavMenu && this.topNavMenu.length > 3;
      },
    },
    watch: {
      moduleId: {
        handler: function(val) {

        },
        immediate: true,
      },
    },
    methods: {
      back() {
        if (this.isActive) return;
        this.currentModuleId = this.portalName;
        this.$router.push({ name: this.portalName, params: { noRefresh: true, jumpMode: 'topMenu' } });
      },
      jumper(item) {
        if (this.currentModuleId === item.moduleId) return;

        /**
         * toggle module handle when route is change (two routes belonging to different modules)
         * 通过 moduleId 来切换 模块：
         *  - sideMenu - 切换侧边栏数据
         *  - initRoute - 切换当前侧边栏导航菜单的初始路由
         */
        this.$store.dispatch('toggle_module_handle', item.moduleId).then(navdata => {

          this.$router.push({ name: navdata.initRoute.name, params: { noRefresh: true, jumpMode: 'topMenu' } });

          this.currentModuleId = item.moduleId;
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
    padding: 15px;
    .sub-system_module {
      width: 60px;
      text-align: center;
      margin: 5px 20px 5px 0;
      cursor: pointer;
      &:nth-child(5n+0) {
        margin-right: 0;
      }
      svg {
        width: 44px;
        height: 44px;
      }
      p {
        color: #666;
      }
    }
  }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
  $back-color_active: #f2f2f2;
  .ns-top-menu {
    cursor: pointer;
    margin: 0 5px;
    .ns-top-menu_module {
      display: inline-block;
      padding: 0 5px;
      margin-right: 5px;
      /*min-width: 80px;*/
      text-align: center;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        background: transparent;
      }
      &.is-active {
        background: transparent;
      }
    }

    svg.ns-icon-svg, i.ns-icon-class {
      vertical-align: -0.1em;
      padding: 0;
      color: #fff;
    }
    i.ns-icon-class {
      font-size: 20px;
      vertical-align: -0.2em;
    }

    span {
      font-size: 14px;
      font-weight: bold;
      color: #fff;
    }
  }
</style>
