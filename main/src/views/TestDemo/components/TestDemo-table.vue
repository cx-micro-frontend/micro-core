<template>
  <el-table
    :data="tableData"
    border
    highlight-current-row
    height="500"
    max-height="500"
    style="width: 100%"
  >
    <el-table-column
      type="selection"
      min-width="55"
      fixed="left"
      align="center"
    >
    </el-table-column>

    <el-table-column
      v-for="(item, index) in tableHead" :key="index"
      :label="item.resourcecolumnName"
      :min-width="item.resourcecolumnWidth"
      :align="item.resourcecolumnAlign"
      resizable
      :class-name="`head-${item.resourcecolumnCode}`"
    >
      <template slot-scope="scope">
        <span>{{ scope.row[item.resourcecolumnCode] }}</span>
        <!--<el-popover trigger="hover" placement="top">-->
        <!--<p>{{item.resourcecolumnName}}: {{ scope.row[item.resourcecolumnCode] }}</p>-->
        <!--<div slot="reference" class="name-wrapper">-->
        <!--<el-tag size="medium">{{ scope.row[item.resourcecolumnCode] }}</el-tag>-->
        <!--</div>-->
        <!--</el-popover>-->
      </template>
    </el-table-column>

    <el-table-column label="操作" min-width="150" fixed="right" align="center">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑
        </el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除
        </el-button>
      </template>
    </el-table-column>

  </el-table>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: {
      tableHead: {type: Array},
      tableData: {type: Array}
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>
