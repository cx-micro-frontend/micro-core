import { mapGetters } from 'vuex';
import { isEmptyObject } from '../../../utils/library/judge';

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
      console.log('请求到权限按钮！！！！！！！！！！！');
      console.log(data);
      console.log(this.tableData);

      if (!this.gridBtns || !this.gridBtns.length) return;
      if (this.tableBtnDistribute) {
        this.tableBtnDistribute(this.gridBtns);
      }
    });
  },
};
