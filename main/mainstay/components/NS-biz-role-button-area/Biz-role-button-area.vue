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
      <ns-button :type="item.type" :disabled="item.disabled" @click="singleClick(item)">
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
        <ns-button type="text" class="el-dropdown-link">
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
  import iconMap from './iconMap';

  export default {
    name: 'role-button-area',
    props: {
      buttonList: {
        type: Array, default() {
          return [];
        },
      },
    },
    computed: {
      singleBtnList() {
        return this.buttonList.filter(item => item.btnType === 'single');
      },
      dropDownBtnList() {
        return this.buttonList.filter(item => item.btnType === 'dropDown');
      },

    },
    methods: {
      singleClick(item) {
        console.log(item);
        this.$emit('command', item);
      },
      handleCommand(command) {

        const current = this.dropDownBtnList.filter(item => item.code === command)[0] || {};



        this.$emit('command', current);

      },
      iconTransform(item) {
        try {
          return iconMap.filter(i => i.name === item.name)[0].icon;
        }
        catch (e) {
          return '';
        }

      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss">
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
          color: #409eff;
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
