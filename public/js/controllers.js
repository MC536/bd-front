// AngularJS Controllers
app.controller('MainController', function ($scope) {

});

app.controller('AboutController', function ($scope) {

});

app.controller('StateController', ['$api', '$scope', '$routeParams', function ($api, $scope, $routeParams) {

    $scope.message = ($routeParams.id);

    $api.main.location({
        data: $routeParams.id
    })
        .success(function (response) {
            console.log(response);
        })
        .error(function (err) {
            console.log(err);
        });
}]);

app.controller('SelectController', function ($scope) {
    $scope.submit = function() {
        window.location.href = "http://localhost:63342/bd-front/public/index.html#/estado/" + $scope.id;
    };
});
