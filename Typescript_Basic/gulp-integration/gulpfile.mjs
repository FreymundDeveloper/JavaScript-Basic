import gulp from 'gulp';
const { series, parallel, src, dest, task } = gulp;
import { deleteAsync as del } from 'del';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import tsify from 'tsify';
 
function clearDist(cb) { 
    cb() 
}
 
function copyHTML(cb) { 
    cb() 
}
 
function generateJS(cb) { 
    cb() 
}
 
export default series(clearDist, parallel(copyHTML, generateJS))