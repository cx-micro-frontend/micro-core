<!--表格结合标准页-->
<template>
  <div class="win">
    <!-- 容器左边 -->
    <div class="ns-container">
      <!-- 检查树 -->
      <ns-drawer class="ns-container-left" speed="160ms">
        <ns-biz-organize-tree
          :funcId="Mix_funcId"
          draggable
          showFunction
          :searchConditions="Mix_searchConditions"
        ></ns-biz-organize-tree>
      </ns-drawer>
      <!-- 容器右边 -->
      <div class="ns-container-right">
        <!-- 操作模块 -->
        <div class="action-module" style="overflow: hidden">
          <!-- 删选器 -->
          <ns-biz-search-conditions
            :funcId="Mix_funcId"
            :searchConditions="Mix_searchConditions"
          >
            <!--action - 权限按钮操作区域-->
            <ns-biz-role-button-area :buttonList="roleButtonAction" @command="roleButtonCommand" class="fr"></ns-biz-role-button-area>
          </ns-biz-search-conditions>
        </div>


        <!--<Table :tableData="data.tableData" :tableHead="data.tableHead"></Table>-->

        <h1>表格结合标准页 - 1</h1>
        <vxe-grid
          border
          resizable
          height="600"
          :columns="tableColumn"
          :data="tableData"></vxe-grid>


        <div style="text-align: center; padding: 30px">
          <ns-button type="primary" @click="nextPage"> 当前页面1，下个页面</ns-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Mixin from '@NEAP/mixins';

  export default {
    name: 'checktargetList',


    pageType: 'basic',

    mixins: [Mixin],

    data() {
      return {
        addEditTargetDialogType: 'add',
        showDialog: {
          addEditTargetDialog: false,
        },
        loadState: { // 表格数据加载状态
          data: true,
          head: false,
        },
        rowData: {},
        condition: {},
        targetObject: {
          targetId: null,
          targetFullName: '',
        },
        selectOptions: {
          deilverType: [],
          checkType: [],
          problemLevel: [],
          problemType: [],
        },
        targetIdIndex: 0, // 获取targetId在filterList中的序号
        isRoot: false, // 是否为根据节点
        fetchSelectParamsList: ['deilverType', 'checkType', 'problemLevel', 'problemType'], // 存储请求下拉框参数数据
        tableData: [],
        tableColumn: [
          {type: 'index', width: 50},
          {field: 'name', title: 'app.body.label.name'},
          {field: 'sex', title: 'app.body.label.sex', showHeaderOverflow: true},
          {field: 'address', title: 'Address', showOverflow: true}
        ]
      };
    },

    computed: {},

    methods: {
      roleButtonCommand() {
      },
      nextPage() {
        if (this.$route.name === 'gridDemo2') return;
        this.$router.push('gridDemo2');
      },
    },
    created() {
      this.tableData = Array.from({length: 1100}, k => k).map((item, index) => {
        return {name: `zll-${index}`, sex: `女-${index}`, address: "地址 地址地址 地址地址 址地址 址地址  址地址 址地址址地址址地址 地址0"}
      });
    },
    mounted() {

    }
  };
</script>
