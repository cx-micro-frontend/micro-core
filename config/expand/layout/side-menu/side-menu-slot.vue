<template>
  <!--某些情况下，点击菜单栏，不跳转路由，弹出侧滑窗口-->
  <ns-biz-drawer-dialog
    :visible.sync="dialogVisible"
    :right="'calc(100% - 1100px)'"
    top="50px"
    entr-position="left"
  >
    <div v-if="dialogVisible">
      <h1>我是侧滑！</h1>
      <h2>{{node.label}}</h2>
      <h2>{{node.data.menuMenusubname}}</h2>
      <h2>{{node.data.level}}</h2>
    </div>
  </ns-biz-drawer-dialog>
</template>

<script>
  export default {
    name: 'side-menu-slot',
    data() {
      return {
        dialogVisible: false,
      };
    },
    props: {
      node: { type: Object },
    },
    computed: {
      routeName() {
        return this.node.data.menuMenusubname;
      },
    },
    watch: {
      node(val) {
        if (val) {
          if (this.routeName === 'guide') {
            this.dialogVisible = true;
          }
        }
      },
    },
  };
</script>

<style scoped>

</style>
