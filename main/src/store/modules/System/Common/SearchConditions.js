const baseConditions = {
  companyId: '', //公司id
  departmentId: '', //部门id
  organizationId: '',
  dictionaryitemDictionaryId: '',
  filterList: [], //条件
  pageNum: 1, //当前页数
  pageSize: 10, //每页显示条目个数
  orderBy: '', //排序：升序还是降序
  orderFieldName: '', //排序：字段名
  mainSearch: '', //输入框值
  filterConditions: [], //筛选器记录的条件
  otherConditions: {},
  size: '',
};

const SearchConditions = {
  state: {
    //search criteria
    conditions: {},
  },
  mutations: {
    SET_SEARCG_CONDITIONS: (state, ID) => {
      if (!ID) {
        return false;
      }
      if (state.conditions.hasOwnProperty(ID)) {
        return false;
      }
      state.conditions[ID] = JSON.parse(JSON.stringify(baseConditions));
    },

    EMPTY_SEARCH_CONDITIONS: (state, ID) => {
      console.log(ID, 'empty')
      if(state.conditions[ID]){
        delete state.conditions[ID]
      }
    },
  },
  actions: {
    setSearchConditions({commit}, ID) {
      commit('SET_SEARCG_CONDITIONS', ID);
    },
    emptySearchConditions({commit}, ID) {
      commit('EMPTY_SEARCH_CONDITIONS',ID);
    },
  },
};

export default SearchConditions;
