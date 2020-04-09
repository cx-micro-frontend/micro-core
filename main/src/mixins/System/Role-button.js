import { roleButtonList } from '../../service/System/Role/role-button';

export default {
  data() {
    return {
      roleButtonList: [],
      roleButtonAction: [],
      roleButtonForm: [],
      roleButtonGrid: [],
    };
  },
  computed: {
    gridBtns() {
      if (!this.roleButtonGrid || !this.roleButtonGrid.length) return [];
      return this.roleButtonGrid.map(({ name, code }) => ({ label: name, value: code }));
    },
  },
  created() {
    //get new role button-list
    this.$store
      .dispatch('RoleButton/getRoleButtonList', { funcId: this.Mix_funcId })
      .then(({ roleButtonList, roleButtonAction, roleButtonForm, roleButtonGrid }) => {
        this.roleButtonList = roleButtonList;
        this.roleButtonAction = roleButtonAction;
        this.roleButtonForm = roleButtonForm;
        this.roleButtonGrid = roleButtonGrid;

        if (!this.gridBtns || !this.gridBtns.length) return;
        if (this.tableLoader) {
          this.tableLoader(this.gridBtns);
        }
      });
  },
};
