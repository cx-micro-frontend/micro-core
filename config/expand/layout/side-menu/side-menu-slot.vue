<template>
  <!--某些情况下，点击菜单栏，不跳转路由，弹出侧滑窗口-->
  <ns-biz-drawer-dialog
    :class="menuSlotClass"
    :visible.sync="dialogVisible"
    top="50px"
    :right="'calc(100% - 1100px)'"
    entr-position="left"
  >
    <!-- reporting - iframe  -->
    <component
      v-if="dialogVisible"
      :is="showDialogName"
      @change-route="closeSlipDialog"
    ></component>

  </ns-biz-drawer-dialog>
</template>

<script>
  import reporting from './components/reportGuide/reportGuide';
  import guide from './components/guide/guide';

  export default {
    name: 'side-menu-slot',
    components: {
      reporting,
      guide,
    },
    data() {
      return {
        dialogVisible: false,
        showDialogName: {},
      };
    },
    computed: {
      menuSlotClass() {
        return `side-menu-slot side-menu-slot-${this.showDialogName}`;
      },
    },
    props: {
      node: { type: Object },
    },
    watch: {
      'node.activeTime': {
        handler(val) {
          if (this.node) {
            let { data } = this.node || {};
            if (['reporting', 'guide'].contains((data || {}).menuMenusubname)) {
              this.dialogVisible = true;
              this.showDialogName = data.menuMenusubname;
            }
            else {
              this.resetState();//重置
            }
          }
        },
        deep: true,
      },

      '$route.meta.key': {
        handler(val) {
          this.resetState();//重置
        },
      },
    },

    methods: {
      closeSlipDialog(path) {
        this.resetState();//重置
        if (path) {
          this.$router.push(path);
        }
      },
      //重置状态
      resetState() {
        this.dialogVisible = false;
        this.showDialogName = null;
      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .side-menu-slot {
    ::v-deep .el-drawer__body {
      padding: 10px;
    }
  }
</style>
