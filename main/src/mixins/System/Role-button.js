import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['roleButtonAction', 'roleButtonForm', 'roleButtonGrid']),

    gridBtns() {
      return this.roleButtonGrid.map(({ name, code }) => ({ label: name, value: code }));
    },
  },
  created() {
    //get new role button-list
    this.$store.dispatch('getRoleButtonList', { funcId: this.Mix_funcId }).then(data => {
      if (!this.gridBtns || !this.gridBtns.length) return;
      if (this.tableLoader) {
        this.tableLoader(this.gridBtns);
      }
    });
  },
};
