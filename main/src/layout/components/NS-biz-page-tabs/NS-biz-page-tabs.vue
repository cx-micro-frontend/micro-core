<!--page tabs in business-->
<template>
  <ns-page-tabs
    :data="visitedPages"
    :autoJump="false"
    :limit="tabLimit"
    :activeRule="activeRule"
    @click-view-tabs="clickViewTabs"
    @close-view-tabs="closeViewTabs"
  >
    <div slot='operate'>
      <el-dropdown @command="closeCommand">
        <span class="el-dropdown-link">
             <ns-icon-svg icon-class="biz-drag" class="operate-slot-icon"></ns-icon-svg>
        </span>
        <el-dropdown-menu slot="dropdown">

          <el-dropdown-item command="closeCurrent">关闭当前</el-dropdown-item>
          <el-dropdown-item command="closeOthers">关闭其他</el-dropdown-item>
          <el-dropdown-item command="closeAll">关闭全部</el-dropdown-item>

        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </ns-page-tabs>
</template>
<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'biz-page-tabs',
    data() {
      return {};
    },
    watch: {
      $route() {
        this.addViewTabs();
      },
    },
    computed: {
      ...mapGetters(['visitedPages', 'currentVisitedPageTag', 'initRouter']),
      curPath() {
        return this.$route.path;
      },
      tabLimit() {
        return this.$store.state.PageTabs.limit;
      },
    },
    methods: {

      addViewTabs() {
        const route = this.$route;
        const { name } = route;
        if (name) {
          this.$store.dispatch('addVisitedTab', {
            name: route.name,
            path: route.path,
            meta: route.meta,
          });
        }
      },


      /**
       * 点击当前tabs
       * @param view
       */
      clickViewTabs(view) {
        this.tabJumper(view.path);
      },

      /**
       * 关闭当前tabs
       * @param view
       */
      closeViewTabs(view) {
        this.$store.dispatch('delVisitedTab', view).then(({ visitedPages, cachedViews }) => {

          /*
          * 判断删除的标签是否为当前页面标签：
          * 是：=>
          *      判断删除后的标签列表长度是否大于0？
          *             =>大于0则跳转到前一个标签页面，等于0则回到初始页
          *      判断当前页是否为设置初始页且是唯一一个标签
          *             =>不跳转路由，直接忽略，不做操作
          * 否：=>
          *      直接跳回到设定的初始页面
          *
          */
          const l = visitedPages.length;

          console.log(l, this.curPath);

          if (this.curPath === view.path) {
            if (this.curPath === this.initRouter && !l) {

              //create a new tab （ init page )
              // this.addViewTabs();

              //插件方法 - 刷新当前页面
              this.NEAP_ROUTER.refresh(this);
            }
            else {
              this.tabJumper(l > 0 ? visitedPages[l - 1].path : this.initRouter);
            }
          }
        });
      },

      /**
       * 关闭所有tabs
       * @param views
       */
      closeAllViewTabs(views) {

        this.$store.dispatch('delAllVisitedPages').then(() => {

          this.$nextTick(
            () => {
              //清除所有缓存
              this.NEAP_ROUTER.refreshAll();
              //直接跳回到设定的初始页面, 且要刷新该页面
              this.tabJumper(this.initRouter, true);
            },
          );

        });
      },

      /**
       * tab Jumper
       * @param path
       * @param isRefresh
       * @returns {String}
       */
      tabJumper(path, isRefresh = false) {
        //in change tab case => we don't need to refresh page
        this.$router.push({ path: path, query: { noRefresh: !isRefresh } }); //回到主页
      },

      /**
       * close command - 下拉菜单关闭操作
       * @param command
       */
      closeCommand(command) {
        switch (command) {
          //关闭当前
          case  'closeCurrent':
            this.closeViewTabs(this.currentVisitedPageTag);
            break;
          //关闭其他(除当前页之外)
          case  'closeOthers':
            this.$store.dispatch('delOthersVisitedPages', this.currentVisitedPageTag);
            break;
          //关闭全部
          case  'closeAll':
            this.closeAllViewTabs();
            break;
          default:
            break;
        }
      },

      /**
       * 自定义 tabs 的 active 规则
       * @param path   各tabs path 属性
       * @returns {boolean}
       */
      activeRule(path) {
        return path === this.$route.path;
      },
    },
    mounted() {
      this.addViewTabs();
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  .operate-slot {
    .el-dropdown-link.el-dropdown-selfdefine {
      padding: 0;
    }
  }
</style>
