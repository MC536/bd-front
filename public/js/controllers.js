// AngularJS Controllers
matchupApp.controller('MainController', function($scope) {

});

matchupApp.controller('AboutController', function($scope) {

});

matchupApp.controller('StateController', function($scope, $routeParams) {

    $scope.message = ($routeParams.id);

});
