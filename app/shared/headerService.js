(function () {
  'use strict';

  angular
   .module('catalog.shared')
   .factory('header', ['servicesRepo', function (repo) {

      var service = {
         title: '',
         logoUrl: '',
      };

      // Get Catalog
      repo
         .getCatalog()
         .then(function (catalog) {
            service.title   = catalog.title;
            service.logoUrl = catalog.logo_url;
         });

      return service;

   }]);

})();
