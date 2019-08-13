<template>
  <div id="importLog">

    <div class="import-log_items" v-loading="loading">
      <ns-timeline :options="axisData"
                   placement="top"
                   :keyRefer="keyRefer"
      >
        <template slot-scope="props">
          <div class="log-title">
            {{props.item.operateUserName}}
            &nbsp; &nbsp;&nbsp;
            {{props.item.operateType}}
          </div>
          <div class="log-detail"
               v-for="(log,i) in props.item.logRowData"
               :key="i"
          >
            <p class="hiddenClassName">{{ log }}</p>
            <a
              v-show="getByteLen(log) > 96"
              class="axis-detail cursor-pointer"
              @click="getAxisDetail(log)"
            >详情</a>
          </div>
        </template>
      </ns-timeline>
    </div>
    <div class="pagination clear" v-if="axisData.length > 0">
      <ns-pagination
        :current-page="pageNum"
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="total"
      >
      </ns-pagination>
    </div>
    <ns-dialog
      id="importLogDetail"
      title="日志详情"
      size="large"
      :visible.sync="dialogVisible.importLogDetailVisible.visible"
      v-if="dialogVisible.importLogDetailVisible.visible"
    >
      <div v-for="(item, index) in logDetails" :key="index">
        <div>{{ item }}</div>
      </div>
    </ns-dialog>
  </div>
</template>

<script>
  import { importLogFetch } from '../../service/packages/NS-biz-import-logs/NS-biz-import-logs';
  export default {
    name: 'ns-biz-import-logs',
    props: {
      scope: {
        type: Object,
        default:null
      },
      importData: {
        type: Object,
        default:null
      },
    },
    data() {
      return {
        axisData: [], //日志列表
        logDetails: [], //日志详情
        total: 0, //日志总数
        pageNum: 1, //当前页
        title: '',
        dialogVisible: { importLogDetailVisible: { visible: false } }, //日志详情弹框
        loading: true,
        loadingDetail: true,
        keyRefer: {
          timestamp: 'systemDate',
        },
      };
    },
    created() {
      if(this.importData){
        this.getImportLogData(this.importData);
      }
    },
    mounted() {},
    // watch: {
    //   'importData.id': {
    //     handler(val) {
    //       console.log("----------  importData  --------",val)
    //         alert(12121212121)
    //       if (val !== undefined) {
    //         this.getImportLogData(this.importData);
    //       }
    //     },
    //     immediate: true,
    //     deep: true,
    //   },
    //   'scope.id': {
    //     handler(val) {
    //       alert(6666666666666)
    //       console.log("----------    scope   ----------",val)
    //       if (val !== undefined) {
    //         this.getImportLog();
    //       }
    //     },
    //     immediate: true,
    //     deep: true,
    //   },
    // },
    methods: {
      /**
       * 获取字符长度
       */
      getByteLen(val) {
        let doubleByte = val.match(/[^\x00-\xff]/ig) || [];
        return val.length + doubleByte.length;
      },
      /**
       * get log list (日志列表)
       */
      getImportLogList(query) {
        importLogFetch(query)
          .then(res => {
            let resultData = res.resultData;
            this.axisData = resultData.list;
            this.axisData.map(item => {
              item.logRowData = item.operateContent.split(';');
            });
            this.total = resultData.total;
            this.loading = false;
          })
          .catch(res => {
            this.loading = false;
          });
      },
      /**
       * handle current change (切换下一页)
       * @param val
       */
      handleCurrentChange(val) {
        this.pageNum = val;
        if(this.importData){
          this.getImportLogData(this.importData);
        }
      },
      getImportLogData(obj) {
        this.getImportLogList({ houseId: this.importData.id, startPage: this.pageNum - 1 });
      },
      /**
       * get axis detail (日志详情)
       */
      getAxisDetail(item) {
        this.logDetails = [item];
        this.dialogVisible.importLogDetailVisible.visible = true;
      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  #importLog{
    padding: 20px 20px 0 40px;
    .log-title {
      font-weight: bold;
    }
    .log-detail {
      color: #4e515d;
      font-size: 12px;
      line-height: 20px;
    }
    .log-detail{
      display: flex;
      .hiddenClassName {
        width: 577px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .import-log_items{
      padding-bottom: 20px;
    }
    .ns-pagination{
      background: none;
      border: none;
      text-align: center;
    }
    .ns-pagination .el-pagination{
      float: none;
    }
  }
</style>
