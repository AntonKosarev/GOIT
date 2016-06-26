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
	return gulp.src('css/*.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest('css'));
});
gulp.task('sass:watch', function () {
	gulp.watch('./css/*.scss', ['sass']);
});

//https://www.npmjs.com/package/gulp-concat-css
var concatCss = require('gulp-concat-css');
gulp.task('concatcss', function () {
	return gulp.src('css/*.css')
			.pipe(concatCss("style.main.css"))
			.pipe(gulp.dest('css/dist/'));
});
gulp.task('concatcss:watch', function () {
	gulp.watch('./css/*.css', ['concatcss']);
});

//https://www.npmjs.com/package/gulp-cssmin
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
gulp.task('cssmin', function () {
	gulp.src('css/dist/style.main.css')
			.pipe(cssmin())
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest('css/dist'));
});
gulp.task('cssmin:watch', function () {
	gulp.watch('css/dist/*.css', ['cssmin']);
});

