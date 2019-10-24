##  test-demo （架构组测试)

> checkhousepara module for frontend team

#### 1、 repositorie path:
http://192.168.1.47:3000/Framework-frontend/micro_test_demo

#### 2、author：
gcx

#### 3、modules list：
>表格测试 - gridDemo

#### 4、catalog & files rules：
| dir      |    rules | remarks  |
| :--------: | :--------| :-- |
| `assets`  | img / icon file |  resource catalogue   |
| `components`     |   your buiness component | packaging business components by basic ui  |
| `mixins`      |    vue mixins | mixins in core mixins  |
| `router`      |    vue router | mixins in core router  |
| `service`      |    request api config | use to business module  |
| `store`      |    business data flow by vuex  | mixins in core vuex  |
| `style`      |   write your style file | inject all your styles file into the index file  |
| `UI`      |    components/ui/utils register in it | mixins in main ui entry  |

#### 5、run and build step：
##### 5.1、dev step：
```flow
st=>start: Start
end=>end
op1=>operation: yarn or npm i （ in root path ）
op2=>operation: npm run command / npm run command:mac
op3=>operation: Dev:choise 1 to running...
st->op1->op2->op3->end
```
##### 5.2、mock step：
```flow
st=>start: Start
end=>end
op1=>operation: yarn or npm i （ in root path ）
op2=>operation: npm run command / npm run command:mac
op3=>operation: Mock:choise 2
op4=>operation: choise 1（local data） or 2 (cloud data) to running...
st->op1->op2->op3->op4->end
```
##### 5.3、build step：
```flow
st=>start: Start
end=>end
op1=>operation: yarn or npm i （ in root path ）
op2=>operation: npm run command / npm run command:mac
op3=>operation: Mock:choise 3 to running...
st->op1->op2->op3->end
```
