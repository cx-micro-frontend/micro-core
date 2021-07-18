/*
 * @Author: Broccoli spring( 高仓雄 - gcx )
 * @Date: 2021-07-9 10:49:36
 * @Last Modified by:   Broccoli spring( 高仓雄 - gcx )
 * @Last Modified time: 2020-05-13 10:49:36
 */

import Vue from 'vue';
// @ts-ignore
import Component from 'vue-class-component';
import changeDocumentTitle from './mixins/Global/DocumentTitle';
// import { resourcepath } from './utils/library/resource';
const packageJson = require('@ROOT/package.json');

@Component({
  mixins: [changeDocumentTitle],
})
export default class App extends Vue {
  name: 'app';

  protected render(h) {
    return (
      <div id={'app'} class={this.appName} tag={this.appTag}>
        <router-view />
      </div>
    );
  }

  get projectName(): string {
    return packageJson.name;
  }

  get routeName(): string {
    return `NEAP-route__${this.$route.name}`;
  }

  get appName(): string {
    return `${this.projectName} ${this.routeName}`;
  }

  get appTag(): string {
    return `${this.projectName}-${packageJson['neap-tag'] || 'normal'}`;
  }

  created(): void {
    console.log(document.body)
    console.log(1231312312312312312)
    this.$store.dispatch('setBrowserInfo'); //设置浏览器信息
    this.$store.dispatch('setOSInfo'); //设置操作系统信息
  }
}
