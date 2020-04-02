import ExtendsFn from './extendsfn';

export default (Vue, options) => {
  Object.keys(ExtendsFn(Vue, options)).forEach(key => {
    Vue.prototype[key] = ExtendsFn(Vue, options)[key];
  });
};
