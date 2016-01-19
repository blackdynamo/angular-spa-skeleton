'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

module.exports = (options) => () => gulp.src(options.src.html)
  .pipe(gulp.dest(options.build.dir))
  .pipe(plugins.connect.reload());
