var express = require('express');
var router = express.Router();

var gistApp = angular.module('gistApp');

gistApp.config(function($routeProvider) {

  //routes
  $routeProvider
    .when('/', {

      templateUrl : 'views/default.html'

    })
    .when('/books', {

      templateUrl : 'views/books.html',
      controller : 'BooksController'

    })
    .when('/movies', {

      templateUrl : 'views/movies.html',
      controller : 'MoviesController'

    })
    .when('/other', {

      templateUrl : 'views/other.html',
      controller : 'OtherController'

    })
    .otherwise({

      templateUrl : 'views/404.html'

    });

})