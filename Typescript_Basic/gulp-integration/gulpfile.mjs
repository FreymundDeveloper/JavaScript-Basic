import gulp from 'gulp';
const { series, parallel, src, dest, task } = gulp;
import { deleteAsync as del } from 'del';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import tsify from 'tsify';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
 
function clearDist() { 
    return del(['dist'])
}
 
function copyHTML() { 
    return src('public/**/*')
        .pipe(dest('dist')) 
}
 
function generateJS() { 
    return browserify({
        basedir: '.',
        entries: ['src/main.ts']
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(dest('dist'))
}

function generateJSProduction() {
    return src('dist/app.js')
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(dest('dist'))
}
 
export default series(clearDist, parallel(copyHTML, generateJS), generateJSProduction)