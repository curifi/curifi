'use strict';

/**
 * @ngdoc function
 * @name curifiApp.controller:PhyjobsCtrl
 * @description
 * # PhyjobsCtrl
 * Controller of the curifiApp
 */
angular.module('curifiApp')
  .controller('JobCtrl', function ($scope) {

    $scope.job = {
            "facility" : "O'Connor Hospital",
            "address" : "2105 Forest Ave San Jose, CA 95128",
            "timeslot" : "3 p.m. to 9 p.m.",
            "timeofday" : "P.M",
            "description" : "Seeking a BC/BE Non-Invasive Cardiologist to join a hospital affiliated single-specialty group in Mountain View, CA. This is an employed position with a team of physicians who have trained at many prestigous institions.",
            "jobtype" : "hourly",
            "salary" : "$$$$",
            "speciality" : "Cardiology",
            "from" : "1/1/2015",
            "to" : "1/1/2016",
            "id" : "111"
        };
  });
