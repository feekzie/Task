//Load underscore library into the application
var underscore = angular.module('underscore', []);
        underscore.factory('_', function() {
            return window._; 
        });


angular.module('filereader', ['ngRoute', 'underscore']).config(config);

function config($routeProvider) {
	$routeProvider
	   .when('/', {
	   	  templateUrl: 'angular-app/homepage/homepage.html',
	   	  controller: fileReaderController,
	   	  controllerAs: 'vm'
        });	
}

 