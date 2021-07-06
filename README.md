
#  micro-core

> core project for micro frontend

#### 版本说明：
> ##### 当前版本时间段2021.5.07 - 2021.5.20
> 1、为应对华为云安全监测，/oauth/oauth/query-user-enterprise - 检测是否是多企业账号  接口改为post，参考login接口
> 2、为应对华为云安全监测，/oauth/oauth/query-user-enterprise - 请求头增加 Cache-Control
> 3、userSetting - service 文件 更改fetch路径为 @NEAP/fetch/
> 4、fetch.js 中，非登录后接口，无需增加请求头属性（token，funcid等）
> 5、neap-ui 升级到27，全屏弹窗在ie下存在性能问题，故去掉全屏属性，改由其他方式实现
> 6、增加登出逻辑处理，若返回resultMsg时http链接则根据返回地址跳转（因用于单点），否则默认跳回登录页

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
