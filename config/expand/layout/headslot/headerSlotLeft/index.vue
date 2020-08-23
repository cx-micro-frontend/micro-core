<template>
  <div class="headerSlotLeft clear" @click.stop>
    <el-popover
      v-model="visible"
      popper-class="header-popover"
      placement="top-start"
      width="260"
      trigger="click">
      <div class="fl" style="padding-left: 10px; cursor: pointer; color: #fff; " slot="reference">
        <ns-icon-svg icon-class="xiangmu"></ns-icon-svg>
        {{precinctObj.precinctName || '暂无选择小区'}}
        <i class="el-icon-caret-bottom" v-show="precinctObj.precinctName"></i>
      </div>
      <ns-biz-organize-object-tree-select
        v-model="organizationId"
        @change="changePrecincts"
      ></ns-biz-organize-object-tree-select>
    </el-popover>
  </div>
</template>

<script>
  import { getPrecincts } from './service/service';
  import { storageHandle } from '@NEAP/utils/storage/storage';

  export default {
    name: 'headerSlotLeft',
    props: {
      spaceName: { type: String, default: null },
    },
    data() {
      return {
        title: '',
        precinctObj: {},
        organizationId: '',
        option: [],
        visible: false
      };
    },
    created() {
      this.getPrecinctsData();
    },
    methods: {
      //项目修改
      changePrecincts(obj) {
        this.precinctObj = obj;
        this.$store.dispatch('setPrecinct', obj);
        this.NEAP_CACHE.delAllCache();
        this.NEAP_ROUTER.refreshAll();
        this.$nextTick(()=>{
          this.NEAP_CACHE.addCache(this.$route);
        })
      },

      //初始化
      getPrecinctsData() {
        if (this.$store.state.Precinct.precinctId) {
          this.organizationId = this.$store.state.Precinct.organizationId;
          this.precinctObj = this.$store.state.Precinct;
        } else {
          getPrecincts({ limit: 1 })
            .then(res => {
              if (res.resultData.length > 0) {
                let obj = res.resultData[0];
                obj.organizationId = obj.refOrganizationId;
                obj.organizationName = obj.refOrganizationName;
                this.changePrecincts(obj);
              }else{
                this.$store.dispatch('setPrecinct', {
                  precinctName: 'isWrong'
                });
              }
            })
            .catch(() => {
              this.$store.dispatch('setPrecinct', {
                precinctName: 'isWrong'
              });
            });
        }
      },
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  //下拉弹窗
  .header-popover.el-popover {
    max-height: 400px;
    padding: 10px;
    margin-top: 5px !important;
    //树
    .el-tree {
      overflow: auto; //内容溢出显示滚动条
      height: 300px;
      margin-top: 10px;
    }
  }

</style>
