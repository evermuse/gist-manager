var myApp = angular.module('myApp');

myApp.service('authService', [function(){
  localStorage.auth = url.params.token;
  myApp.value('authToken', localStorage.auth);
}])

alert('your auth token is ' + localStorage.auth);



var myApp = angular.module('myApp', ['ngStorage']);


myApp.controller('loginController', ['$scope', 'authService',function($scope, $localStorage) {
  $scope.localStorage = $localStorage;
}]);