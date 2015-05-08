var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');

var concat = require('gulp-concat');

var uglify = require('gulp-uglify');

//var rename = require('gulp-rename');
//
//gulp.task('uglify-css', function() {
//    return gulp.src('../../../static/assets/css/*.css')
//        .pipe(uglify())
//        .pipe(rename({suffix: '.min'}))
//        .pipe(gulp.dest('../../../static/assets/css/'));
//});


gulp.task('minify-css', function() {
    gulp.src('../../../static/assets/css/*.css')
        //.pipe(minifyCss())
        .pipe(concat('style.min.css'))
        .pipe(uglify())
        .pipe(gulp.dest('../../../static/assets/css/'))
});
