'use strict';
// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

var app = angular.module('rentalQ.app-details', ['ngRoute', 'firebase'])


app.config(['$routeProvider', function($routeProvider) {
  console.log('hit App Details js');
  $routeProvider.when('/app-details/:id', {
    templateUrl: 'views/applicationDetails/app-details.html',
    controller: 'AppDetailsCtrl'
  });
}])

app.controller('AppDetailsCtrl', ['$scope', '$firebaseArray', '$firebaseObject', '$routeParams', function($scope, $firebaseArray, $firebaseObject, $routeParams) {
  // console.log('AppDetailsCtrl loaded');


  var id = $routeParams.id
  console.log(id, "<<<<<<<<<<");

  var ref = firebase.database().ref('users').child(id);
  var query = ref.orderByChild('users').equalTo(id);
  // const location = $firebaseArray(ref);
  // .once('value').then(function(snapshot) {
  //   var value = snapshot.val();
  //   console.log('location:', value);
  // })
  // .catch(next);


  // download the data into a local object
  // $scope.data = $firebaseObject(ref);
  // putting a console.log here won't work, see below
  // var ref = new Firebase('https://courses-af9da.firebaseio.com/');
  // var ref = firebase.database().ref();

  $scope.applicatant = $firebaseObject(ref);
  console.log($scope.applicatant, '&&&&&&&&');

}]);
