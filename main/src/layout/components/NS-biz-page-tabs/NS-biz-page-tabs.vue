<!--page tabs in business-->
<template>
  <ns-page-tabs
    :data="visitedPages"
    :limit="limit"
    :activeRule="activeRule"
    @close-view-tabs="closeViewTabs"
  >
    <div slot='operate'>
      <el-dropdown @command="closeCommand">
        <span class="el-dropdown-link">
             <ns-icon-svg icon-class="drag" class="operate-slot-icon"></ns-icon-svg>
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
  import { addPageTabs } from '../../../router/promission/auxiliary';
  import { mapGetters } from 'vuex';

  export default {
    name: 'biz-page-tabs',
    data() {
      return {
        limit: 6,
      };
    },
    props: {},
    computed: {
      ...mapGetters(['visitedPages', 'currentVisitedPageTag', 'initRouter']),
      curPath() {
        return this.$route.path;
      },
    },
    methods: {
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
       * 关闭当前tabs
       * @param view
       */
      closeViewTabs(view) {
        // console.log('关闭单个-ViewTabs');
        // console.log(view);

        this.$store.dispatch('delVisitedPages', view).then(() => {
          /*
          * 判断删除的标签是否为当前页面标签：
          * 是：=>
          *      判断删除后的标签列表长度是否大于0？
          *             =>大于0则跳转到最后一个标签页面，等于0则回到主页
          *      判断当前页是否为设置初始页
          *             =>不跳转路由，直接忽略，不做操作
          * 否：=>
          *      直接跳回到设定的初始页面
          *
          */
          const l = this.visitedPages.length;

          console.log(l, this.curPath);

          if (this.curPath === view.path) {
            if (this.curPath === this.initRouter) {
              addPageTabs(this.$route.matched);
            }
            this.$router.push({ path: l > 0 ? this.visitedPages[l - 1].path : this.initRouter });
          }
        });
      },

      /**
       * 关闭所有tabs
       * @param views
       */
      closeAllViewTabs(views) {
        // console.log('关闭所有-ViewTabs');
        // console.log(views);

        this.$store.dispatch('delAllVisitedPages').then(() => {
          /*
         * 判断当前页是否为设置初始页：
         * 是：=>
         *      不跳转路由，想数据列表中插入设置初始页的信息
         * 否：=>
         *      直接跳回到设定的初始页面
         *
         */
          if (this.curPath === this.initRouter) {
            addPageTabs(this.$route.matched);
          }
          this.$router.push({ path: this.initRouter }); //回到主页

        });
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
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  .operate-slot {
    .el-dropdown-link.el-dropdown-selfdefine {
      padding: 0;
    }
  }
</style>
