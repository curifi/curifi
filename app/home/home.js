'use strict';

/**
 * @ngdoc function
 * @name curifiApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the curifiApp
 */
angular.module('curifiApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
