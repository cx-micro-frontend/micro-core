###  micro-core - 微前端 核心母体基座 🚀

> 🚀 core project for micro frontend

（此母体核心基座为剥离业务项目代码，需要配合微前端业务项目使用）

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.10-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.7.0-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://travis-ci.org/PanJiaChen/vue-element-admin" rel="nofollow">
    <img src="https://travis-ci.org/PanJiaChen/vue-element-admin.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://github.com/PanJiaChen/vue-element-admin/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
  <a href="https://github.com/PanJiaChen/vue-element-admin/releases">
    <img src="https://img.shields.io/github/release/PanJiaChen/vue-element-admin.svg" alt="GitHub release">
  </a>
  <a href="https://gitter.im/vue-element-admin/discuss">
    <img src="https://badges.gitter.im/Join%20Chat.svg" alt="gitter">
  </a>
  <a href="https://panjiachen.gitee.io/vue-element-admin-site/zh/donate">
    <img src="https://img.shields.io/badge/%24-donate-ff69b4.svg" alt="donate">
  </a>
</p>

## 简介

[MICRO-CORE] 是一个后台前端解决方案，它基于 [vue](https://github.com/vuejs/vue) 和 [element-ui](https://github.com/ElemeFE/element)实现。它使用了最新的前端技术栈，内置了微前端入口/顶层组件/数据处理/部分功能组件/核心方法，可以帮助你快速搭建企业级中后台微前端产品原型。


## 版本
| -      |    版本一(master) | 版本二(new)  |
| :--------: | :--------| :-- |
| `version`  | 0.0.25-73 |  0.0.25-71   |

## 前序准备

你需要在本地安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。本项目技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)、[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/) 、[vue-cli](https://github.com/vuejs/vue-cli) 、[axios](https://github.com/axios/axios) 和 [element-ui](https://github.com/ElemeFE/element)，所有的请求数据都使用[Mock.js](https://github.com/nuysoft/Mock)进行模拟，提前了解和学习这些知识会对使用本项目有很大的帮助。

## 构建工具
此项目中集成 [CX-BUILDER](https://github.com/CX-UI-Design/cx-builder/) 编译脚本工具（webpack4.0+），具体使用详见下文


## 下载地址
#### repositorie path:
https://github.com/cx-micro-frontend/micro-core
#### 克隆项目
git clone https://github.com/cx-micro-frontend/micro-core.git

## 功能：
#### 内置包括：
```
- Webpack 脚手架（编译构建）
- UI组件库（Element-UI）
- 基础组件库
- 微前端集成抽取注入模式
- 路由（Vue-router）
- HTTP库（Axios）
- 内置utils-library
- 统一性全局样式
- 状态管理
- 内置部分业务组件
- Clipboard(剪贴复制)
- 富文本编辑器
- ECharts 图表
- 路由缓存解决方案
- 多维度集成第三方应用
```
## 开发：
#### 1、catalog & files rules：
| dir      |    rules | remarks  |
| :--------: | :--------| :-- |
| `assets`  | img / icon file |  resource catalogue   |
| `components`     |   your buiness component | packaging business components by basic ui  |
| `mixins`      |    vue mixins |   |
| `router`      |    vue router |   |
| `service`      |    request api config | use to business module  |
| `store`      |    business data flow by vuex  |   |
| `style`      |   write your style file |   |
| `UI`      |    components/ui/utils register in it |  |
| `Utils`      |   event utils library |
| `Views`      |   pages |

#### 2、run and build step：
##### 2.1、dev step：
```flow
st=>start: Start
end=>end
op1=>operation: yarn or npm i （ in root path ）
op2=>operation: npm run command / npm run command:mac
op3=>operation: Dev:choise 1 to running...
st->op1->op2->op3->end
```
##### 2.2、mock step：
```flow
st=>start: Start
end=>end
op1=>operation: yarn or npm i （ in root path ）
op2=>operation: npm run command / npm run command:mac
op3=>operation: Mock:choise 2
op4=>operation: choise 1（local data） or 2 (cloud data) to running...
st->op1->op2->op3->op4->end
```
##### 2.3、build step：
```flow
st=>start: Start
end=>end
op1=>operation: yarn or npm i （ in root path ）
op2=>operation: npm run command / npm run command:mac
op3=>operation: Mock:choise 3 to running...
st->op1->op2->op3->end
```
## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions

## License
Copyright (c) 2020-present 架构组前端 -  Broccoli spring( 高仓雄 - gcx )
