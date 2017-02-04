'use strict';
var app = angular.module('rentalQ.registration', ['ngRoute', 'firebase'])


app.config(['$routeProvider', function($routeProvider) {
  console.log('Hit registration Routes');
  $routeProvider.when('/registration', {
    templateUrl: 'views/registration/registration.html',
    controller: 'RegistrationCtrl'
  });
}])

app.controller('RegistrationCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  console.log('RegistrationCtrl loaded');
  var ref = firebase.database().ref('users');
  // download the data into a local object
  // $scope.data = $firebaseObject(ref);
  // putting a console.log here won't work, see below
  // var ref = new Firebase('https://courses-af9da.firebaseio.com/');
  // var ref = firebase.database().ref();
  $scope.registration = $firebaseArray(ref);
  console.log($scope.registration, '&&&&&&&&');
  //
  $scope.addContact = function(){
    $scope.registration.$add({
      name: $scope.name,
      email: $scope.email,
      phone: $scope.phone
    }).then (function(ref){
      console.log(ref, '<<<<<<<<<<');
      var id = ref.$id;
      // console.log('Added contact of ID: ', id);
    });

    $scope.name = '';
    $scope.email = '';
    $scope.phone = '';
  }

  $scope.removeApplicant = function(contact){
    $scope.registration.$remove(contact);
  }

}]);
