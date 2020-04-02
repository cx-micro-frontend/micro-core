<template>
  <div>
    <span class="expand_style_title">外部扩展测试:</span>
    <ns-select :options="options" v-model="model" @change="selectChange"></ns-select>
  </div>
</template>

<script>
  export default {
    name: 'headsolt',
    data() {
      return {
        model: 'poject1',
        options: [
          { label: '项目1', value: 'poject1' },
          { label: '项目2', value: 'poject2' },
          { label: '项目3', value: 'poject3' },
          { label: '项目4', value: 'poject4' },
          { label: '项目5', value: 'poject5' },
        ],
      };
    },
    methods: {
      selectChange() {
        //切换项目后刷新所有页面-清除所有路由缓存
        this.NEAP_ROUTER.refreshAll();
      },
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
