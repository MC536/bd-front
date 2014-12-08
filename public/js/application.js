// AngularJS App
var matchupApp = angular.module('bdApp', [
    'ngRoute'
]);

// AngularJS Routes
matchupApp.config(function($routeProvider) {
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
