//var gulp = require('gulp');
//
//gulp.task('default', function() {
//    // place code for your default task here
//});

const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default',  function() {
    gulp.src('DZJS_13-14/js/src/script.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('DZJS_13-14/js/dist'));
});