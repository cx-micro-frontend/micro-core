<template>
  <el-table
    class="base-formtable"
    :class="{ 'error-table-head': errorHead }"
    :data="childTable"
    :showIndex="showIndex"
    :showSelect="showSelect"
    border
    fit
    highlight-current-row
    v-if="tableHead"
  >
    <!--circulation part-->
    <div v-for="(item, index) in createTableHead" :index="index" :key="index" v-if="tableHead">
      <!-- show index / selection -column -->
      <el-table-column
        v-if="arrContainObj(specialCol, item.type)"
        :type="item.type"
        :label="item.label"
        :align="item.align"
        :width="item.width"
        :fixed="item.fixed"
      ></el-table-column>
      <!-- help-column -->
      <el-table-column
        :type="item.type"
        :align="item.align"
        :label="item.label"
        :width="item.width"
        :fixed="item.fixed"
        v-if="item.type === 'normal'"
      >
        <template slot-scope="scope">
          <!--span-->
          <div class="ns-simple-item" v-if="item.formItemData[scope.$index].formType === 'text'">
            <ns-text
              :content="scope.row[item.key]"
              :width="item.width - cellpading * 2"
              :height="item.formItemData[scope.$index].height"
              :type="item.formItemData[scope.$index].type"
            ></ns-text>
          </div>
          <!--input-->
          <div
            :class="[
              'ns-simple-item',
              { 'ns-is-error': !customCheck(scope, item) },
              { validating: isValidating(scope, item) },
            ]"
            v-if="item.formItemData[scope.$index].formType === 'input'"
          >
            <ns-input
              v-model="scope.row[item.key]"
              :type="item.formItemData[scope.$index].type"
              :placeholder="item.formItemData[scope.$index].placeholder"
              :disabled="item.formItemData[scope.$index].disabled"
              :readonly="item.formItemData[scope.$index].readonly"
              :row="item.formItemData[scope.$index].row"
              :width="item.width - cellpading * 2"
              :height="item.formItemData[scope.$index].height"
              @change="change(scope, item)"
              @blur="blur(scope, item)"
            ></ns-input>
            <div class="el-form-item__error base-formtable__error">
              {{ item.formItemData[scope.$index].requiredMsg }}
            </div>
          </div>
          <!--select-->
          <div
            :class="[
              'ns-simple-item',
              { 'ns-is-error': !customCheck(scope, item) },
              { validating: isValidating(scope, item) },
            ]"
            v-if="item.formItemData[scope.$index].formType === 'select'"
          >
            <ns-select
              v-model="scope.row[item.key]"
              :type="item.formItemData[scope.$index].type"
              :placeholder="item.formItemData[scope.$index].placeholder"
              :disabled="item.formItemData[scope.$index].disabled"
              :readonly="item.formItemData[scope.$index].readonly"
              :min="item.formItemData[scope.$index].min"
              :max="item.formItemData[scope.$index].max"
              :row="item.formItemData[scope.$index].row"
              :items="item.formItemData[scope.$index].items"
              :width="item.width - cellpading * 2"
              :height="item.formItemData[scope.$index].height"
            ></ns-select>
            <div class="el-form-item__erro base-formtable__errorr">
              {{ item.formItemData[scope.$index].requiredMsg }}
            </div>
          </div>
        </template>
      </el-table-column>
    </div>
  </el-table>
</template>
<script>
import utils from '@NEAP/utils';
import validateRule from '@NEAP/utils/validate/validate-rule';

export default {
  name: 'base-formtable',
  data() {
    return {
      childTable: {}, //v-modle
      specialCol: ['index', 'selection'], //special-column
      handleCol: ['handle'], //handle-column
      cellpading: 18,
      errorHead: false
    };
  },
  computed: {
    //table-head-data handle
    getTableHead() {
      const tb = this.tableHead;
      if (typeof tb === 'string') {
        const head = this.autoForm.getTableHead(tb);
        if (utils.judgeType(head) === 'array') {
          return head;
        } else {
          this.errorHead = true;
          throw 'We can\'t find head-data for table, or the format of table-data must be Array ，you better find it';
        }
      } else if (utils.judgeType(tb) === 'array') {
        return tb;
      } else {
        this.errorHead = true;
        return [];
      }
    },
    //create new table-Head ( handle do some thing  / cover data )
    createTableHead() {
      const tableHead = this.getTableHead; //table-head data
      const TI = this.tableItems; //cover table-head-item (resultData => tableItems) form backend
      if (!TI || TI === [] || TI === {} || TI === '') {
        //have no table-head-item or it is not right format/value we need
        return tableHead;
      } else {
        if (TI && utils.isXType('array', TI)) {
          //check format => throw error
          function _formatErr(obj, key) {
            if (!obj.hasOwnProperty(key)) {
              throw(
                'the format of table-head-item data (resultData => tableItems) form backend is error, miss key ' +
                key +
                '， find it'
              );
            }
          }

          for (let i = 0; i < TI.length; i++) {
            _formatErr(TI[i], 'key'); //check
            const modelKey = TI[i].key; //model-key in table-head
            for (let j = 0; j < tableHead.length; j++) {
              if (modelKey === tableHead[j].key) {
                _formatErr(TI[i], 'formItemData'); //check
                const formItemData = TI[i].formItemData;
                for (let k = 0; k < formItemData.length; k++) {
                  _formatErr(formItemData[k], 'index'); //check
                  tableHead[j].formItemData[parseInt(formItemData[k].index)].items =
                    formItemData[k].items;
                }
              }
            }
          }
          return tableHead;
        } else {
          throw(
            'the format of table-head-item (resultData => tableItems) form backend should be array, find it'
          );
        }
      }
    },
  },
  model: {
    prop: 'fatherTable',
    event: 'change',
  },
  created() {
    //destroy customCheck list first all
    this.$store.dispatch('setCustomCheck', 'no-check');
    this.childTable = this.fatherTable;
  },
  watch: {
    childTable() {
      this.$emit('change', this.childTable);
    },
    fatherTable() {
      this.childTable = this.fatherTable;
    },
  },
  props: {
    fatherTable: Array, //father v-model value
    showIndex: { type: Boolean, default: false }, //is show index col
    showSelect: { type: Boolean, default: false }, //is show select col
    tableHead: { type: [Object, Array, String] }, //table-head
    tableItems: { type: [Object, Array], defalut: [] }, //table-components-items ( the components whitch need load items )
  },
  methods: {
    //judge array contain another Obj
    arrContainObj(arr, str) {
      return utils.arrContainObj(arr, str);
    },
    //get param (required,ruleType from formData / checkList form vuex / checkKey = item.key + '-' + scope.$index)
    getParam(scope, item) {
      const Param = {
        required: item.formItemData[scope.$index].required, //is required
        ruleType: item.formItemData[scope.$index].ruleType, //rule-type
        checkList: this.$store.state.Form.check.checkList, //check list
        checkKey: item.key + '-' + scope.$index, //check-key for form part in check list
      };
      return Param;
    },
    /**
     * custom check by call validate-rule fnction
     * @param scope
     * @param item
     * @returns {boolean}
     */
    customCheck(scope, item) {
      const checkList = this.getParam(scope, item).checkList;
      const checkKey = this.getParam(scope, item).checkKey;
      const val = scope.row[item.key];
      const ruleType = this.getParam(scope, item).ruleType;
      this.getParam(scope, item);
      return utils.arrContainObj(checkList, checkKey) ||
      utils.arrContainObj(checkList, 'all-check')
        ? this.getParam(scope, item).required
          ? val
            ? ruleType
              ? validateRule(val, ruleType)
                ? true
                : false
              : true
            : false
          : ruleType
            ? validateRule(val, ruleType)
              ? true
              : false
            : true
        : true;
    },
    /**
     * judge isValidating
     * @param scope
     * @param item
     * @returns {boolean}
     */
    isValidating(scope, item) {
      const checkList = this.getParam(scope, item).checkList;
      if (this.getParam(scope, item).required || this.getParam(scope, item).ruleType) {
        return utils.arrContainObj(checkList, this.getParam(scope, item).checkKey) ||
        utils.arrContainObj(checkList, 'all-check')
          ? true
          : false;
      } else {
        return false;
      }
    },

    //change function
    change(scope, item) {
      if (this.getParam(scope, item).required || this.getParam(scope, item).ruleType) {
        this.$store.dispatch('setCustomCheck', item.key + '-' + scope.$index);
      }
    },
    //blur function
    blur(scope, item) {
      if (this.getParam(scope, item).required || this.getParam(scope, item).ruleType) {
        this.$store.dispatch('setCustomCheck', item.key + '-' + scope.$index);
      }
    },
  },
  beforeDestroy: function() {
    this.$store.dispatch('setCustomCheck', 'no-check'); //destroy customCheck list
  },
};
</script>
<style rel="stylesheet/scss" lang="scss">
  .base-formtable {
    width: 100%;
    overflow: hidden;
    .el-table__body-wrapper {
      overflow: visible;
      .cell {
        overflow: visible;
      }
    }
    &.error-table-head {
      table {
        border-collapse: separate;
      }
    }
  }
</style>
