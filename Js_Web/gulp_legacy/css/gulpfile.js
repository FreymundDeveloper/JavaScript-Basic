const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');

gulp.task('copyHtml', async () => {
    gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
});

gulp.task('copyCss', async () => {
    gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('build/css'))
});

gulp.task('default', gulp.series('copyCss','copyHtml'), () => {}); 
//It's not the ideal way, but it's making the legacy version work!!
