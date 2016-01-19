'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');

module.exports = (options) => (done) => {
  runSequence('clean', 'lint', [
    'browserify:vendor',
    'css',
    'fonts',
    'html',
    'partials',
    'watchify:app'
  ], () => {
    gulp.watch(options.src.styles.all, ['css']);
    gulp.watch(options.src.html, ['html']);
    gulp.watch(options.src.scripts.all, ['lint']);
    gulp.watch(options.src.partials, ['partials']);

    done();
  });
};
