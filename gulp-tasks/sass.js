'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');


module.exports = (options) => {
  gulp.src(options.paths)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(options.build.css.dir));
};
