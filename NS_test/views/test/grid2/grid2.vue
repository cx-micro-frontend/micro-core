<!--纯表格示例2-->
<template>
  <div class="win">
    <!-- 容器左边 -->
    <div class="ns-container">
      <h1>纯表格示例 - 2</h1>
      <vxe-grid
        border
        resizable
        height="600"
        :columns="tableColumn"
        :data="tableData"></vxe-grid>


      <div style="text-align: center; padding: 30px">
        <ns-button type="primary" @click="nextPage"> 当前页面2， 下个页面</ns-button>
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
        tableData: [],
        tableColumn: [
          {type: 'index', width: 50},
          {field: 'name', title: 'app.body.label.name'},
          {field: 'sex', title: 'app.body.label.sex', showHeaderOverflow: true},
          {field: 'address', title: 'Address', showOverflow: true}
        ]
      };
    },
    methods: {
      nextPage() {
        if (this.$route.name === 'gridDemo1') return
        this.$router.push('gridDemo1');
      },
    },


    created() {
      this.tableData = Array.from({length: 1300}, k => k).map((item, index) => {
        return {name: `gcx-${index}`, sex: `男-${index}`, address: "地址 地址地址 地址地址 址地址 址地址  址地址 址地址址地址址地址 地址0"}
      });
    },
  };
</script>
