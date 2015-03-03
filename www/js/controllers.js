angular.module('saldo.io.controllers', [])

.controller('ListCtrl', function($scope, BalancesService) {
  $scope.accounts = [];

  $scope.refresh = function () {
    BalancesService.refresh(function (error, accounts) {
      if (error) throw error;
      $scope.accounts = accounts;
      $scope.$apply();

      $scope.$broadcast('scroll.refreshComplete');
    });
  }

  $scope.refresh();

})
