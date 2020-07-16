<!--权限按钮操作区域-->
<template>
  <ul class="role-button-area clear">
    <li v-for="(item,index) in singleBtnList"
        :index="index"
        :key="index"
        class="role-button-area__part fl"
        v-if="singleBtnList && singleBtnList.length>0"
        v-show="!item.hide"
    >
      <ns-button :type="item.type" :disabled="item.disabled" :loading="item.loading" @click="singleClick(item)">
        <ns-icon-svg :icon-class="item.icon" v-if="item.icon"></ns-icon-svg>
        {{item.name}}
      </ns-button>
    </li>
    <li class="role-button-area__part fl" v-if="dropDownBtnList && dropDownBtnList.length>0">
      <el-dropdown
        size="small"
        trigger="click"
        @command="handleCommand"
      >
        <!--title click modules-->
        <ns-button class="el-dropdown-link" type="text">
          更多<i class="el-icon-caret-bottom el-icon--right"></i>
        </ns-button>

        <el-dropdown-menu slot="dropdown" class="more-role-button-menu">

          <el-dropdown-item
            v-for="(item, index) in dropDownBtnList"
            :key="index"
            :index="index"
            :command="item.code"
            :disabled="item.disabled"
            v-show="!item.hide"
          >
            {{ item.name }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'role-button-area',
    data() {
      return {
        singleBtnList: [],
        dropDownBtnList: [],
      };
    },
    props: {
      buttonList: {
        type: Array, default() {
          return [];
        },
      },
    },
    watch: {
      buttonList: {
        handler: function(newVal, oldVue) {
          this.singleBtnList = newVal.filter(item => item.btnType === 'single');
          this.dropDownBtnList = newVal.filter(item => item.btnType === 'dropDown');
        },
        immediate: true,
      },
    },
    methods: {
      singleClick(item, done) {
        console.log(item);
        this.$emit('command', item, done);
      },
      handleCommand(command) {

        const current = this.dropDownBtnList.filter(item => item.code === command)[0] || {};

        this.$emit('command', current);

      },
    },
    created() {

    },
    beforeDestroy() {
      this.singleBtnList = [];
      this.dropDownBtnList = [];
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "../../style/public";

  .role-button-area {
    vertical-align: middle;
    li.role-button-area__part {
      margin-left: 10px;

      &:first-child {
        margin-left: 0;
      }
      button {
        margin: 0;
      }

      //single button
      .el-button--text {
        padding-left: 0;
        padding-right: 0;
        margin-right: 0;
        box-sizing: border-box;
        border: none;
        span {
          font-size: 13px;
          line-height: 14px;
          color: #606266;
        }
        svg {
          padding: 0;
          color: $--color-primary-link;
        }
      }

      //dropdown button
      .el-dropdown {
        cursor: pointer;
        span.el-dropdown-selfdefine {
          display: inline-block;
          font-size: 13px;
          color: #606266;
          font-weight: 500;
          line-height: 32px;
          padding: 0;
          box-sizing: border-box;
        }
      }
    }
  }

  .el-dropdown-menu.more-role-button-menu {
    margin-top: 0;
  }

</style>
