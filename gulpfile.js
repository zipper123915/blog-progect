const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style () {
    return gulp.src('./media/styles/scss/*.scss')
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(gulp.dest('./media/styles/css'))
}


function watch () {
    gulp.watch('./media/styles/scss/**/*.scss', style); 
}


exports.style = style;
exports.watch = watch;