var myApp = angular.module('myApp');

//obtains public gists for users not logged in
//var xhReq = new XMLHttpRequest();
//xhReq.open("GET", 'http://api.github.com/gists/public', false);
//xhReq.send(null);
//var jsonObject = JSON.parse(xhReq.responseText);


myApp.controller('libraryController', ['$scope', 'jsonObject', '$http', 'authService',function($scope, jsonObject, $http, $localStorage) {
    $scope.localStorage = $localStorage;
    //needs fixing
    //$scope.init = function($http) {
    //    $http({
    //        method: 'GET',
    //        url: 'http://api.github.com/gists/public'
    //    }).then(function successCallback(response) {
    //        jsonObject = response;
    //        console.log(jsonObject);
    //        return jsonObject;
    //    })
    //}
}]);