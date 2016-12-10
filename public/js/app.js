angular.module('app1', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: './views/login.html',
        controller: 'loginController'
      })
      .state('movie', {
        url: '/movie',
        templateUrl: './views/movie.html',
        controller: 'movieController'
      })
      .state('details', {
        url: '/details',
        templateUrl: './views/details.html',
        controller: 'detailsController'
      })
    });
