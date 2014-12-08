// AngularJS Controllers
matchupApp.controller('MainController', function($scope) {

});

matchupApp.controller('AboutController', function($scope) {

});

matchupApp.controller('StateController', ['$api', function($api, $scope, $routeParams) {

    $scope.message = ($routeParams.id);

    var res = $api.main.location({
        id: $scope.message
    })

    console.log(res);
}]);
