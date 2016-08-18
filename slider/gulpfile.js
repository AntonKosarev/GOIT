'use strict';
var gulp = require('gulp');

gulp.task('default', [
    'sass',
    'sass:watch'
]);

var sass = require('gulp-sass');
gulp.task('sass', function () {
    return gulp.src('css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'));
});
gulp.task('sass:watch', function () {
    gulp.watch('css/*.scss', ['sass']);
});


//cssmin
//var cssmin = require('gulp-cssmin');
//var rename = require('gulp-rename');
//
//gulp.task('mycssmin', function () {
//    gulp.src('css/*.css')
//        .pipe(cssmin())
//        .pipe(rename({suffix: '.min'}))
//        .pipe(gulp.dest('css'));
//});