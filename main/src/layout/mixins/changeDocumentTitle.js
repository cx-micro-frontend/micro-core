import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['operatorInfo']),
    operatorName() {
      return this.operatorInfo.operatorName;
    },
  },
  watch: {
    operatorName: {
      handler: function(val) {
        document.title = val;
      },
      immediate: true,
    },
  },
};
