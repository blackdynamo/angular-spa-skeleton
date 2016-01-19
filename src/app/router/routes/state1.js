module.exports = {
  url: '/state1',
  templateUrl: 'partials/state1.html',

  // @ngInject
  controller: ($scope) => {
    $scope.isOpen = false;
    $scope.selectedMode = 'md-scale';
    $scope.selectedDirection = 'up';
  },
};
