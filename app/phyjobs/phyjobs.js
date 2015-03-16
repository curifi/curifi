'use strict';

/**
 * @ngdoc function
 * @name curifiApp.controller:PhyjobsCtrl
 * @description
 * # PhyjobsCtrl
 * Controller of the curifiApp
 */
angular.module('curifiApp')
  .controller('PhyjobsCtrl', function ($scope) {

    $scope.search=[];

    $scope.appliedjobs = [
        {
            "facility" : "El Camino Hospitals",
            "address" : " 2500 Grant Rd, Mountain View, CA 94040",
            "timeslot" : "3 a.m. to 9 a.m.",
            "timeofday" : "A.M",
            "description" : "Seeking a BC/BE Non-Invasive Cardiologist to join a hospital affiliated single-specialty group in Mountain View, CA. This is an employed position with a team of physicians who have trained at many prestigous institions.",
            "jobtype" : "hourly",
            "salary" : "$$",
            "speciality" : "Cardiology",
            "from" : "1/1/2015",
            "to" : "1/1/2016"
        },
        {
            "facility" : "Palo Alto Medical Foundation",
            "address" : "701 East El Camino Real Mountain View, CA 94040",
            "timeslot" : "9 a.m. to 3 p.m.",
            "timeofday" : "A.M",
            "description" : "Seeking a BC/BE Non-Invasive Cardiologist to join a hospital affiliated single-specialty group in Mountain View, CA. This is an employed position with a team of physicians who have trained at many prestigous institions.",
            "jobtype" : "hourly",
            "salary" : "$$$$",
            "speciality" : "Neurology",
            "from" : "1/1/2015",
            "to" : "1/1/2016"
        },
        {
            "facility" : "O'Connor Hospital",
            "address" : "2105 Forest Ave San Jose, CA 95128",
            "timeslot" : "3 p.m. to 9 p.m.",
            "timeofday" : "P.M",
            "description" : "Seeking a BC/BE Non-Invasive Cardiologist to join a hospital affiliated single-specialty group in Mountain View, CA. This is an employed position with a team of physicians who have trained at many prestigous institions.",
            "jobtype" : "hourly",
            "salary" : "$$$$",
            "speciality" : "Cardiology",
            "from" : "1/1/2015",
            "to" : "1/1/2016"
        }
    ]
  });
