const gulp = require('gulp');
const sass = require('gulp-sass');

function style () {
    return gulp.src('./media/styles/scss/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('./media/styles/css'))
}


function watch () {
    gulp.watch('./media/styles/scss/**/*.scss', style);
}


exports.style = style;
exports.watch = watch;