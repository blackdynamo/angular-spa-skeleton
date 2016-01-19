const angular = require('angular');

angular
  .module('app', [
    require('angular-ui-router'),
    require('angular-material'),
    require('angular-animate'),
    require('angular-aria')])
  .config(require('./router'));
