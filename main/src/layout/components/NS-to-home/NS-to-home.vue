<template>
  <div
    class="ns-back-home"
    :class="[{'is-active':isCurrentActive}]"
    @click="toPortal"
  >
    <ns-icon-svg class="ns-header__text"
                 icon-class="neap-shouye"
    ></ns-icon-svg>
    <span class="ns-header__text">首页</span>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'ns-back-home',
    computed: {
      ...mapGetters(['initRoute']),
      isCurrentActive() {
        return this.$route.name === this.initRoute.name;
      },
    },
    methods: {
      toPortal() {
        /**
         * 1、当前页点击时，重定向跳转至门户首页并刷新当前页
         * 2、非当前页点击时，正常跳转 门户首页
         */
        if (this.isCurrentActive) {
          this.$router.replace({ path: '/NEAP_redirect' + this.$route.fullPath, params: { noRefresh: true, jumpMode: 'topMenu' } });
        }
        else {
          this.$router.push({ name: this.initRoute.name, params: { noRefresh: true, jumpMode: 'topMenu' } });
        }
      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .ns-back-home {
    /*&.is-active {*/
    /*background: rgba(0, 0, 0, .1);*/
    /*}*/
  }
</style>
