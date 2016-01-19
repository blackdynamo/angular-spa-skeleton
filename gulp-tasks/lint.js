'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

module.exports = (options) =>
  () => gulp.src(options.src.scripts.all)
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())
    .pipe(plugins.eslint.failAfterError())
    .pipe(plugins.notify((file) => file.eslint.errorCount === 0 ? false : "ESLint failed."));
