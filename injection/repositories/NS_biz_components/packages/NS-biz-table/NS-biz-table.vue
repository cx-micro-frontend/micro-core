<!--UI 组件库 - 业务 Table-->
<template>
  <div>
    <ns-table ref="biz-table"
              :data="data.list" :head="finalHead" :keyRefer="keyRefer" :height="height"
              :loadState="loadState"
              :is-form-table="isFormTable"
              :cellFifter="cellFifter"
              :showHeadOperation="showHeadOperation"
              :showSummary="showSummary"
              :rulesConfig="rulesConfig"
              @selection-change="selectionChange"
              @table-action="tableAction"
              @cell-action="cellAction"
              @cell-form-change="cellFormChange"
              @add-row="addRow"
              @delete-current-row="deleteCurrentRow"
              @refresh="refresh"
    ></ns-table>
    <ns-pagination
      class="biz-pagination"
      :total="data.total || 0"
      :pagerCount="pagerCount"
      :searchConditions="searchConditions"
      @size-change="sizeChange"
      @current-change="currentChange"
    ></ns-pagination>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {listColumnService} from '../../service/packages/NS-biz-table/NS-biz-table';
  import resizeHeight from './resize-height';
  import columnConfig from './column-template-config';
  import cellFifter from './cell-fifter';
  import rulesConfig from '@NEAP/utils/validate/rules-config';
  import keyRefer from './keyRefer';


  export default {
    name: 'biz-table',
    mixins: [resizeHeight],
    data() {
      return {
        keyRefer,
        cellFifter,
        rulesConfig,
        tableHead: [],
      };
    },
    props: {
      data: {
        type: Object,
        default: () => ({}),
      },
      localHead: {type: Array, request: false}, //本地表头数据
      //表格数据加载状态
      loadState: {
        type: Object, default() {
          return {
            data: false,
            head: false,
          };
        },
      },
      searchConditions: {type: Object},//筛选条件
      isFormTable: {type: Boolean, default: false},//是否是表单表格
      //第一列固定列类型（非自动表头配置）
      firstColType: {type: [String, null], default: 'selection', validator: t => ['index', 'selection', 'radio', null].indexOf(t) > -1},
      hasActionCol: {type: Boolean, default: true},//是否有操作列
      showHeadOperation: {type: Boolean, default: true},//表头设置操作模块开关
      showAddRowOperation: {type: Boolean, default: false},//表头设置 新增行操作模块开关
      showSummary: {type: Boolean, default: true},//是否显示合计行
      pagerCount: {default: 7},//页码按钮的数量，当总页数超过该值时会折叠
    },
    computed: {
      ...mapGetters(['funcId']),
      isRender() {
        return this.loadState.data && this.loadState.head;
      },
      finalHead() {
        return [
          ...(this.firstColType ? [columnConfig[this.firstColType]] : []),
          ...(this.localHead ? this.localHead : this.tableHead),
          ...(this.hasActionCol ? [columnConfig['action']] : []),
          ...(this.showAddRowOperation ? [columnConfig['add-row']] : []),

        ].map(item => {
          //表格配置a标签
          let linkCode = ['precinctName'];
          if (linkCode.indexOf(item.resourcecolumnCode) > -1) {
            item[this.keyRefer['head']['cell-Config']] = {
              switchType: true,
              type: 'link',
              decimal: null,
              disabled: false,
              maxlength: null,
              max: 0,
              min: 0,
              placeHolder: null,
              require: false,
              validateRule: null,
            };
          }
          item.resourcecolumnHidden = item.resourcecolumnHidden === '1' ? true : false;
          return item;
        });
      },
    },

    methods: {
      /**
       * get table head data
       */
      getTableHead() {
        if (this.localHead) {
          this.tableHead = this.localHead;
          this.loadState.head = true;
        }
        else {
          listColumnService({funcId: this.funcId}).then(res => {
            this.tableHead = res.resultData.columns || [];

            this.$store.dispatch('setaTableHead', this.tableHead);//store head data

            // this.searchConditions.header =  this.tableHead;//为筛选器需要的表头数据赋值

            console.log('请求到的表头数据：');
            console.log(this.tableHead);
            this.loadState.head = true;
          }).catch(() => {
            this.loadState.head = true;
          });
        }
      },


      /**
       * 分页器当前显示条数改变
       * @param val
       */
      sizeChange(val) {
        console.log('size-change', val);
        this.$emit('reload');
      },
      /**
       * 分页器当前页切换
       * @param val
       */
      currentChange(val) {
        console.log('current-page-change', val);
        this.$emit('reload');
      },

      selectionChange(row, index) {
        this.$emit('selection-change', row, index);
      },
      tableAction(info, scope) {
        this.$emit('table-action', info, scope);
      },
      cellAction(scope, item) {
        console.log('表格单元格点击行为事件');
        console.log(scope, item);
        this.$emit('cell-action', scope, item);
      },
      cellFormChange(value, param) {
        this.$emit('cell-form-change', value, param);
      },
      /**
       * add row to grid
       */
      addRow() {
        this.$emit('add-row');
      },
      /**
       * delete current row
       * @param index
       * @param row
       */
      deleteCurrentRow(index, row) {
        this.$emit('delete-current-row', index, row);
      },
      checkAll() {
        this.$refs['biz-table'].checkAll();
      },
      resetCheck() {
        this.$refs['biz-table'].resetCheck();
      },
      refresh() {
        this.$emit('reload');
      },
      /**
       * reset select state
       * @param type  - selection / radio
       */
      resetSelectState(type) {
        this.$refs['biz-table'].resetSelectState(type);
      },
      getResponseColumn() {
        return this.tableHead || [];
      },
      getAllColumn() {
        return this.finalHead || [];
      }
    },

    created() {
      this.getTableHead();
    },

    beforeDestroy() {
      this.tableHead = null;
      this.keyRefer = null;
      this.rulesConfig = null;
      this.cellFifter = null;
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "style/index";
</style>
