angular.module('myApp')
  .controller('gistController', [

    '$scope',
    'gistName',
    function($scope) {

      $scope.gistName = true;
      console.log($scope.gistName);


    }]);

function saveGist(newGist) {

  newGist.saved = true;
  console.log(newGist);

}