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

    // var BASE_URL = "localhost:9000";
    var BASE_URL = "http://192.168.0.102:9000";

    // API call wrapper
    var wrapper = function(action, fn) {

        return function(data) {
            return fn.call(fn, BASE_URL + action, data);
        }
    };

    // User public interface
    this.main = {
        'location': wrapper('/main', $req.post)
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
