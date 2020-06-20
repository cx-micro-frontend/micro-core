import Vue from 'vue';
import expand from '../../../../../expand';

export default {
  computed: {
    side_slot_expand() {
      return expand.layout.sidebar.slotComponent;
    },

    side_slot_name() {
      return this.side_slot_expand.name || null;
    },

    is_slot_render() {
      try {
        return Boolean(this.side_slot_name);
      } catch (e) {
        return false;
      }
    },
  },
  methods: {
    register() {
      if (this.is_slot_render) {
        Vue.component(this.markName(this.side_slot_name), this.side_slot_expand);
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
