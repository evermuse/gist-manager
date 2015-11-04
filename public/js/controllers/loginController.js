var myApp = angular.module('myApp');

myApp.controller('loginController', ['$scope', '$route', '$localStorage',function($scope, $route, $localStorage) {

    //if (!$localStorage.message) {

      $localStorage.message = $route.current.params.id
      $scope.authToken = $route.current.params.id
      //$scope.newClient.authenticated = true;

    //}

    //$scope.newLogin = function (newClient) {
    //
    //  location.href = '/auth/login';
    //
    //  $scope.newClient.authenticated = true;
    //
    //
    //}

}]);