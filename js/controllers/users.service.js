var app = angular.module("whiteBoardApp");

app.service( 'UserAPI', ['$http', Users]);

function Users($http){
  return {
      rootUrl : 'http://localhost:3000/api/',

      callinfo : {
        method: 'GET',
        url: '/',
        data: {}
      },

      //Setup switch to take care of all the routes to the serverside
      //this will update our call info 
      setCall : function(type, id){
        console.log("Switch: ", type, id);
        switch(type)
        {
          case 'user' :
            this.callinfo.method = 'GET';
            this.callinfo.url = this.rootUrl + "users/" + id;
          break;

          case 'deleteUser' :
            this.callinfo.method = 'DELETE';
            this.callinfo.url = this.rootUrl + "users/" + id;
          break;

          case 'updateUser' :
            this.callinfo.method = 'PUT';
            this.callinfo.url = this.rootUrl + "users/" + id;
          break;

          case 'addUser' :
            this.callinfo.method = 'POST';
            this.callinfo.url = this.rootUrl + "users/";
          break;
          default: //if there is no matching type return false
            return false;
        }
        //if we do match a type, we will return true;
        return true;
      },


      callAPI : function(type, id, data){
          console.log("callAPI: ", type, id, data);
        //setup our api call and return true if successful
        var goAhead = this.setCall(type, id);

        if( goAhead )//if api type matches then...
        {
          if(data == {} || data == null || data == undefined)
          {//if we have no data, then we make the api call like so    
            return $http(this.callinfo);
          } else { //if we have data, then we pass our data
            return $http(this.callinfo, data);
          }
        }
      }

  }
}; //END USERS










/* END OF FILE */