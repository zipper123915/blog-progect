const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style () {
    return gulp.src('./media/styles/sass/*.sass')
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(gulp.dest('./media/styles/css'))
            .pipe(browserSync.stream())
}


function watch () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./media/styles/sass/**/*.sass', style); 
    gulp.watch('./*.html').on('change', browserSync.reload);
}


exports.style = style;
exports.watch = watch;