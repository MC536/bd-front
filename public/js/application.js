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

matchupApp.directive('tooltip', function(){
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