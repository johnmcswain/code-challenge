/**
 * Created by johnmcswain on 7/1/16.
 */


var HOST='https://jm-turner.herokuapp.com/db', queryString='?TitleName=';
angular.module('turnerApp', []) .controller('mainCtrl', ['$scope','$http',function($scope,$http) {
    // Controller specific code goes here
    console.log('MainCtrl has been created');
    $scope.titleNameSearchField = '';
    $scope.resultSet;
    $scope.runSearch = function (){
        console.log('search running');
        $http.get(HOST+queryString+encodeURI($scope.titleNameSearchField))
            .then(function(response) {
                $scope.resultSet = response.data;
            });
    }
}]); 
