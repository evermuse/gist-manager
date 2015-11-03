angular.module('gistApp', [

  'ngRoute',
  'ngAnimate'

]);

var OAuth2 = require('oauth').OAuth2;
var oauth2 = new OAuth2(

  process.env.GITHUB_CLIENT_ID,     //client id
  process.env.GITHUB_CLIENT_SECRET, //secret key
  'https://github.com/',            //provider's base url
  'login/oauth/authorize',          //provider's login path
  'login/oauth/access_token',       //provider's access_token url
  null                              //options

);




var gistApp = angular.module('gistApp');

gistApp.config(function() {

  .run(['$rootScope', 'APP_VERSION', function($rootScope, APP_VERSION) {

    //initialize
    $rootScope.APP_VERSION = APP_VERSION;

    //check local storage for auth

  });