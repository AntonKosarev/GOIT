
gulp.task('default', ['requirejsBuild']);
var gulp = require('gulp'),
    rjs = require('gulp-requirejs');

gulp.task('requirejsBuild', function() {
    rjs({
        baseUrl: 'js/src/*.js',
        out: 'js/dist',
        shim: {
            // standard require.js shim options
        },
        // ... more require.js options
    })
        .pipe(gulp.dest('./delpoy/')); // pipe it to the output DIR
});