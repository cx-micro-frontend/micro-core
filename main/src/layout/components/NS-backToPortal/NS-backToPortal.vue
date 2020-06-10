<template>
  <div :class="[
  'ns-back-to-portal',
  {'is-active':isActive}
  ]">
    <ns-icon-class class="back-to-portal-icon"
                   icon-class="el-icon-s-home"
                   @click="back"
    ></ns-icon-class>

    <span>首页</span>
  </div>

</template>

<script>
  export default {
    name: 'ns-back-to-portal',
    computed: {
      isActive() {
        return this.$route.name === 'portal';
      },
    },
    methods: {
      back() {
        this.$router.push({ path: '/portal' });
      },
    },
    created() {

    },
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  $back-color_active:#f2f2f2;
  .ns-back-to-portal {
    cursor: pointer;
    padding: 0 5px;
    &:hover {
      background: $back-color_active;
    }
    &.is-active {
      background: $back-color_active;
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
