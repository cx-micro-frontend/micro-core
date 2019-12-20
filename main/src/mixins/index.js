import FuncId from './System/FuncId';
import RoleButton from './System/Role-button';
import SearchConditions from './System/Search-conditions';

// import table from './system/Table';

import entrance from '../../../injection/entrance/entrance_core';

export default {
  mixins: [FuncId, RoleButton, SearchConditions, ...entrance.mixins],
};
