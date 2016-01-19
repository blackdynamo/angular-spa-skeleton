'use strict';

const runSequence = require('run-sequence');

module.exports = () => (done) => {
  runSequence('build', 'compress', done);
};
