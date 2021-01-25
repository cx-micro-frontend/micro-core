
echo "===== 开始修复 ====="

#准备工作，下载依赖，设置镜像等，首次执行需要，后面不需要，可以注释
npm install -g cross-env
npm i yarn tyarn -g
yarn config set registry https://registry.yarnpkg.com #设置 yarn 镜像
npm rebuild node-sass #安装node-sass

#打印node与npm版本
echo "node版本如下:"
node -v
echo "npm版本如下:"
npm -v
echo "yarn版本如下:"
yarn -v
echo "tyarn版本如下:"
tyarn -v

#清除npm缓存
npm cache clean --force
#移除yarn.lock文件
rm -f yarn.lock

#安装依赖
tyarn

#修复打开node运行内存上限
#cross-env LIMIT=16384 increase-memory-limit


echo "===== 开始完毕 ====="
