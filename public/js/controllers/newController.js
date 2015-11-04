angular.module('gistApp')
  .controller('newController', [

    '$scope',
    function($scope) {

      $scope.newGist = { 'saved' : false };
      $scope.save = function (newGist) {

        $scope.newGist.saved = true ;
        console.log($scope.newGist.saved);

      }

      $scope.edit = function(newGist) {

        $scope.newGist.saved = false;

      }


    }]);
