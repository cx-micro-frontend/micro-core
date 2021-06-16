
#  micro-core

> core project for micro frontend

#### 版本说明：
> ##### 当前版本时间段2021.5.07 - 2021.5.20
> 1、fetch 文件路劲发生改变，移至src下，后续引用需要在alias配置@FETCH才能命中
> 2、injecter中对clone方法进行了扩展，支持传入injectConfigList - 注入配置清单，以便其他项目调用
> 3、样式 var 参数 统一从 sassResources 中获取，并统一整合了cover样式
> 4、在 service 中 fetch 引用路径变更
> 5、删除utils=>nsQuery=>nsQuery.js 并改变相对应的引用路径
> 6、登录页，底部备案号，支持返回html格式渲染
## Build Setup

``` bash
# install dependencies
npm install

##  open command menu
npm run command
npm run command:mac

```
## Menu action
### In the action menu, you can execute the following commands:

``` bash

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

```
