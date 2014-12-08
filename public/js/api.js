"use strict";

angular.module('api')
		.service('$api', ['$req', function($req) {

			var BASE_URL = "http://ec2-54-94-143-249.sa-east-1.compute.amazonaws.com:9000/";

			// API call wrapper
			var wrapper = function(action, fn) {

				return function(data) {
					return fn.call(fn, BASE_URL + action, data);
				}
			};

			// User public interface
			this.main = {
				'location': wrapper('location/detail', $req.post)
			};

		}])

		.service('$req', ['$http', function($http) {

			// Get request
			this.get = function(a, d) {

				return $http({
					method: 'GET',
					url: a,
					data: d || {}
				});
			};

			// Post request
			this.post = function(a, d) {

				return $http({
					method: 'POST',
					url: a,
					data: d || {}
				});
			};

			// Put request
			this.put = function(a, d) {

				return $http({
					method: 'PUT',
					url: a,
					data: d || {}
				});
			};

			// Delete request
			this.delete = function(a, d) {

				return $http({
					method: 'DELETE',
					url: a,
					data: d || {}
				});
			};
		}]);
