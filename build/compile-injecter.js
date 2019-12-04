var gulp = require('gulp');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
// var rename = require("gulp-rename");
var gutil = require('gulp-util');
var notify = require('gulp-notify');


var _base_path = '../';
var _base_dist_path = '../lib/';

var t = 0;       								       //计数开始为0
var showinfo = function() {
  t++;
  var curDate = new Date();
  var Year = curDate.getFullYear().toString().slice(-2);
  var Month = ('0' + (curDate.getMonth() + 1)).slice(-2);
  var Day = ('0' + curDate.getDate()).slice(-2);
  var Hours = ('0' + curDate.getHours()).slice(-2);
  var Minutes = ('0' + curDate.getMinutes()).slice(-2);
  return FullDate = '\n' + '           - Author : 高仓雄（gcx / Spring of broccoli，Contact ：Wechat（lensgcx）' + '\n' + '           - Date:' + Year + '-' + Month + '-' + Day + '-' + Hours + '-' + Minutes + '\n' + '           - Current: ' + t + 'st refresh loading... ' + '\n' + '           - running tasks...';
};

//compile injecter
gulp.task('js-handle-injecter', function() {
  gulp.src(_base_path + 'injecter/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015'], // es5检查机制
    }))
    .pipe(uglify({
      mangle: true,
      compress: true,
    }))
    .pipe(sourcemaps.write())
    // .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(_base_dist_path + 'injecter/'))
    .on('error', function(err) {
      gutil.log(gutil.colors.red('[Error]'), err.toString());
    })
    .pipe(notify({ message: '===== babel and uglify task complete =====' }));
});


// copy sh
gulp.task('copy_sh', function() {
  gulp.src([_base_path + 'clone.sh'])
    .pipe(gulp.dest(_base_dist_path))
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
