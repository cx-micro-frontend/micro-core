<template>
  <div class="kkkkkkkkkk">
    <ns-slip-dialog
      class="slipDialog jjjjjjj"
      :visible.sync="showDialog"
      right="0"
      left="800px"
      top="90px"
      :appendToBody="false"
      domToClose="cacheDemo1"
      :beforeClose="close"
      style="z-index: 9999"
    >
      <h2 style="text-align: center;padding: 15px 0 ;margin: 0">侧滑窗口1</h2>
      <ns-select :options="[]"></ns-select>
      <ns-button @click="click">click</ns-button>
    </ns-slip-dialog>
  </div>

</template>

<script>
  export default {
    name: 'gcxtest',
    props: {
      visible: { type: Boolean, default: false },
    },
    data() {
      return {
        showDialog: this.visible,
      };
    },

    watch: {
      visible(val) {
        console.log(222222);
        console.log(val);
        this.showDialog = val;
      },
    },
    methods: {
      /**
       * 关闭
       */
      close() {
        this.showDialog = false;
        this.$emit('update:visible', false);
        this.$emit('close');
      },
      click(){
        this.$router.push('system/systemOrgEmployee')
      }
    },
  };
</script>

<style scoped>

</style>
