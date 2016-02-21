var app = angular.module('whiteBoardApp');

app.controller('ProjectsController', ['$scope', '$routeParams', '$location', 'ProjectsService', 'UserAPI', ProjectsController]);

	function ProjectsController($scope, $routeParams, $location, ProjectsService, UserAPI){

		var vm = this;
		vm.projects = [];
		vm.curProject = [];

		console.log("vm.projects: ", vm.projects);
		//if (vm.projects == [])
		//{
			console.log("getting manifest");
			//Need to get our local projects initially
			ProjectsService.getData('project-manifest.json').then(function(response){
				if(response){
					vm.projects = response.data.projects;
					console.log("projects: ", response.data.projects);

					vm.projects.forEach(function(project, index){
							if(project.image === '')
							{
								project.image === '../media/placeholder/ph-1.png';
							}
					});

				} else {
					console.error("Did not recieve any data.");
				}
			});
		//}


		//CRUD FUNCTIONALITY OF OUR LOCAL PROJECTS
		vm.addProject = function(projectName) {
			console.log("Adding Project: ", projectName);
			var newprojectNum = vm.projects.length + 1;
            var myDate = Date.now();
            var newproject = {
                id: newprojectNum,
                name: projectName,
                date: myDate,
                story: [],
                users: []
            }
            vm.projects.push(newproject);
            console.log(vm.projects);

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







