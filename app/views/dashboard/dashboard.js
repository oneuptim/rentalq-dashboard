'use strict';
var app = angular.module('rentalQ.dashboard', ['ngRoute', 'firebase'])


app.config(['$routeProvider', function($routeProvider) {
  console.log('hit Dashboard js');
  $routeProvider.when('/dashboard', {
    templateUrl: 'views/dashboard/dashboard.html',
    controller: 'DashboardCtrl'
  });
}])

app.controller('DashboardCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  console.log('DashboardCtrl loaded');
  var ref = firebase.database().ref('users');
  // download the data into a local object
  // $scope.data = $firebaseObject(ref);
  // putting a console.log here won't work, see below
  // var ref = new Firebase('https://courses-af9da.firebaseio.com/');
  // var ref = firebase.database().ref();
  $scope.contacts = $firebaseArray(ref);
  console.log($scope.contacts, '&&&&&&&&');
  //
  $scope.addContact = function(){
    $scope.contacts.$add({
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

  $scope.removeContact = function(contact){
    $scope.contacts.$remove(contact);
  }

}]);
