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
      <ns-button
        :type="singleBtnType(item,index)" :disabled="item.disabled" :loading="item.loading"
        @click="singleClick(item)">
        <ns-icon-svg :icon-class="item.icon" v-if="item.icon"></ns-icon-svg>
        {{item.name}}
      </ns-button>
    </li>
    <li class="role-button-area__part fl" v-if="dropDownBtnList && dropDownBtnList.length>0">
      <el-dropdown

        trigger="click"
        @command="handleCommand"
      >
        <!--title click modules-->
        <ns-button :type="isButtonStyle?'':'text'">
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
      isButtonStyle: { type: Boolean, default: true },
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

          // console.log(123123123123);
          // console.log(123123123123);
          // console.log(this.singleBtnList);
          // console.log(this.dropDownBtnList);
          // console.log(123123123123);
          // console.log(123123123123);

        },
        immediate: true,
      },
    },
    methods: {
      singleBtnType(item, index) {
        if (index === 0) return 'primary';
        return this.isButtonStyle ? '' : item.type;
      },
      singleClick(item, done) {
        // console.log(item);
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

  //ACTION - 权限按钮区域
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
      .el-button.ns-button {
        padding-left: 12px;
        padding-right: 12px;
        margin-right: 0;
        box-sizing: border-box;

        span {
          line-height: 14px;
          color: #606266;
        }
        svg {
          padding: 0;
          color: $--color-primary-link;
        }

        &.el-button--text {
          padding-left: 0;
          padding-right: 0;
          border: none;
        }
        &.el-button--primary {
          span, svg {
            color: #fff;
          }
        }
      }

      .el-dropdown-selfdefine {
        height: auto;
      }
    }
  }

  //更多 - 下拉 dropdown - menu
  .el-popper.el-dropdown-menu.more-role-button-menu {
    margin-top: 2px;
    padding: 8px 0;
    .el-dropdown-menu__item {
      font-size: 13px;
      color: #333;
      line-height: 32px;
    }
    //箭头
    .popper__arrow {
      display: none;
    }
  }

</style>
