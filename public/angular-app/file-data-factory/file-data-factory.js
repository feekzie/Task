angular.module('filereader').factory('fileDataFactory', fileDataFactory);

function fileDataFactory($http) {
	return {
		dayList: dayList	
	};

	function dayList() {
		return $http.get('/api/readfile').then(complete).catch(failed);
	}

	function complete(response) {
		return response;
	}

	function failed(error) {
		console.log(error.statusText);
	}
}