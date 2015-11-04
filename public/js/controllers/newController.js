angular.module('myApp')
  .controller('newController', [

    '$scope',
    function($scope) {

      $scope.newGist = { 'named' : false };
      $scope.saveName = function (newGist) {

        $scope.newGist.named = true ;
        console.log($scope.newGist.name);

      }

      $scope.editName = function(newGist) {

        $scope.newGist.named = false;

      }

      $scope.editContent = function (newGist) {

        console.log($scope.newGist.content)

      }


    }]);

