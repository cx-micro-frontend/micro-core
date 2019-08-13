<template>
  <ns-slip-dialog
    class="biz-slip-dialog"
    :visible.sync="showDialog"
    :left="position.left"
    :right="position.right"
    :top="position.top"
    :bottom="position.bottom"
    appendToBody
    animation="fade-normal"
    :beforeClose="close"
  >

    <div class="slip-header" :style="{top:position.top}">
      <div class="slip-title">
        <span>|</span>{{title}}
      </div>
      <div class="slip-action">
        <slot name="btns"></slot>
      </div>
    </div>
    <div class="silp-container">
      <slot name="main"></slot>
    </div>
  </ns-slip-dialog>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'Biz-slip-dialog',

    props: {
      visible: {
        type: Boolean,
        default: false,
      },

      title: {
        type: String,
      },
    },

    data() {
      return {
        showDialog: this.visible,
      };
    },

    watch: {
      visible(val) {
        this.showDialog = val;
      },
    },

    computed: {
      ...mapGetters(['isInIframe']),

      position() {
        return {
          left: this.isInIframe ? '0px' : '50px',
          right: '0px',
          bottom: '0px',
          top: this.isInIframe ? '0px' : '50px',
        };
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
    },
  };
</script>


<style rel="stylesheet/scss" lang="scss">
  @import "./style/index";
</style>

