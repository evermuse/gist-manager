//internal routing
var gistApp = angular.module('gistApp', [

  'ngRoute',
  'ngStorage'

]);

gistApp.config(function($routeProvider) {

    //configs





    //routes
    $routeProvider
      .when('/', {

        templateUrl : 'views/new.html',
        controller : 'newController'

      })
      .when('/#/auth/github/callback/:token', {

        templateUrl : 'views/new.html',
        controller : 'newController'

      })
      .when('/login', {

        templateUrl : 'views/library.html',
        controller : 'library-Controller'


      })
      .when('/delete', {

        templateUrl : 'views/delete.html',
        controller : 'deleteController'

      })
      .otherwise({

        templateUrl : 'views/404.html'

      });

  })
  .run(['$rootScope', function($rootScope) {

    //initialize

  }]);

