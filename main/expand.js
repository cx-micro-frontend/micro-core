import expand from '@ROOT/config/expand';

const e = Object.assign({
    //头部自定义插槽
    headslot: null,
    //自定义路由地址
    customRoute: (Layout) => {
      return [];
    },
  },
  expand);

export default e;
