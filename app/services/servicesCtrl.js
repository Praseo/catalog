(function () {
   'use strict';

   angular
   .module('catalog.services')
   .controller('ServicesCtrl', ['$scope', 'catalog', function ($scope, catalog) {

        $scope.catalog = catalog;
   }]);

}());
