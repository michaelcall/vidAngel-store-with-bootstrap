angular.module('app1').directive('movieDir', function(){
    return {
      restrict: 'AE',
      templateUrl: './views/tmpl.html',
      scope: {
        vidgame: '=',
        getdeets: '&'

      }
    };
});
