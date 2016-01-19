'use strict';

module.exports = {
  browserifyApp: require('./browserify-app'),
  browserifyVendor: require('./browserify-vendor'),
  build: require('./build'),
  clean: require('./clean'),
  fonts: require('./fonts'),
  html: require('./html'),
  lint: require('./lint'),
  partials: require('./partials'),
  release: require('./release'),
  sass: require('./sass'),
  uglify: require('./uglify'),
  watch: require('./watch')
};
