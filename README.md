
#  micro-core

> core project for micro frontend

#### 版本说明：
> ##### 当前版本时间段2021.5.07 - 2021.5.20
> 1、为应对华为云安全监测，/oauth/oauth/query-user-enterprise - 检测是否是多企业账号  接口改为post，参考login接口
> 2、为应对华为云安全监测，/oauth/oauth/query-user-enterprise - 请求头增加 Cache-Control
> 3、userSetting - service 文件 更改fetch路径为 @NEAP/fetch/
> 4、fetch.js 中，非登录后接口，无需增加请求头属性（token，funcid等）

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
