var gulp = require('gulp');
var path = require('path');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
// var rename = require('gulp-rename');
// var replace = require('gulp-replace');
var gutil = require('gulp-util');
var notify = require('gulp-notify');


var _module_name = 'ns-charts.js';
var _base_path = '../main/mainstay/';
var _base_path_leaf = '**/*.js';
var _base_dist_path = '../lib';



process.env.BABEL_MODULE = 'commonjs';
var babelConfig = require('../babel.config');


var t = 0;
var showinfo = function () {
    t++;
    var curDate = new Date();
    var Year = curDate.getFullYear().toString().slice(-2);
    var Month = ('0' + (curDate.getMonth() + 1)).slice(-2);
    var Day = ('0' + curDate.getDate()).slice(-2);
    var Hours = ("0" + curDate.getHours()).slice(-2);
    var Minutes = ("0" + curDate.getMinutes()).slice(-2);
    return FullDate = '\n' + '           - Author : 高仓雄（gcx / Spring of broccoli，Contact ：Wechat（lensgcx）' + '\n' + '           - Date:' + Year + '-' + Month + '-' + Day + '-' + Hours + '-' + Minutes + '\n' + '           - Current: ' + t + 'st refresh loading... ' + '\n' + '           - running tasks...';
};


gulp.task('js-handle', function () {
    gulp.src([path.resolve(_base_path + _base_path_leaf)])
        .pipe(sourcemaps.init())
        .pipe(babel(babelConfig))
        .pipe(uglify({
            mangle: true,
            compress: true
        }))
        .pipe(sourcemaps.write())
        // .pipe(rename(function (path) {
        //     if (path.basename + path.extname === _module_name) {
        //         path.basename += ".min";
        //     }
        // }))
        .pipe(gulp.dest(path.resolve(_base_dist_path)))
        .on('error', function (err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
        .pipe(notify({message: '===== babel and uglify task complete ====='}));
});


gulp.task('watch', () => {
    gulp.watch(path.resolve(_base_path + _base_path_leaf), ['js-handle']).on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + showinfo() + '')
    });
});


gulp.task('default', ['js-handle', 'watch']);

