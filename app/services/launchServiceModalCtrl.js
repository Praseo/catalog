(function () {
   'use strict';

   angular
   .module('catalog.services')
   .controller('LaunchServiceModalCtrl', ['$scope', '$mdDialog', '$state', 'service',
                                 function ($scope, $mdDialog, $state, service) {

      $scope.service = service;

      $scope.showMore = function () {
         $state.go('services.details', {slug: service.slug});
         $scope.hide();
      };

      $scope.hide = function() {
         $mdDialog.hide();
      };

      $scope.cancel = function() {
         $mdDialog.cancel();
      };

      $scope.answer = function(answer) {
         $mdDialog.hide(answer);
      };

   }]);

}());
