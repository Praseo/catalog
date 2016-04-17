(function () {
   'use strict';

   angular
   .module('catalog.services')
   .controller('ServicesCtrl', ['$scope', '$mdDialog', '$mdMedia', 'catalog',
                      function ($scope, $mdDialog, $mdMedia, catalog) {

      $scope.catalogLevels =
         _.chain(catalog.levels)
          .map(function (lvl) {
            lvl.services = _.filter(catalog.services, {level_id: lvl.id});

            return lvl;
          })
          .value();

      $scope.launchService = function (service, $event) {
         var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
         $mdDialog.show({
            controller: 'LaunchServiceModalCtrl',
            templateUrl: 'app/services/launchServiceModal.html',
            locals: {service: service},
            parent: angular.element(document.body),
            targetEvent: $event,
            clickOutsideToClose:true,
            fullscreen: useFullScreen
         })
         .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
         }, function() {
            $scope.status = 'You cancelled the dialog.';
         });
         $scope.$watch(function() {
            return $mdMedia('xs') || $mdMedia('sm');
         }, function(wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
         });
      };

   }]);

}());
