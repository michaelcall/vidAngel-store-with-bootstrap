angular.module('app1').controller('movieController', function($scope, service){

    service.getMovies()
      .then(function(res){
        $scope.movies = res
        console.log($scope.movies);
        return $scope.movies
      })

    service.getRecentAdded()
      .then(function(res){
        $scope.recentAdded = res
        console.log($scope.recentAdded);
        return $scope.recentAdded
      })

})
