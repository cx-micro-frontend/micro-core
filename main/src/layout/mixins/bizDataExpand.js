/**
 * 业务接口数据拓展 - 在全局请求获取部分业务配置数据
 */
export default {
  created() {
    this.$store.dispatch('getBizExpandData');
  },
};
