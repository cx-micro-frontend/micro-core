import Vue from 'vue';
import expand from '../../../../expand';

export default {
  computed: {
    // hasFile() {
    //   return hasFile('@ROOT/config/expand', /\config.ts/);
    // },

    slotKey() {
      return `${this.slotType}Slot`;
    },

    header_expand() {
      return expand.layout.header;
    },

    header_slot_render() {
      return this.header_expand[this.slotKey];
    },

    header_slot_name() {
      return this.header_slot_render.name || null;
    },

    is_slot_render() {
      try {
        return Boolean(this.header_slot_name);
      } catch (e) {
        return false;
      }
    },
  },
  methods: {
    register() {
      if (this.is_slot_render) {
        Vue.component(this.markName(this.header_slot_name), this.header_slot_render);
      }
    },

    markName(name) {
      return 'neap-expand-' + name;
    },
  },

  created() {
    this.register();
  },
};
