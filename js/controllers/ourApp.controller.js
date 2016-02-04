'use strict';
var app = angular.module("myApp");

//Setup our app's controllers -------------------------------------------
app.controller( 'AppController', ['$scope', '$route', AppController] );



//Function that takescare of our controller------------------------------
function AppController($scope, $route){

	//vm for view model -------------
	var vm = this;

};//End Ex1Controller





app.directive('gsChangeBackground', function() {
  return {
    link: function(scope, element, attrs) {

    	console.log(attrs);

      var oldColor = element.css('background-color');

      element.on('mouseenter', function(event) {
        element.css('background-color', attrs.newColor);
        element.css('color', 'white');
        element.css('background', 'url("http://media.thedenverchannel.com/photo/2012/09/28/MHL_Broncos-Logo_1348849403124_161792_ver1.0_320_240.jpg")');
      });

      element.on('mouseleave', function(event) {
        element.css('background', oldColor)
        element.css('background-color', oldColor);
        element.css('color', '#082050');

      })
    }
  };
});


app.directive('gsBigRedCircle', function() {
  return {

    controller: ['$scope', function($scope) {
      $scope.sayHi = function() {
        alert("Hi! Thanks for clicking on me!");
      };
    }],
    
    template: '<div class="circle">Click me!</div>',
    link: function(scope, element, attrs) {

      element.on('click', function() {
        scope.sayHi();
      });

    }
  };
});



app.directive('jrDice', function() {
  return {

    controller: ['$scope', function($scope) {
      $scope.changeNum = function() {
        return Math.floor(Math.random() * 6 + 1);
      };
    }],
    
    template: '<div class="dice">!</div>',
    link: function(scope, element, attrs) {
      
      element.on('click', function() {
        element.html("<div class='dice'>" +scope.changeNum() + "</div>");      
      });

    }
  };
});

app.directive('gsParent', function(){
	return{
		templateUrl: "views/partials/parent.html",
		controller: ['$scope', function($scope) {
      		var vm = this;
      		vm.parentMessage = function() {
        		alert("I live on the parent!");
      		};
    	}],
	};
});


app.directive('gsChild', function(){
	return{
		templateUrl: "views/partials/child.html",
		require: '^^gsParent',
		link: function(scope, element, attrs, ctrl) {
      		element.on('click', function() {
        		ctrl.parentMessage();
      		});
      	}
	};
});







/*END OF FILE*/