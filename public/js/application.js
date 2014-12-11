// AngularJS App
var app = angular.module('bdApp', [
    'ngRoute'
]);

// AngularJS Routes
app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'home.html',
            controller  : 'MainController'
        })

        .when('/inicio', {
            templateUrl : 'home.html',
            controller  : 'MainController'
        })

        .when('/sobre', {
            templateUrl : 'sobre.html',
            controller  : 'AboutController'
        })

        .when('/estado/:id', {
            templateUrl : 'estado.html',
            controller  : 'StateController'
        })
});

app.directive('tooltip', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).hover(function(){
                // on mouseenter
                $(element).tooltip('show');
            }, function(){
                // on mouseleave
                $(element).tooltip('hide');
            });
        }
    };
});

app.service('$api', ['$req', function($req) {

    // API call wrapper
    var wrapper = function(action, fn) {

        return function(data) {
            return fn.call(fn, action, data);
        }
    };

    var token = '2403743390-bk2nEnyPK4auCQgQB7tNawicsgR3RcmTyTq3o9d&secret=KEEJjAIZ9FIfGr48fuJxOkhSbYoY6ZxPqJhifZKrdw3R8';

    // User public interface
    this.main = {
        'location': wrapper('http://192.168.0.102:9000/main', $req.post),
        'twitter': wrapper('social.devnup.com/twitter/search?query=dengue&token='+token, $req.get)
    };

}]);

app.service('$req', ['$http', function($http) {

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
