const path = require('path');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const javascriptObfuscator = require('gulp-javascript-obfuscator');//js压缩混淆插件
// const gutil = require('gulp-util');//gulp 4 建议弃用
// const rename = require("gulp-rename");

const _base_path = '../../injecter/';
const _base_dist_path = '../../lib/injecter/';

// const _base_path = path.resolve('injecter');
// const _base_dist_path = path.resolve('../../','lib/injecter/');

let t = 0;//计数开始为0

function showinfo() {
  t++;
  const curDate = new Date();
  const Year = curDate.getFullYear().toString().slice(-2);
  const Month = ('0' + (curDate.getMonth() + 1)).slice(-2);
  const Day = ('0' + curDate.getDate()).slice(-2);
  const Hours = ('0' + curDate.getHours()).slice(-2);
  const Minutes = ('0' + curDate.getMinutes()).slice(-2);
  return FullDate = '\n' + '           - Author : 高仓雄（gcx / Spring of broccoli，Contact ：Wechat（lensgcx）' + '\n' + '           - Date:' + Year + '-' + Month + '-' + Day + '-' + Hours + '-' + Minutes + '\n' + '           - Current: ' + t + 'st refresh loading... ' + '\n' + '           - running tasks...';
}


//
/**
 * compile injecter
 * 注意：gulp4最大的变化是不能像以前那样传递一个依赖的任务列表
 * 你需要使用gulp.series和gulp.parallel，因为gulp任务现在只有两个参数。
 */
gulp.task('js-handle-injecter', gulp.series(() => {

    return new Promise(function(resolve, reject) {

      gulp.src(_base_path + '**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
          presets: ['es2015'], // es5检查机制
        }))
        .pipe(uglify({
          mangle: { toplevel: true },// 可以对代码变量名简单混淆压缩
          compress: true,//类型：Boolean 默认：true 是否完全压缩
        }))
        .pipe(uglify())
        .pipe(javascriptObfuscator())
        .pipe(sourcemaps.write())
        // .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(_base_dist_path))
        // .on('error', function(err) {
        //   gutil.log(gutil.colors.red('[Error]'), err.toString());
        // })
        .pipe(notify({ message: '===== babel and uglify task complete =====' }));

      resolve();
    });
  },
));


/**
 * copy sh files
 */
gulp.task('copy_sh', gulp.series(() => {

    return new Promise(function(resolve, reject) {

      gulp.src([_base_path + 'clone/' + 'clone.sh'])
        .pipe(gulp.dest(_base_dist_path + 'clone/'))
        .pipe(notify({ message: '===== clone.sh copy complete =====' }));
      gulp.src(_base_path + 'git.sh')
        .pipe(gulp.dest(_base_dist_path))
        .pipe(notify({ message: '===== git.sh copy complete =====' }));

      resolve();
    });
  },
));


// gulp.task('watch', () => {
//   gulp.watch(_base_path + '**/*.js', ['js-handle-injecter']).on('change', function(event) {
//     console.log('File ' + event.path + ' was ' + event.type + showinfo() + '');
//   });
// });

// gulp.task('default', ['js-handle', 'copy_sh', 'watch']);


gulp.task('default', gulp.series(['js-handle-injecter', 'copy_sh']));
