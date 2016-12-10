angular.module('app1').service('service', function($http){

  var baseUrl = '/api/getNewRelease'
   var baseUrl2 = '/api/m/'
   var baseUrl3 = '/api/getRecentAdded'

    this.getMovies = function() {
      return $http( {
          method: "GET",
          url: baseUrl
          }).then(function(response){
            return response.data;
      });
    }

    this.getRecentAdded = function() {
      return $http( {
          method: "GET",
          url: baseUrl3
          }).then(function(response){
            return response.data;
      });
    }
})
