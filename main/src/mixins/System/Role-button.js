/**
 * 权限按钮混入
 */
export default {
  data() {
    return {
      roleButtonList: [], //权限按钮（总）
      roleButtonAction: [], //操作权限按钮（总）
      roleButtonForm: [], //表单权限按钮（总）
      roleButtonGrid: [], //表格权限按钮（总）
    };
  },
  computed: {
    //表格权限按钮（经过过滤和处理）
    gridBtns() {
      if (!this.roleButtonGrid || !this.roleButtonGrid.length) return [];
      return this.roleButtonGrid
        .filter(({ hide }) => !hide)
        .map(({ name, code }) => ({ label: name, value: code }));
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
