import { deepObjectMerge } from './src/utils/library/marge';
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
         * @param list
         * @returns {*}
         */
        filter: list => {
          return list;
        },

        /**
         * 菜单点点击跳转事件拓展
         * @param firstItem
         * @param firstIndex
         * @param secondItem
         * @param secondIndex
         * @param level
         * @param done
         */
        jump: ({ firstItem, firstIndex, secondItem, secondIndex, level }, done) => {
          console.log('expand - sidebar - jump');
          console.log(firstItem, firstIndex, secondItem, secondIndex, level);
          done(firstItem, secondItem);
        },


      },
    },

    //路由相关
    route: {
      cache: true,
      cacheExclude: [],
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
