'use strict';

const babelify = require('babelify');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const source = require('vinyl-source-stream');
const watchify = require('watchify');

module.exports = (options) => {
  function bundle(b) {
    return b.bundle()
      .pipe(source(options.build.js.app))
      .pipe(buffer())
      .pipe(plugins.sourcemaps.init({loadMaps: true}))
      .pipe(plugins.ngAnnotate())
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(options.build.js.dir))
      .pipe(plugins.connect.reload());
  }

  return () => {
    var b = browserify({
      bundleExternal: false,
      cache: {},
      debug: true,
      entries: options.src.scripts.app,
      fullPaths: false,
      packageCache: {},
      transform: [babelify]
    });

    if (options.watch) {
      b = watchify(b);
      b.on('update', () => bundle(b));
      b.on('log', plugins.util.log);
    }

    return bundle(b);
  };
};
