'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

module.exports = (options) => () => gulp.src(options.src.fonts.all)
  .pipe(gulp.dest(options.build.fonts.dir))
  .pipe(plugins.connect.reload());
