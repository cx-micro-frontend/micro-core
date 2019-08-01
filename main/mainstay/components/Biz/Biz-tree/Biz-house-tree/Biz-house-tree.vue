<!--房产树-->
<template>
  <div class="biz-tree biz-house-tree clear" ref="biz-tree">
    <!--树搜索框-->
    <el-autocomplete
      class="fl"
      v-model="treeSearchInput"
      :fetch-suggestions="remoteSearch"
      value-key="houseFullName"
      placeholder="快速查询"
      suffix-icon="el-icon-search"
      clearable
      size="small"
      @select="houseTreeChange"
      @clear="houseTreeChange"
    ></el-autocomplete>
  </div>

</template>

<script>
  import {mapGetters} from 'vuex';
  import request from './mixins/request';
  import {isEmptyObject} from '../../../../utils';
  export default {
    name: 'Biz-house-tree',

    mixins: [request],

    props: {
      treeType: {
        type: String,
      },

      searchConditions: {
        type: Object,
        default() {
          return {};
        },
      },
    },

    data(){
      return {
        treeData: [],
        treeloading: false,

        treeSearchInput: '',//搜索
        searchTip: '搜索数据中...',
      }
    },

    computed: {
      ...mapGetters(['$store__houseTreeData']),
    },

    methods: {
      /**
       * init render tree
       */
      initRender() {
        console.log('$store__houseTreeData - 数据是否存在：');
        console.log(this.$store__houseTreeData);
        console.log(!isEmptyObject(this.$store__houseTreeData));

        if(!isEmptyObject(this.$store__orgTreeData)){
          this.treeData = this.$store__orgTreeData;
          this.treeSearchInput = this.$store.state.HouseTree.$store_searchQuery;
          this.nodeClick(this.$store.state.HouseTree.$store__currentTreeNode);
        }else{
          this.getTreeData(true)
        }
      }
    },

    created(){
      this.initRender();
    }
  };
</script>

<style scoped>

</style>
