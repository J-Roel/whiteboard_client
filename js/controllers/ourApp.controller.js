'use strict';
var app = angular.module("whiteBoardApp");

//Setup our app's controllers -------------------------------------------
app.controller( 'AppController', ['$scope', '$route', AppController] );



//Function that takescare of our controller------------------------------
function AppController($scope, $route){
	//vm for view model
	var vm = this;
  vm.title = 'White Board';
};//End Ex1Controller

app.directive("customHeader", function() {
  return {
      restrict: "E",
      templateUrl: "/views/partials/header.html"
  }
});







/*END OF FILE*/