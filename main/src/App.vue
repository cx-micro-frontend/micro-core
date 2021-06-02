/*
* @Author: Broccoli spring( 高仓雄 - gcx )
* @Date: 2020-05-13 10:49:36
* @Last Modified by:   Broccoli spring( 高仓雄 - gcx )
* @Last Modified time: 2020-05-13 10:49:36
*/

<template>
  <div id="app" :class="appName" :tag="appTag">
    <span class='gcxtest'>gcxtest-gcxtest-gcxtest-gcxtest</span>
    <router-view/>
  </div>
</template>

<script>
  import changeDocumentTitle from './mixins/Global/DocumentTitle';
  // import { resourcepath } from './utils/library/resource';

  const packageJson = require('@ROOT/package.json');

  export default {
    name: 'app',

    mixins: [changeDocumentTitle],

    created() {
      this.$store.dispatch('setBrowserInfo'); //设置浏览器信息
      this.$store.dispatch('setOSInfo'); //设置操作系统信息
    },
    computed: {
      projectName() {
        return packageJson.name;
      },
      routeName() {
        return `NEAP-route__${this.$route.name}`;
      },
      appName() {
        return `${this.projectName} ${this.routeName}`;
      },
      appTag() {
        return `${this.projectName}-${packageJson['neap-tag'] || 'normal'}`;
      }
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
