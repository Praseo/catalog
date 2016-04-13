(function () {
  'use strict';

  angular
   .module('catalog.services')
   .factory('servicesRepo', ['$http', function ($http) {

      var baseUrl = 'data/';
      var repo = {};

      repo.getCatalog = function () {
         return $http
                  .get(baseUrl + 'catalog.json', {cache: true})
                  .then(function (response) {
                     return response.data;
                  });
      };

      repo.getService = function (slug) {
         return $http
                  .get(baseUrl + '/services/' + slug + '.json', {cache: true})
                  .then(function (response) {
                     return response.data;
                  });
      };

      return repo;

   }]);

})();
