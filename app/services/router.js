(function () {
  'use strict';

  angular
   .module('catalog.services')
   .config(['$stateProvider', function ($stateProvider) {

      $stateProvider
      .state('services', {
         url: '/services',
         controller: 'ServicesCtrl',
         templateUrl: 'app/services/services.html',
         resolve: {
            catalog: ['servicesRepo', function (repo) {
               return repo.getCatalog();
            }]
         }
      });

   }]);

})();
