'use strict';

const runSequence = require('run-sequence');

module.exports = () => (done) => {
  runSequence('clean', 'lint', [
    'browserify:app',
    'browserify:vendor',
    'css',
    'fonts',
    'html',
    'partials'
  ], done);
};
