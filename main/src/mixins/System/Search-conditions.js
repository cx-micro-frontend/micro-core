import { baseConditions } from '../../store/modules/Request/SearchConditions';

export default {
  data() {
    return {
      Mix_searchConditions: {},
    };
  },

  methods: {
    NEAP_set_behavior() {
      try {
        //从本地存储中获取，手动触发 state 存储
        this.$store.dispatch('activeUserBehavior');

        const UserBehaviorData = this.$store.state.UserBehavior.behavior;

        const ps = UserBehaviorData[this.Mix_funcId].pageSize;

        this.Mix_searchConditions.pageSize = ps || baseConditions.pageSize;
      } catch (e) {
        this.Mix_searchConditions.pageSize = baseConditions.pageSize;
      }
    },
  },

  created() {
    if (typeof this.Mix_funcId !== 'string') {
      throw "The function of conditions handle - set only one params (funcId), ID must exist，it's String format, you better find it";
    }

    this.$store.dispatch('setSearchConditions', this.Mix_funcId);
    this.Mix_searchConditions = this.$store.state.Search.conditions[this.Mix_funcId];

    this.NEAP_set_behavior();
  },

  beforeDestroy() {
    this.Mix_searchConditions = null;
    this.$store.dispatch('emptySearchConditions', this.Mix_funcId);
  },
};
