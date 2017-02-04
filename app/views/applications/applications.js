'use strict';
var app = angular.module('rentalQ.applications', ['ngRoute', 'firebase'])


app.config(['$routeProvider', function($routeProvider) {
  console.log('Hit applications Routes');
  $routeProvider.when('/applications', {
    templateUrl: 'views/applications/applications.html',
    controller: 'ApplicationsCtrl'
  });
}])

app.controller('ApplicationsCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  console.log('ApplicationsCtrl loaded');
  var users = firebase.database().ref('users');
  var address = firebase.database().ref('rentalHistoryPrevAddress');
  var emergency = firebase.database().ref('emergency');
  var utilities = firebase.database().ref('utilities');
  var documents = firebase.database().ref('documents');
  var incomeEmployment = firebase.database().ref('incomeEmployment');
  var incomeRetired = firebase.database().ref('incomeRetired');
  var incomeSelfEmployed = firebase.database().ref('incomeSelfEmployed');
  var occupantsCoApplicants = firebase.database().ref('occupantsCoApplicants');
  var occupantsDependents = firebase.database().ref('occupantsDependents');
  var occupantsPets = firebase.database().ref('occupantsPets');
  var rentalHistoryCurAddress = firebase.database().ref('rentalHistoryCurAddress');
  var applicationInfo = firebase.database().ref('applicationInfo');

  // var query = ref.orderByChild('users').equalTo(id);
  // console.log(users, '$$$$$$$$$$$$$$$$$$$$$$$');

  $scope.applications = $firebaseArray(users);
  $scope.address = $firebaseArray(address);
  $scope.emergency = $firebaseArray(emergency);
  $scope.utilities = $firebaseArray(utilities);
  $scope.documents = $firebaseArray(documents);
  $scope.incomeEmployment = $firebaseArray(incomeEmployment);
  $scope.incomeRetired = $firebaseArray(incomeRetired);
  $scope.incomeSelfEmployed = $firebaseArray(incomeSelfEmployed);
  $scope.occupantsCoApplicants = $firebaseArray(occupantsCoApplicants);
  $scope.occupantsDependents = $firebaseArray(occupantsDependents);
  $scope.occupantsPets = $firebaseArray(occupantsPets);
  $scope.rentalHistoryCurAddress = $firebaseArray(rentalHistoryCurAddress);
  $scope.applicationInfo = $firebaseArray(applicationInfo);

  console.log($scope.rentalHistoryCurAddress, '&&&&&&&&');
  //
  $scope.addContact = function(){
    $scope.applications.$add({
      name: $scope.name,
      email: $scope.email,
      phone: $scope.phone
    }).then (function(users){
      // console.log(users, '<<<<<<<<<<');
      var id = ref.$id;
      // console.log('Added contact of ID: ', id);
    });

    $scope.name = '';
    $scope.email = '';
    $scope.phone = '';
  }

  $scope.removeApplicant = function(contact){
    $scope.applications.$remove(contact);
  }

}]);
