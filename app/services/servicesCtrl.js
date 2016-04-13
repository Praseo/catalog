(function () {
   'use strict';

   angular
   .module('catalog.services')
   .controller('ServicesCtrl', ['$scope', 'catalog', function ($scope, catalog) {
        $scope.catalogLevels =
           _.chain(catalog.levels)
            .map(function (lvl) {
               lvl.services = _.filter(catalog.services, {level_id: lvl.id});

               return lvl;
            })
            .value();

      $scope.catalog = catalog;
   }]);

}());
