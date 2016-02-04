'use strict';
var app = angular.module('myApp');

//Setup our app's filters -------------------------------------------
app.filter('upperletter', function(){

	return function (input, param){
		console.log(input);

		
		
		var output = input || '';	
		
			output = output.split('').map(function(i){
				if(param.search(i) != -1){
					return i.toUpperCase();
				}else{
					return i;
				}
			});
		
		return output.join('');
	};


});



//Setup our app's filters -------------------------------------------
app.filter('redact', function(){

	return function (input, param){
	

		var output = input || '';	
	console.log("INPUT: ", input, "OUTPUT: ", output, "PARAM: ", param);

			output = output.split(' ').map(function(word){
				if(param.search(word) != -1){
					return word = 'REDACTED ';
				}else{
					return word + ' ';
				}
			});
		
		return output.join('');
	};


});


app.filter('upper', function(){

	return function (input){

		var output = input || '';
		return output.toUpperCase();	

	};


	return output;

});



app.filter('kebabCase', function(){
	
	return function(input){
	
		var output = input || '';
		return output.split('_').join('-');
	};

	return output;
});



app.filter('camel', function(){
	
	return function(input){
		var output = input || '';
		if( output.length > 0){
			var words = output.split(/-|_|[' ']/);
			if (words.length > 1){
				for(var i = 1; i <= words.length-1; i++)
				{ 
					if(words[i].length > 0){
						words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);						

					}
				}

			}		
		return output = words.join('');
		}//end if


	};

	return output;
});













/*END OF FILE*/