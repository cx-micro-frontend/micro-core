const gulp = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const gutil = require('gulp-util');
const notify = require('gulp-notify');
const javascriptObfuscator = require('gulp-javascript-obfuscator');//js压缩混淆插件
// const rename = require("gulp-rename");

const _base_path = '../injecter/';
const _base_dist_path = '../lib/injecter/';

let t = 0;       								       //计数开始为0
const showinfo = function() {
  t++;
  const curDate = new Date();
  const Year = curDate.getFullYear().toString().slice(-2);
  const Month = ('0' + (curDate.getMonth() + 1)).slice(-2);
  const Day = ('0' + curDate.getDate()).slice(-2);
  const Hours = ('0' + curDate.getHours()).slice(-2);
  const Minutes = ('0' + curDate.getMinutes()).slice(-2);
  return FullDate = '\n' + '           - Author : 高仓雄（gcx / Spring of broccoli，Contact ：Wechat（lensgcx）' + '\n' + '           - Date:' + Year + '-' + Month + '-' + Day + '-' + Hours + '-' + Minutes + '\n' + '           - Current: ' + t + 'st refresh loading... ' + '\n' + '           - running tasks...';
};

//compile injecter
gulp.task('js-handle-injecter', function() {
  gulp.src(_base_path + '**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015'], // es5检查机制
    }))
    .pipe(uglify({
      mangle: {toplevel:true},// 可以对代码变量名简单混淆压缩
      compress:true,//类型：Boolean 默认：true 是否完全压缩
    }))
    .pipe(uglify())
    .pipe(javascriptObfuscator())
    .pipe(sourcemaps.write())
    // .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(_base_dist_path))
    .on('error', function(err) {
      gutil.log(gutil.colors.red('[Error]'), err.toString());
    })
    .pipe(notify({ message: '===== babel and uglify task complete =====' }));
});



gulp.task('copy_sh', function() {
  gulp.src([_base_path + 'clone/' + 'clone.sh'])
    .pipe(gulp.dest(_base_dist_path + 'clone/'))
    .pipe(notify({ message: '===== clone.sh copy complete =====' }));
  gulp.src(_base_path + 'git.sh')
    .pipe(gulp.dest(_base_dist_path))
    .pipe(notify({ message: '===== git.sh copy complete =====' }));
});


gulp.task('watch', () => {
  gulp.watch(_base_path + '**/*.js', ['js-handle-injecter']).on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + showinfo() + '');
  });
});

// gulp.task('default', ['js-handle', 'copy_sh', 'watch']);
gulp.task('default', ['js-handle-injecter', 'copy_sh']);
