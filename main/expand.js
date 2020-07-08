import { deepObjectMerge } from './src/utils/library/marge';
import { filterMenu } from './src/layout/components/NS-nav-menu/utils';
import expand from '@ROOT/config/expand';


const e = deepObjectMerge({
    /**
     * sam - single application mode - 单系统模式
     * mam - multiple application mode - 多系统门户模式
     */
    integrationMode: 'sam',

    //全局样式主题的覆盖引入（业务个性化)，包括图标等一些元素
    UI: {
      theme: null,
      iconfont: null,
    },

    //布局
    layout: {

      //头部自定义插槽
      header: {
        leftSlot: null,
        rightSlot: null,
      },

      //侧边栏
      sidebar: {
        /**
         * slot component for side menu
         * For example, side sliding dialog
         */
        slotComponent: null,


        /**
         * 删选侧边栏数据
         * 注意：
         * 侧边栏数据直接关系到：
         * 1、侧边菜单的显示（可通过对应字段的控制达到）
         * 2、路由的注册
         * 在删选侧边栏数据时，若删除了其中的条目，其结果是对应菜单栏的路由权限也同时会移除。
         * 若想隐藏对应菜单栏条目的同时，保留路由权限，则只需控制其显示隐藏即可
         * 默认配置：
         * 本例中，只对应转换了菜单栏条目的显示隐藏字段
         * @param list
         * @returns {*}
         */
        filter: list => {
          const filterList = filterMenu(list);

          if (filterList && filterList instanceof Array) {
            return filterList;
          }
          else {
            throw ('【 NEAP-ERROR 】Custom filter side menu data,  must output data list.');
          }
        },

        /**
         * 菜单点点击跳转事件拓展
         * @param node
         * @param instance
         * @param done
         */
        jump: ({ node, instance }, done) => {
          console.log('expand - sidebar - jump');
          // console.log(firstItem, firstIndex, secondItem, secondIndex, level);
          done();
        },


      },
    },

    //路由相关
    route: {
      cache: true,
      cacheExclude: [],

      /**
       * init jump after login
       * 登录后初始跳转
       * type - 1、function 2、Object
       * return { name: 'xx',fullpath: 'xx'}
       * default - null
       */
      initRouteByAuth: null,

      //路由重定向
      redirect: {

        'init_view': '/front/login',//重定向: 初始路由
        'cancel_token': '/front/login',//重定向: http请求返回 - 登陆已过期 / 没有token / token失效
        'loss_token': '/front/login',//重定向: token 缺失或失效
        'loss_pages': '/error',//重定向: 页面模块缺失,请检查模块是否注入 （动态路由注册后的错误跳转重定向，区别于普通404)
        '404': '/404',//重定向: 异步路由列表配置项与路由跳转路径不匹配,或权限路由缺失,

        'sso_error_login': '/sso/error',//重定向: SSO - 登录错误
        'sso_loss_token': '/sso/error',//重定向: SSO - token 缺失或失效
        'sso_loss_pages': '/sso/error',//重定向: SSO - 页面模块缺失,请检查模块是否注入 （动态路由注册后的错误跳转重定向，区别于普通404)
        'sso_404': '/sso/error',//重定向: SSO - 异步路由列表配置项与路由跳转路径不匹配,或权限路由缺失,

      },

      //自定义路由地址 - 适用于一些特殊界面（概览 / 导航 /任务 等)
      customRoute: (Layout) => {
        return [];
      },
    },


    //用户行为存储
    behaviorCache: {
      //表格行为存储 - 开关
      pageSize: true,
    },


    //请求
    service: {
      //request - 请求拦截器
      requestInterceptors: config => {

      },
      //response - 返回拦截器
      responseInterceptors: response => {

      },
    },

    //挂载（依赖/示例下全局工具方法等)
    mount: null,

  },
  expand);

console.info('最终处理后的个性依赖注入:');
console.log(e);

export default e;


// eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnYW9jYW5neGlvbmciLCJqdGkiOiIxNjUwMjQiLCJpYXQiOjE1OTA3NjEzNzl9.Nh_07T6wPgGnFBZxJWPcXeJReoQj9vbrCCa1UrpXEpk
//eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnYW9jYW5neGlvbmciLCJqdGkiOiIxNjUwMjQiLCJpYXQiOjE1OTA3NjE1MDB9.h4yUBVxWOdiYrKLkehRULVTZ5wM76tGxqVS0YBaUjx4
//eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6IjEwNDA1NiIsImlhdCI6MTU5MDc2MTYwMn0.-FjsQnHtT-p8JnEC-NgIuBgI8n9S0hlQL_Qd4mQ1mY0
