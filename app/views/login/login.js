'use strict';
var app = angular.module('rentalQ.login', ['ngRoute', 'firebase'])


app.config(['$routeProvider', function($routeProvider) {
  console.log('Hit login Routes');
  $routeProvider.when('/login', {
    templateUrl: 'views/login/login.html',
    controller: 'LoginCtrl'
  });
}])

app.controller('LoginCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  console.log('LoginCtrl loaded');
  var ref = firebase.database().ref('users');
  // download the data into a local object
  // $scope.data = $firebaseObject(ref);
  // putting a console.log here won't work, see below
  // var ref = new Firebase('https://courses-af9da.firebaseio.com/');
  // var ref = firebase.database().ref();
  $scope.login = $firebaseArray(ref);
  console.log($scope.login, '&&&&&&&&');
  //
  $scope.addContact = function(){
    $scope.login.$add({
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
    $scope.login.$remove(contact);
  }

}]);
