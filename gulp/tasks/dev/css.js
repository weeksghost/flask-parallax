var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    minifycss = require('gulp-minify-css');
    //rename = require('gulp-rename');

gulp.task('styles', function() {
    //return gulp.src('../../../static/scss/*.scss')
    return sass('../../../static/scss/')
    .on('error', function (err) {
        console.error('Error!', err.message);
    })
    .pipe(minifycss())
    .pipe(gulp.dest('../../../static/assets/css/'));
});
