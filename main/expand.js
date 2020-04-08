import { deepObjectMerge } from './src/utils/library/marge';
import expand from '@ROOT/config/expand';


const e = deepObjectMerge({
    //全局样式主题的覆盖引入（业务个性化)，包括图标等一些元素
    UI: {
      theme: null,
      iconfont: null,
    },

    //布局
    layout: {
      //头部自定义插槽
      headslot: null,
      //侧边栏
      sidebar: {
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
      },
    },

    //路由相关
    route: {
      cache: true,
      //自定义路由地址 - 适用于一些特殊界面（概览 / 导航 /任务 等)
      customRoute: (Layout) => {
        return [];
      },
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
