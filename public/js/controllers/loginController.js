var myApp = angular.module('myApp');

myApp.controller('loginController', ['$scope', '$route', '$localStorage',function($scope, $route, $localStorage) {
   $localStorage.message = $route.current.params.id
    $scope.authToken = $route.current.params.id

}]);