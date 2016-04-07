(function () {
  'use strict';

  angular
   .module('catalog.services')
   .factory('servicesRepo', ['$http', function ($http) {

      var repo = {};

      repo.getCatalog = function () {
         return $http
                  .get('catalog.json', {cache: true})
                  .then(function (response) {
                     return response.data;
                  });
      };

      return repo;

   }]);

})();
