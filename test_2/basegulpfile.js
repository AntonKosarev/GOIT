//watch
var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('stream', function () {
    // Endless stream mode
    return watch('css/**/*.css', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});

gulp.task('callback', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
    return watch('css/**/*.css', function () {
        gulp.src('css/**/*.css')
            .pipe(gulp.dest('build'));
    });
});
//gulp-autoprefixer
var autoprefixer = require('gulp-autoprefixer');
gulp.task('autoprefixer', function () {
    gulp.src('src/app.css').pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
});
//gulp-imagemin
var gulpimagemin = require('gulp-imagemin');
gulp.task('gulp-imagemin', function () {
    gulp.src('src/images/*')
        .pipe(gulpimagemin())
        .pipe(gulp.dest('dist/images'))
});
//imagemin-pngquant
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
//gulp-uglify
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('uglify', function (cb) {
    pump([
            gulp.src('lib/*.js'),
            uglify(),
            gulp.dest('dist')
        ],
        cb
    );
});
//gulp-cssmin
var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('default', function () {
    gulp.src('src/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});
//gulp-sass
var sass = require('gulp-sass');
gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});
gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});
//gulp-rigger
var rigger = require('gulp-rigger');
gulp.task('rigger', function () {
    gulp.src('app/*.js')
        .pipe(rigger())
        .pipe(gulp.dest('build/'));
});

'use strict';
var gulp = require('gulp');
////gulp-autoprefixer
//var autoprefixer = require('gulp-autoprefixer');
////gulp-imagemin
//var gulpimagemin = require('gulp-imagemin');
////imagemin-pngquant
//var imagemin = require('imagemin');
//var imageminPngquant = require('imagemin-pngquant');
////gulp-uglify
//var uglify = require('gulp-uglify');
////var pump = require('pump');
////gulp-sass
//var sass = require('gulp-sass');
//gulp-rigger
var rigger = require('gulp-rigger');

//var path = {
//    build: { //Тут мы укажем куда складывать готовые после сборки файлы
//        html: 'build/',
//        js: 'build/js/',
//        css: 'build/css/',
//        img: 'build/img/',
//        fonts: 'build/fonts/'
//    },
//    src: { //Пути откуда брать исходники
//        html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
//        js: 'src/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
//        style: 'src/style/main.scss',
//        img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
//        fonts: 'src/fonts/**/*.*'
//    },
//    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
//        html: 'src/**/*.html',
//        js: 'src/js/**/*.js',
//        style: 'src/style/**/*.scss',
//        img: 'src/img/**/*.*',
//        fonts: 'src/fonts/**/*.*'
//    },
//    clean: './build'
//};

//Таск для сборки html:

//gulp.task('html:build', function () {
//    gulp.src(path.src.html) //Выберем файлы по нужному пути
//        .pipe(rigger()) //Прогоним через rigger
//        .pipe(gulp.dest(path.build.html)); //Выплюнем их в папку build
//});

gulp.task('html:build', function () {
    gulp.src('src/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('build/'));
});
