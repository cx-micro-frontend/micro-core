<template>
  <div
    class="ns-back-home"
    :class="[{'is-active':isCurrentActive}]"
    @click="back"
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
      back() {
        if (this.isCurrentActive) return;
        this.$router.push({ name: this.initRoute.name, params: { noRefresh: true, jumpMode: 'topMenu' } });
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
