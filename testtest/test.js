const shell = require('shelljs');
const path = require('path');
const os = require('os');

console.log('系统中的默认存放临时文件的目录： '+os.tmpdir());

console.log('获取计算机名称： '+os.hostname());

console.log('获取操作系统类型： '+os.type());

console.log('获取操作系统平台： '+os.platform());

console.log('获取CPU架构： '+os.arch());
console.log('获取操作系统版本号： '+os.release());

console.log('获取系统当前运行的时间： '+os.uptime())

console.log('系统总内存量： '+(os.totalmem()/1024/1024/1024).toFixed(1)+'G')

const modulex = {
  module: '业务组件',
  path: 'http://192.168.1.47:3000/Framework-frontend/micro_biz_components.git',
  repositorie: 'biz_components',
  isOwner: false,
  disabled: false,
}

const tmp = path.resolve(__dirname, './repositories/_tmp')
const shell_clone = path.resolve(__dirname, './test.sh');

console.log(modulex.module)
console.log(modulex.path)

shell.exec(
  `
   git clone ${modulex.path} ${tmp}
  `
);

//shell.exec(
//  `${shell_clone} ${modulex.module} ${modulex.path} ${tmp}`
//);
