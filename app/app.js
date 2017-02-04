'use strict';

// Declare app level module which depends on views, and components
angular.module('rentalQ', [
  'ngRoute',
  'firebase',
  'rentalQ.applications',
  'rentalQ.dashboard',
  'rentalQ.login',
  'rentalQ.registration',
  'rentalQ.app-details',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);
