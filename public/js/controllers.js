// AngularJS Controllers
app.controller('MainController', function($scope) {

});

app.controller('AboutController', function($scope) {

});

app.controller('StateController', function($scope, $routeParams) {

    $scope.message = ($routeParams.id);

});
