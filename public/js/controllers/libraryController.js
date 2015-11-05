var myApp = angular.module('myApp');
var jsonOb = angular.toJSON;

//obtains public gists for users not logged in
//var xhReq = new XMLHttpRequest();
//xhReq.open("GET", 'http://api.github.com/gists/public', false);
//xhReq.send(null);
//var jsonObject = JSON.parse(xhReq.responseText);


myApp.controller('libraryController', ['$scope', '$http', '$localStorage', '$location', function($scope, $http, $localStorage, $location) {
    $scope.localStorage = $localStorage;
    //needs fixing UserAgent cannot be set due to it being a reserved type of name =/
    $scope.logged =
    //Broken logged code
    //   $http({
    //        method: 'GET',
    //        url: 'http://api.github.com/gists',
    //        headers: {
    //            authorization: "Bearer " + $scope.accessToken,
    //            'User-Agent': 'POUNDBUTT'
    //        }
    //    }).then(function successCallback(response) {
    //        jsonObject = response;
    //        console.log(jsonObject);
    //        return jsonObject;
    //    });
    $scope.notLogged =
        $http({
            method: 'GET',
            url: '/auth/gists',
            headers: {
                authorization: "Bearer " + $localStorage.message
            }

        }).then(function successCallback(response) {
            //console.log(response);
            jsonObject = JSON.parse(response.data);
            console.log(jsonObject);
            return jsonObject;
        });
}]);