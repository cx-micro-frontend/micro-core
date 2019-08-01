export default {
  data() {
    return {
      Mix_searchConditions: {},
    };
  },

  beforeDestroy() {
    this.Mix_searchConditions = null;
    this.$store.dispatch('emptySearchConditions', this.Mix_funcId);
    this.searchConditions = null;
  },

  created() {
    if (typeof this.Mix_funcId !== 'string') {
      throw 'The function of conditions handle - set only one params (funcId), ID must exist，it\'s String format, you better find it';
    }
    this.$store.dispatch('setSearchConditions', this.Mix_funcId);
    this.Mix_searchConditions = this.$store.state.Search.conditions[this.Mix_funcId];
  },
};
