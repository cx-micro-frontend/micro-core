<template>
  <div class="TestDemo">
    <div class="TestDemo-title">
      <h1>表格示例一</h1>
      <h2>总条数：{{data.tableData.length}}</h2>
    </div>
    <Table :tableData="data.tableData" :tableHead="data.tableHead"></Table>
  </div>
</template>

<script>
  import Table from './components/TestDemo-table';
  import data from './data1';

  export default {
    name: 'devTool',
    data() {
      return {
        data,
      };
    },
    components: { Table },
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .TestDemo {
    .TestDemo-title {
      text-align: center;
      h1 {
        color: #113d6f;
        margin: 20px 0 10px;
        font-weight: 600;
        font-size: 22px;
      }
      h2 {
        margin-bottom: 10px;
      }
    }

  }
</style>
