'use strict';

/**
 * @ngdoc overview
 * @name curifiApp
 * @description
 * # curifiApp
 *
 * Main module of the application.
 */
angular
  .module('curifiApp', [
    'ngAnimate',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/facilities', {
        templateUrl: 'facilities/facilities.html',
        controller: 'FacilitiesCtrl'
      })
      .when('/physicians', {
        templateUrl: 'physicians/physicians.html',
        controller: 'PhysiciansCtrl'
      })
      .when('/phyjobs', {
        templateUrl: 'phyjobs/phyjobs.html',
        controller: 'PhyjobsCtrl'
      })
      .when('/about', {
        templateUrl: 'about/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
