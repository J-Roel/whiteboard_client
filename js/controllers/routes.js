var app = angular.module("whiteBoardApp");



app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'ProjectsController as PC',
      })
      .when('/project-room', {
      	templateUrl: 'views/project-room.html',
      	controller: 'ProjectsController as PC'
      })
});
