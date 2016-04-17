(function () {
   'use strict';

   angular
   .module('catalog.services')
   .controller('ServiceDetailsCtrl', ['$scope', 'catalog', 'catalogService',
                            function ($scope, catalog, catalogService) {

        $scope.catalog = catalog;
        $scope.catalogService = catalogService;
   }]);

}());
