var app = angular.module('whiteBoardApp');

app.controller('ProjectsController', ['$scope', '$routeParams', '$location', 'ProjectsService', 'UserAPI', ProjectsController]);

	function ProjectsController($scope, $routeParams, $location, ProjectsService, UserAPI){

		var vm = this;
		vm.projects = [];
		vm.curProject = [];

		console.log("vm.projects: ", vm.projects);
		

			console.log("getting manifest");
			//Need to get our local projects initially
			ProjectsService.getData('manifest.json').then(function(response){
				if(response){
					console.log("---: ", response.data.projects);
					vm.projects = response.data.projects;
					vm.projects.forEach(function(project){
						console.log("project: ", project);
					});


				} else {
					console.error("Did not recieve any data.");
				}
			});


		//CRUD FUNCTIONALITY OF OUR LOCAL PROJECTS
		vm.addProject = function(projectName) {
			console.log("Adding Project: ", projectName);
			if(projectName)
			{
				fileName = projectName.toLowerCase().split(" ").join("-");
				folderName = fileName;
				console.log("folderName: ", folderName);
				fileName = fileName + ".json";
				console.log("fileName: ", fileName)

				var newprojectNum = vm.projects.length + 1;


	            var myDate = Date.now();
	            var newproject = {
	                id: newprojectNum,    
					"name" : "Test Project",
					"filename" : "test-project/test-project.json",
					"date" : "Feb 20, 2016",
					"id" : 1,
					"image" : "../media/projects/test-project.jpg",
					"scrum_master" : "John Doe",
					"project_owner" : "Sampson the Dog",
					"team" : ["Cat in the Hat, Fish, Zebra"],
					"client_company" : "Really Big Company, Co.",
					"users" : [1,2,3,4,5]
				};

	            vm.projects.push(newproject);
	            console.log(vm.projects);
	        }

		};
		vm.removeProject = function(projectId){
			for(var i = 0; i < vm.projects.length; i++)
              {
                if(vm.projects[i].id == projectId){
                    vm.projects.splice(vm.projects[i],1);
                }
              }
		};
		vm.addStory = function(story){
			for(var i = 0; i < vm.projects.length; i++)
              {
                if(vm.projects[i].id == projectId){
                    console.log(vm.projects[i].id, story);
                    console.log("Project: ", vm.projects[i]);
                    vm.projects[i].story.push( 
                    	{ 
                    		name : story,
                    		status : 'started'
                    	}
                    );
                }
              }
		};
		vm.removeStory = function(projectId, storyIndex){
			for(var i = 0; i < vm.projects.length; i++)
	        {
	        	if(vm.projects[i].id == projectId){
	        		vm.projects[i].story.splice(storyIndex, 1);
	        	}
	        }
	    };

        vm.loadProject = function(filename){
        	console.log("Loading Project")
        	
        	//Get our promise from the projects service:
			ProjectsService.getData(filename).then(function(response){
			if(response){
				
				vm.curProject = response.data.project;
            	$location.path( '/project-room/');
		
			} else {
				console.error("Can not get project.");
			}
		});
            
        };




};//End Projects Controller







