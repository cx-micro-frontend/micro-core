<!--多企业选择列表-->
<template>
  <div class="multiple-enterprise-list">
    <p class="enterprise-title">
      <slot name="title">选择企业点击登录</slot>
    </p>
    <ul class="enterprise-container">
      <li
        class=" enterprise-border clear"
        v-for="(item, i) in list"
        :key="i"
        @click="selectHandle(item,i)"
      >
        <span class="fl">{{ item.enterpriseName }}</span>
        <i class="el-icon-arrow-right fr"></i>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'multiple-enterprise-list',
    props: {
      list: {
        type: Array, default: () => [],
      },
    },
    methods: {
      /**
       * 选择企业登录
       * @param item
       * @param i
       */
      selectHandle(item, i) {
        this.$emit('select-handle', item, i);
      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../style/mixins/mixins";

  .multiple-enterprise-list {
    padding: 5px;

    .enterprise-title {
      font-size: 14px;
      color: #666;
      border-bottom: 1px solid #dcdfe6;
    }
    li, p {
      height: 40px;
      line-height: 40px;
    }
    @include scrollbarVisible();
    ul.enterprise-container {
      height: 120px;
      font-size: 16px;
      overflow: auto;
      margin: 10px 0;

      li {
        padding-left: 5px;
        box-sizing: border-box;
        border-bottom: 1px dotted #dcdfe6;
        cursor: pointer;

        span {
          color: #666;
        }
        i {
          padding: 12px 10px;
          font-weight: bold;
          color: #40a9f9;
        }

        &:hover {
          background-color: rgba(236, 245, 255, .3);
          i {
            color: #0a7af8;
          }
          span {
            color: #333;
          }
        }
      }
    }
  }
</style>
