'use strict';

/**
 * @ngdoc function
 * @name curifiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the curifiApp
 */
angular.module('curifiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
