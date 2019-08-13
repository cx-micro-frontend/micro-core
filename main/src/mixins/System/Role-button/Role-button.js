import {mapGetters} from 'vuex';
import {isEmptyObject} from '../../../utils/library/judge';
import filterkeyMap from '../../../config/Role-button/filterkey_map';
import filterListMmap from '../../../config/Role-button/filterList_map';


const filterGridBtn = (row, condition = []) => {
  let filterList = [];
  condition.forEach(f => {
    filterList = [...filterList, ...(filterkeyMap[f][row[f]] || [])];
  });
  return filterList;
};


export default {
  computed: {
    ...mapGetters(['roleButtonAction', 'roleButtonForm', 'roleButtonGrid']),

    gridBtns() {
      return this.roleButtonGrid.map(({name, code}) => ({label: name, value: code}));
    },
  },
  methods: {
    /**
     * 表格操作列权限按钮处理
     * @param tableData
     */
    tableBtnDistribute(tableData, target = []) {
      console.log('tableBtnDistribute-tableBtnDistribute');
      console.log(tableData);

      if (!tableData) return;
      if (isEmptyObject(tableData)) return;
      if (!tableData.list) return;

      tableData.list.forEach(item => {
        this.$set(item, 'fnsclick', this.gridBtns.filter((btn) => {
            return filterGridBtn(item, ['isActived']).indexOf(btn.value) === -1;
          }),
        );
      });

    },
  },
  created() {
    this.$store.dispatch('getRoleButtonList', {funcId: this.Mix_funcId}).then(
      data => {

        console.log('请求到权限按钮！！！！！！！！！！！');
        console.log(data);
        console.log(this.tableData);
        this.tableBtnDistribute(this.tableData);
      },
    ); //get new role button-list
  },
};
