/*
* @Author: Broccoli spring( 高仓雄 - gcx )
* @Date: 2020-07-17 10:50:48
* @Last Modified by: Broccoli spring( 高仓雄 - gcx )
* @Last Modified time: 2020-07-17 10:50:48
*/
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';
import expand from '../../expand';


import { bizSideMenu, bizTabsViews, nsHeader } from './index.ts';//布局模块组件

//mixins 混入
import transform from './mixins/transform';
import portal from './mixins/portal';
import killPopoverByScroll from './mixins/killPopoverByScroll';
import bizDataExpand from './mixins/bizDataExpand';

import './style/index.scss';


@Component({
  mixins: [transform, killPopoverByScroll, portal, bizDataExpand],
  components: { nsHeader, bizSideMenu, bizTabsViews },
  computed: {
    ...mapGetters(['isInIframe', 'sideMenuCollapse']),
  },
})
// @ts-ignore
export class Layout extends Vue {
  name: 'Layout';
  private isPortal: any;

  protected render(h) {
    return (

      <div
        id='layout'
        class={
          [
            'ns-container is-vertical',
            {
              //这里要处理一下
              // 'is-hide-frame': this.isInIframe,
              'is-portal': this.isPortal,
              'is-expand': !this['sideMenuCollapse'],
              'is-collapse': this['sideMenuCollapse'],
            },
          ]
        }
      >
        {/*头部区域*/}
        <div id={'header-wrapper'} class={'fl'}>
          <ns-header />
        </div>
        {/*内容容器部分*/}
        <section class='ns-container'>
          {/*左侧（侧边栏）*/}
          <aside id='side-menu-wrapper'>
            {!this.isPortal ? <biz-side-menu /> : null}
          </aside>

          {/*右侧（ tab + main)*/}
          <section class='ns-container is-vertical'>

            {/*history task-tabs link*/}
            <div id='page-tabs-wrapper'>
              {!this.isPortal ? <biz-tabs-views /> : null}
            </div>

            {/*工作台模块 - 嵌入路由视图即可*/}
            <section id='main-wrapper'>
              {/*changing-over  work bench module*/}
              <neap-injecter-iframe />

              {/*需要路由缓存*/}
              <transition leave-active-class='fade-out-active' enter-active-class='fade-in-active'>
                <keep-alive include={this.cacheQueue} exclude={this.cacheExclude}>
                  {this.isCache ? <router-view key={this.key} /> : null}
                </keep-alive>
              </transition>

              {/*无需要路由缓存*/}
              <transition leave-active-class='fade-out-active' enter-active-class='fade-in-active'>
                {!this.isCache ? <router-view key={this.key} /> : null}
              </transition>

            </section>
          </section>
        </section>
      </div>
    );
  }


  //全局缓存开关
  get isCache(): boolean {
    return expand.route.cache;
  }

  get cacheExclude(): string[] {
    console.log(' ======= cacheExclude 队列：====== ');
    console.log(expand.route.cacheExclude);
    return expand.route.cacheExclude;
  }

  get key(): string {
    //获取整体路由key值
    const routeKey = this.NEAP_ROUTER.getRouteKey();
    return (this.$route.path !== undefined ? this.$route.path : this.$route) + '-' + routeKey;
  }

  get cacheQueue(): string[] {
    console.log(' ======= 缓存页面- name 队列：====== ');
    console.log(this.NEAP_CACHE.getCacheQueue());
    return this.NEAP_CACHE.getCacheQueue();
  }

  created(): void {
    // console.log(this.isInIframe);
  }

}
