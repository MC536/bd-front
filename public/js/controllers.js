// AngularJS Controllers
app.controller('MainController', function($scope) {

});

app.controller('AboutController', function($scope) {

});

<<<<<<< HEAD
matchupApp.controller('StateController', ['$api', function($api, $scope, $routeParams) {
=======
app.controller('StateController', function($scope, $routeParams) {
>>>>>>> 55009624be3ad2c548082ae2a6271f70cefbfeef

    $scope.message = ($routeParams.id);

    var res = $api.main.location({
        id: $scope.message
    })

    console.log(res);
}]);
