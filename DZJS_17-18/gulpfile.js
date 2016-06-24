var gulp = require('gulp');

gulp.task('default', function() {
    console.log('ok');
});
//https://www.npmjs.com/package/gulp-concat
var concat = require('gulp-concat');

gulp.task('scripts', function() {
    return gulp.src('./DZ10/js/src/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./DZ10/js/dist/'));
});

//https://www.npmjs.com/package/gulp-jsmin
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');

gulp.task('minjs', function () {
    gulp.src('DZ10/js/dist/main.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('DZ10/js/dist'));
});

//https://www.npmjs.com/package/gulp-concat-css
var concatCss = require('gulp-concat-css');

gulp.task('styles', function () {
    return gulp.src('DZ10/css/src/*.css')
        .pipe(concat("main.css"))
        .pipe(gulp.dest('DZ10/css/dist/'));
});

https://www.npmjs.com/package/gulp-cssmin
var cssmin = require('gulp-cssmin');

gulp.task('mincss', function () {
    gulp.src('DZ10/css/dist/main.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('DZ10/css/dist'));
});