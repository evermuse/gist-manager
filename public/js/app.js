//internal routing
var myApp = angular.module('myApp', [

  'ngRoute',
  'ngStorage'

]);

myApp.config(function($routeProvider) {

    //configs




    //routes
    $routeProvider
      .when('/', {

        templateUrl : 'views/new.html',
        controller : 'newController'

      })
      .when('/auth/github/callback/:id', {

        templateUrl : 'views/login.html',
        controller : 'loginController'

      })
      .when('/library', {

        templateUrl : 'views/library.html',
        controller : 'libraryController'

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

    //$rootScope.newClient = {};

  }]);