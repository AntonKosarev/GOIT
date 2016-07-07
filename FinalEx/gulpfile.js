'use strict';
var gulp = require('gulp');

gulp.task('default', [
    'sass',
    'sass:watch'
]);

//https://www.npmjs.com/package/gulp-sass
var sass = require('gulp-sass');
gulp.task('sass', function () {
    return gulp.src('site/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('site/css'));
});
gulp.task('sass:watch', function () {
    gulp.watch('site/css/*.scss', ['sass']);
});