'use strict';
var gulp = require('gulp');

gulp.task('default', [
	'sass',
	'sass:watch',
	'concatcss',
	'concatcss:watch',
	'cssmin',
	'cssmin:watch'
]);

//https://www.npmjs.com/package/gulp-sass
var sass = require('gulp-sass');
gulp.task('sass', function () {
	return gulp.src('src/css/*.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest('src/css'));
});
gulp.task('sass:watch', function () {
	gulp.watch('src/css/*.scss', ['sass']);
});

//https://www.npmjs.com/package/gulp-concat-css
var concatCss = require('gulp-concat-css');
gulp.task('concatcss', function () {
	return gulp.src('src/css/*.css')
			.pipe(concatCss("style.main.css"))
			.pipe(gulp.dest('dist/css/'));
});
gulp.task('concatcss:watch', function () {
	gulp.watch('src/css/*.css', ['concatcss']);
});

//https://www.npmjs.com/package/gulp-cssmin
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
gulp.task('cssmin', function () {
	gulp.src('dist/css/style.main.css')
			.pipe(cssmin())
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest('dist/css'));
});
gulp.task('cssmin:watch', function () {
	gulp.watch('dist/css/*.css', ['cssmin']);
});

