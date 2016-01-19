'use strict';

const del = require('del');

module.exports = (options) => () => {
  del(options.build.dir);
};
