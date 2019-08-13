<template>
  <div
    class="ns-text"
    :style="{ width: span_width, height: span_height, padding: '0 ' + gap + 'px' }"
  >
    <span
      class="ns-text-span"
      v-if="type === 'span'"
      :style="{ '-webkit-line-clamp': rows }"
      @click="click(cont)"
      >{{ cont }}
    </span>
    <a
      class="ns-text-action"
      v-if="type === 'action'"
      :style="{ '-webkit-line-clamp': rows }"
      @click="click(cont)"
      >{{ cont }}
    </a>
    <a
      class="ns-text-link"
      v-if="type === 'link'"
      :style="{ '-webkit-line-clamp': rows }"
      :href="dynamicSrc"
      >{{ cont }}
    </a>
  </div>
</template>
<script>
import utils from '@NEAP/utils';

export default {
  name: 'ns-text',
  data() {
    return {};
  },
  computed: {
    cont() {
      if (utils.judgeType(this.content) === 'object') {
        if (this.secondModelKey) {
          return this.content[this.secondModelKey];
        }
      } else {
        return this.content;
      }
    },
    span_width() {
      return this.autoForm.convertUnits(this.width, 'width');
    },
    span_height() {
      return parseInt(this.autoForm.convertUnits(this.height, 'height')) * this.rows + 'px';
    },
  },
  created() {},
  props: {
    type: { type: String, default: 'span' }, //text - type （ span / link ）
    content: { type: [Array, String, Object, Number, Boolean, Date] }, //content
    width: { type: [String, Number], default: '100%' },
    height: { type: [String, Number], default: '32px' },
    rows: { type: Number, default: 1 }, //text - row
    dynamicSrc: { type: String, default: 'javascript:void(0)' }, //text-link link src
    gap: { type: Number, default: 0 }, //text left/right padding
    secondModelKey: { type: String }, //second model-key
  },
  methods: {
    click(val) {
      this.$emit('click', val);
    },
  },
};
</script>
<style rel="stylesheet/scss" lang="scss">
.ns-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  box-sizing: border-box;
  .ns-text-span,
  .ns-text-action,
  .ns-text-link {
    width: 100%;
    height: 100%;
    font-size: inherit;
  }
  .ns-text-action,
  .ns-text-link {
    cursor: pointer;
  }
}
</style>
