'use strict';

const _ = require('lodash');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const source = require('vinyl-source-stream');

module.exports = (options) => () => {
  return browserify({require: options.dependencies})
    .bundle()
    .pipe(source(options.build.js.vendor))
    .pipe(buffer())
    .pipe(gulp.dest(options.build.js.dir))
    .pipe(plugins.connect.reload());
};
