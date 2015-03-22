// Code goes here
(function() {

  var app = angular.module("myModule", []);

  var MainController = function($scope, $http) {

    var person = {
      firstName: "Fatih",
      lastName: "Dikili",
   //   imageSrc: "C:\\Users\\Fatih\\Desktop\\logo.JPG"
    };

    $scope.message = "Hello AngularJS !!";
    $scope.person = person;

    $http.get("students/123").
    then(function(response) {
      $scope.user = response.data;

    });
    var onUserComplete = function(response) {

      $scope.user1 = response.data;
      $http.get($scope.user1.repos_url).then(onRepos,onError);
    };
    
    var onRepos=function(){
      
      
      
      
    };
    
    /*other way to get the response
     $http.get("https://api.github.com/users/dikili")
    .then(function(response){
    
    $scope.user1=response.data;
    
  });
      */

    var onError = function(why) {

      $scope.Error = "could not fetch the data";
    };
    
      $scope.search=function(username){

      $http.get("https://api.github.com/users/"+ username)
      .then(onUserComplete,onError);
      
    };
/*  
  instead of this one below we can use a function 
  $http.get("https://api.github.com/users/dikili")
  .then(onUserComplete, onError);
*/

 /*  $scope.username="AngularTangular";*/

  };
  //if minification is run ,it might change names of the parameter
  //which would then cause problems as angular is in charge for providing
  //those parameters so instead of below we go with the second one.
  //app.controller("MainController", MainController);
  app.controller("MainController", ["$scope", "$http", MainController]);

})();