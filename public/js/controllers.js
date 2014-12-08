// AngularJS Controllers
app.controller('MainController', function($scope) {

});

app.controller('AboutController', function($scope) {

});

app.controller('StateController', ['$api', function($api, $scope, $routeParams) {

    $scope.message = ($routeParams.id);

    var res = $api.main.location({
        id: $scope.message
    })

    console.log(res);
}]);
