import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['tableHead']),
  },
  beforeDestroy() {
    this.loadState = null;
    this.tableData = null;
    this.tableAction = null;
  },
};
