<template>
  <div class="ns-menu-collapse">
    <ns-icon-class
      class="ns-header__text"
      :icon-class="isSideMenuCollapse ? 'CombinedShapeCopyx':'CombinedShapex' "
      @click="toggleCollapse"
    />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'ns-menu-collapse',
    data() {
      return {
        collapseState: null,
      };
    },
    computed: {
      ...mapGetters(['isSideMenuCollapse']),
    },
    methods: {

      /**
       * 切换菜单栏展开/收起 状态
       */
      toggleCollapse() {
        this.collapseState = !this.collapseState;

        this.$store.dispatch('updateTheme', {
          prop: 'isSideMenuCollapse',
          data: this.collapseState,
          syncRequest: true,
        });

        // this.$store.dispatch('toggleSideMenuCollapseState', this.collapseState);

      },
    },
    created() {
      this.collapseState = this.isSideMenuCollapse;
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../../../style/var";
  //展开按钮（底部)
  .ns-menu-collapse {
    height: $NEAP-header__height;
    line-height: $NEAP-header__height;
    i.ns-icon-class {
      font-size: 13px;
      cursor: pointer;
      color: #656882;
      vertical-align: 0.2em;
      padding: 0;
    }
  }
</style>
