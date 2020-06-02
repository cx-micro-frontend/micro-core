import { baseConditions } from '../../store/modules/System/Request/SearchConditions';

export default {
  data() {
    return {
      Mix_searchConditions: {},
    };
  },

  created() {
    if (typeof this.Mix_funcId !== 'string') {
      throw "The function of conditions handle - set only one params (funcId), ID must exist，it's String format, you better find it";
    }

    this.$store.dispatch('setSearchConditions', this.Mix_funcId);
    this.Mix_searchConditions = this.$store.state.Search.conditions[this.Mix_funcId];

    try {
      console.log(6666666);
      console.log(6666666);

      const UserBehaviorData = this.$store.state.UserBehavior.behavior;

      console.log(UserBehaviorData);

      const ps = UserBehaviorData[this.Mix_funcId].pageSize;

      console.log(ps);
      console.log(6666666);
      console.log(6666666);

      this.Mix_searchConditions.pageSize = ps || baseConditions.pageSize;
    } catch (e) {
      this.Mix_searchConditions.pageSize = baseConditions.pageSize;
    }
  },

  beforeDestroy() {
    // alert(1111111111);
    this.Mix_searchConditions = null;
    this.$store.dispatch('emptySearchConditions', this.Mix_funcId);
  },
};
