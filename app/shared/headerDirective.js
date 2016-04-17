(function () {
   'use strict';

   angular
   .module('catalog.shared')
   .directive('catHeader', function () {
      var directive = {
         restrict: 'A',
         replace: true,
         templateUrl: 'app/shared/header.html',
         controller: ['$scope', 'header', controller]
      };

      return directive;

      function controller($scope, header) {

         $scope.getTitle = function () {
            return header.title;
         }

         $scope.getLogoUrl = function () {
            return header.logoUrl;
         }
      }
   });
})();
