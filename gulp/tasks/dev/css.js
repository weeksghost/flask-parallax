var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');

gulp.task('minify-css', function() {
    return gulp.src('../../../static/assets/css/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('dist'));
});
