////internal routing
//angular.module('gistApp', [
//
//  'ngRoute',
//  'ngAnimate'
//
//]);
//
//var gistApp = angular.module('gistApp');
//
//gistApp.config(function() {
//
//  .run(['$rootScope', 'APP_VERSION', function($rootScope, APP_VERSION) {
//
//    //initialize
//    $rootScope.APP_VERSION = APP_VERSION;
//
//    //check local storage for auth
//
//  })
//  .config(function($routeProvider) {
//
//    //routes
//    $routeProvider
//        .when('/', {
//
//          templateUrl : 'views/default.html'
//
//        })
//        .when('/books', {
//
//          templateUrl : 'views/books.html',
//          controller : 'BooksController'
//
//        })
//        .when('/movies', {
//
//          templateUrl : 'views/movies.html',
//          controller : 'MoviesController'
//
//        })
//        .when('/other', {
//
//          templateUrl : 'views/other.html',
//          controller : 'OtherController'
//
//        })
//        .otherwise({
//
//          templateUrl : 'views/404.html'
//
//        });
//
//  });
//}