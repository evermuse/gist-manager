//internal routing
var gistApp = angular.module('gistApp', ['ngRoute', 'ngAnimate']);

gistApp.config(function ($routeProvider) {

  //configs

  //routes
  $routeProvider.when('/', {

    templateUrl: 'views/default.html'

  }).when('/#/auth/github/callback/:token', {

    templateUrl: 'views/login.html',
    controller: 'loginController'

  }).when('/new', {

    templateUrl: 'views/new.html',
    controller: 'newController'

  }).when('/delete', {

    templateUrl: 'views/delete.html',
    controller: 'deleteController'

  }).otherwise({

    templateUrl: 'views/404.html'

  });
}).run(['$rootScope', 'APP_VERSION', function ($rootScope, APP_VERSION) {

  //initialize
  $rootScope.APP_VERSION = APP_VERSION;
}]);

//