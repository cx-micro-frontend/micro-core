import { Component, Mixins } from 'vue-property-decorator';


/**
 * 业务接口数据拓展 - 在全局请求获取部分业务配置数据
 */
@Component
export default class bizDataExpand extends Mixins() {
  created() {
    this.$store.dispatch('getBizExpandData');
  }
};
