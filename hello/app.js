var app = angular.module("myApp", []);
app.controller("MainCtrl", function($scope) { 
	$scope.name = "World";
	$scope.year = 2015;
	console.log( {name: "world",year: 2015 }) ;
});
