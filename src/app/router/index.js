const routes = require('./routes');

// @ngInject
module.exports = ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/state1');

  $stateProvider
    .state('state1', routes.state1);
};
