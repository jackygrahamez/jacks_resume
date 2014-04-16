'use strict';

angular.module('jacksResumeApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.phone = "202-494-1707";
    $scope.email = "jackygrahamez@gmail.com";

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
