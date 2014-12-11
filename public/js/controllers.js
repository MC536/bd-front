// AngularJS Controllers
app.controller('MainController', function ($scope) {

});

app.controller('AboutController', function ($scope) {

});

app.controller('StateController', ['$api', '$scope', '$routeParams', function ($api, $scope, $routeParams) {

    $scope.id = ($routeParams.id);

    $api.main.location({
        id: $routeParams.id
    })
        .success(function (response) {

            var json = response[0];

            $scope.location = json.location;
            $scope.weather = json.weather;

            console.log(response);
        })
        .error(function (err) {
            alert('Erro!')
        });

}]);

app.controller('SelectController', function ($scope) {
    $scope.submit = function() {

        window.location.href = "http://localhost:63342/bd-front/public/index.html#/estado/" + $scope.id;
    };
});
