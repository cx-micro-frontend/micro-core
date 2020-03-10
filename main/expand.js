import Merge from 'webpack-merge';
import expand from '@ROOT/config/expand';

const e = Merge({
    //全局样式主题的覆盖引入（业务个性化)，包括图标等一些元素
    UI: {
      theme: null,
      iconfont: null,
    },

    //布局
    layout: {
      //布局厂字框架 - 头部自定义插槽
      headslot: null,
    },

    //路由相关
    route: {
      keepAlive: true,
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

console.log(898898989899);
console.log(898898989899);
console.log(e);
console.log(898898989899);
export default e;
