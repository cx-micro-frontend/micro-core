import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['currentPageInfo']),
    Mix_funcId() {
      const funcId = this.currentPageInfo.funcId || null;
      //store funcId to common head for axios
      this.$store.dispatch('setFuncIdToHead', funcId);

      return funcId; //funcId
    },
  },
};
