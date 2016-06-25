var gulp = require('gulp');

gulp.task('default', ['concat']);

var concat = require('gulp-concat');

gulp.task('concat', function() {
	return gulp.src('./css/*.css')
			.pipe(concat('syle.main.css'))
			.pipe(gulp.dest('./css/'));
});