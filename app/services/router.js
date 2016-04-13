(function () {
  'use strict';

  angular
   .module('catalog.services')
   .config(['$stateProvider', function ($stateProvider) {

      $stateProvider
      .state('services', {
         url: '/services',
         resolve: {
            catalog: ['servicesRepo', function (repo) {
               return repo.getCatalog();
            }]
         },
         views: {
            '': {
               template: '<div ui-view="main"></div>'
            },
            'main@services': {
               controller: 'ServicesCtrl',
               templateUrl: 'app/services/services.html',
            }
         },
      })

      .state('services.details', {
         url: '/:slug',
         resolve: {
            catalogService: ['$stateParams', 'servicesRepo', function ($stateParams, repo) {
               return repo.getService($stateParams.slug);
            }]
         },
         views: {
            'main@services': {
               controller: 'ServiceDetailsCtrl',
               templateUrl: 'app/services/serviceDetails.html',
            }
         }
      });

   }]);

})();
