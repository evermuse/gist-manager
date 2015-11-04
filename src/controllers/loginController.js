var myApp = angular.module('myApp', ['ngStorage']);


myApp.controller('loginController', ['$scope', 'authService',function($scope, $localStorage) {
    $scope.localStorage = $localStorage;
}]);