<!--top nav menu - 顶部系统模块导航菜单-->
<template>
  <div class="ns-top-menu clear">
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


    <div class="ns-top-menu_module fl" v-for="(item, index) in topNavMenu" :key="index" @click="jumper(item)">
      <span>{{item.moduleName}}</span>
    </div>

  </div>

</template>

<script>
  import { mapGetters } from 'vuex';
  import { createTopMenu, filterModuleByToggle, createInitRoute } from '../../../../layout/components/NS-nav-menu/utils';
  import keyRefer from '../../NS-nav-menu/nav-menu-keyRefer';

  export default {
    name: 'ns-back-to-portal',
    computed: {
      ...mapGetters(['navMenu']),
      isActive() {
        return this.$route.name === 'portal';
      },
      topNavMenu() {
        return createTopMenu(this.navMenu);
      },
    },
    methods: {
      filterModuleByToggle,
      back() {
        this.$router.push({ name: 'portal' });
      },
      jumper(item) {
        //获取当前激活的系统模块菜单数据
        const currentModule = this.filterModuleByToggle(this.navMenu, item.moduleId);

        const children = currentModule[0][keyRefer['children']];

        //生成当前系统模块菜单的初始跳转路由
        const initRoute = createInitRoute(children);

        this.$store.dispatch('toggle_top_nav_menu', {
          currentModule,
          initRoute: initRoute,
        }).then(_ => {
          // alert(initRoute.name);
          this.$router.push({ name: initRoute.name, params: { noRefresh: true } });
        });


        // this.$store.dispatch('getUserBehavior');
        //
        // if (type === 'order') {
        //   this.$router.push({ name: 'systemOrgEmployee' });
        // }
        // else if (type === 'test') {
        //   this.$router.push({ name: 'systemOrgEmployee' });
        // }


        // console.log(this.$store.dispatch('getUserBehavior'));
        // 存pageSize
        // this.$store.dispatch('setUserBehavior', {
        //   funcID: 'gcxtest123' ,
        //   data:{
        //     pageSize: 100
        //   }
        // });
      },
    },
    created() {

    },
  };
</script>

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
        background: $back-color_active;
      }
      &.is-active {
        background: $back-color_active;
      }
    }
    //铃铛
    i.ns-icon-class {
      font-size: 22px;
      width: 20px;
      height: 20px;
      vertical-align: -0.1em;
      padding: 0;
      color: #222222;
    }
    span {
      font-weight: bold;
      color: #222222;
    }

  }
</style>
