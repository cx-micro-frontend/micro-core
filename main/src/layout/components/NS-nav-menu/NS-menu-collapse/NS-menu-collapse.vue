<template>
  <div class="ns-menu-collapse">
    <ns-icon-svg
      class="ns-header__text"
      :icon-class="sideMenuCollapse ? 'neap-zhankai':'neap-shouqi'"
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
      ...mapGetters(['sideMenuCollapse']),
    },
    methods: {

      /**
       * 切换菜单栏展开/收起 状态
       */
      toggleCollapse() {
        this.collapseState = !this.collapseState;

        this.$store.dispatch('updateTheme', {
          prop: 'sideMenuCollapse',
          data: this.collapseState,
          syncRequest: true,
        });

        // this.$store.dispatch('toggleSideMenuCollapseState', this.collapseState);

      },
    },
    created() {
      this.collapseState = this.sideMenuCollapse;
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
