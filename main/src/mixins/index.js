import funcId from './System/FuncId';
import roleButton from './System/Role-button/Role-button';
import searchConditions from './System/Search-conditions';

// import table from './system/Table';

import entrance from '../../injection/entrance/entrance_core'

export default {
  mixins: [funcId, roleButton, searchConditions,  ...entrance.mixins],
};

