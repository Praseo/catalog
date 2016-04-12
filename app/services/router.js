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
            catalogService: ['$stateParams', 'catalog', function ($stateParams, catalog) {
               return _.find(catalog.services, {slug: $stateParams.slug});
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
