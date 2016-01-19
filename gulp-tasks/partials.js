'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

module.exports = (options) => () => gulp.src(options.src.partials)
  .pipe(gulp.dest(options.build.partials.dir))
  .pipe(plugins.connect.reload());
