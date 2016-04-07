(function () {
  'use strict';

  var app = angular.module('catalog');

  var config = {
    appErrorPrefix:         '[Catalog Error] ',
    version:                '0.0.1'
  };

  app.constant('config', config);

  // Produce one digest cycle for xhr requests arriving at around the same time
  app.config(['$httpProvider', function ($httpProvider) {
     $httpProvider.useApplyAsync(true);
  }]);

  app.config(['$locationProvider', function ($locationProvider) {
     $locationProvider.html5Mode(true);
  }]);

  app.config(['$urlRouterProvider', function ($urlRouterProvider) {
     $urlRouterProvider.otherwise('/services');
  }]);

})();
