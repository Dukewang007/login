"use strict";

var gulp = require('gulp');
var sass = require('gulp-less');//编译less
var concat = require('gulp-concat');//用来把多个文件合并为一个文件
var uglify = require('gulp-uglify');//压缩文件
// var del = require('del');
// var jshint = require('gulp-jshint');
// var rename = require('gulp-rename');
var browserSync = require('browser-sync');//自动刷新页面

var option = {base: 'src'};
var dist = __dirname + '/build';

var paths = {
  scripts: ['src/*.js','src/libs/*.js','src/c/*.js','src/main.js'],
  sources: ['src/public/fonts/*.*'],
  cssimage: ['src/css/images/*.*','src/css/icons/*.*'],
  htmls: ['src/htmls/*.html','src/*.html'],
  sass: ['src/scss/*.*'] 
};


//把开发环境中的HTML文件，移动至发布环境。
gulp.task('build:html', function() {
  return gulp.src(paths.htmls,option) // 指明源文件路径、并进行文件匹配
    .pipe(gulp.dest(dist+'/'))
    .pipe(browserSync.stream());
});

//Link任务会检查js/目录下得js文件有没有报错或警告。
// gulp.task('build:lint', function() {
//   gulp.src('src/c/*.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter('default'));
// });

//编译less文件
//nested：嵌套缩进的css代码，它是默认值。 expanded：没有缩进的、扩展的css代码。compact：简洁格式的css代码。compressed：压缩后的css代码。
gulp.task('build:scss', function() {
  return gulp.src('src/scss/style.scss') 
    .pipe(sass({style: 'compressed'}))
    .on('error', function(err) {
      console.error('Error!', err.message); // 显示错误信息
    })
    .pipe(gulp.dest(dist+'/css/')) // 输出路径
    .pipe(browserSync.stream());
});

//scripts任务会合并js/目录下得所有得js文件并输出到build/目录
gulp.task('build:scripts', function() {
  return gulp.src(paths.scripts,option)
    //.pipe(uglify({ preserveComments:'some' }))// 使用uglify进行压缩，并保留部分注释
    .pipe(gulp.dest(dist+'/'))
    .pipe(browserSync.stream());
});

//图片字体资源编译
gulp.task('build:sources', function() {
  return gulp.src(paths.sources,option)
    .pipe(gulp.dest(dist+'/'))
    .pipe(browserSync.stream());
});
//css背景图片资源折整合
gulp.task('build:cssimage', function() {
  return gulp.src(paths.cssimage,option)
    .pipe(gulp.dest(dist+'/'))
    .pipe(browserSync.stream());
});

//监视编译的情况
gulp.task('build:server',["build:test"], function() {
  browserSync.init({
     server:dist
  });
  gulp.watch(paths.htmls, ['build:html'])
  gulp.watch(paths.scripts, ['build:scripts'])
  gulp.watch(paths.sass, ['build:scss'])
  gulp.watch(paths.sources, ['build:sources'])
  gulp.watch(paths.cssimage, ['build:cssimage'])
 
});


gulp.task("build:test",['build:html','build:scss','build:sources','build:cssimage','build:scripts']);


gulp.task('default', ["build:server"]);

