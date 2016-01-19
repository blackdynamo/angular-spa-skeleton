'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

module.exports = (options) => () => gulp.src(options.paths)
  .pipe(plugins.sourcemaps.init({loadMaps: true}))
  .pipe(plugins.uglify())
  .pipe(plugins.sourcemaps.write('./'))
  .pipe(gulp.dest(options.build.js.dir));
