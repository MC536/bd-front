// AngularJS App
<<<<<<< HEAD
var matchupApp = angular.module('bdApp', [
    'ngRoute',
    'api'
=======
var app = angular.module('bdApp', [
    'ngRoute'
>>>>>>> 55009624be3ad2c548082ae2a6271f70cefbfeef
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