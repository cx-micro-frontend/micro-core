// 图片预览
<template>
  <ns-dialog
    :visible.sync="showDialog"
    @close="close"
    type="autoHeight"
    size="large"
    title="图片预览"
  >
    <ns-carousel
      v-if="list.length > 0"
      style="margin: auto"
      ref="nsCarousel"
      :list="list"
      :autoplay="false"
      height="500px"
      @change="getChange"
      :initial-index="currentIndex"
    />
    <img v-else :src="single.src" alt="single.name">
  </ns-dialog>
</template>

<script>
  export default {
    name: 'preview-image-dialog',

    data() {
      return {
        showDialog: this.visible,
        list: [],
        single: {}
      }
    },

    props: {
      visible: Boolean,
      imgList: {
        type: Array,
        default: []
      },
      imgSingle: {
        type: Object,
        default: {}
      },
      currentIndex: {
        type: Number,
        default: 0
      }
    },

    methods: {
      close() {
        this.showDialog = false
        this.$emit('update:visible', this.showDialog)
      },
      getChange() {}
    },

    watch: {
      visible(val) {
        this.showDialog = val
        if (val) {
          if (this.imgList.length > 0) {
            this.list = this.imgList
          } else {
            this.single = this.imgSingle
          }
        } else {
          this.list = []
          this.single = {}
        }
      }
    }
  };
</script>
