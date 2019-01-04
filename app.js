(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope', '$timeout'];
function CounterController($scope, $timeout) {
  $scope.counter = 0;

  $scope.upCounter = function () {
    $timeout(function () {
      $scope.counter++;
      console.log("Counter incremented!");
    }, 2000);


  // $scope.upCounter = function () {
  //   //Set a Timeout to create a delay for the Counter
  //   setTimeout(function (){
  //     $scope.$apply(function () {
  //       $scope.counter++;
  //     //Make sure that this function is executed
  //       console.log("Counter incremented!");
  //   });
  //   }, 2000);

  // $scope.upCounter = function () {
  //   //Set a Timeout to create a delay for the Counter
  //   setTimeout(function (){
  //     $scope.counter++;
  //     //Make sure that this function is executed
  //     console.log("Counter incremented!");
  //     $scope.$digest();
  //   }, 2000);

  };
}

})();
