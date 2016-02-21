var app = angular.module("whiteBoardApp");

app.service( 'ProjectsService', ['$http', Users]);

function Users($http){
  return {
    
      rootUrl : '../media/projects/',

      callInfo : {
        method: 'GET',
        url: '/',
        data: {}
      },

      getData : function(fileName){
          console.log("Fetching Project: ", fileName);



          if(fileName)
          {
            this.callInfo.url = this.rootUrl + fileName;
            return $http(this.callInfo);
          } 
      }

    }//End of return
}; //END PROJECTSSERVICE


/*
  Once user signs in, we need to get all of their projects
  Each project is stored in its own json file
  


*/





/* END OF FILE */