// AngularJS Controllers
app.controller('MainController', function ($scope) {

});

app.controller('AboutController', function ($scope) {

});

app.controller('StateController', ['$api', '$http', '$scope', '$routeParams', function ($api, $http, $scope, $routeParams) {

    $scope.id = ($routeParams.id);

    var baseUrl = 'http://social.devnup.com/twitter/search?';
    var query = 'query=dengue'
    var token = '&token=2403743390-bk2nEnyPK4auCQgQB7tNawicsgR3RcmTyTq3o9d&secret=KEEJjAIZ9FIfGr48fuJxOkhSbYoY6ZxPqJhifZKrdw3R8';

    var endpoint = baseUrl+query+token;

    $http.get(endpoint).
        success(function(data, status, headers, config) {
            console.log(data);
        }).
        error(function(data, status, headers, config) {
            console.log(data);
        });

    $api.main.location({
        id: $routeParams.id
    })
        .success(function (response) {

            var json = response[0];

            $scope.location = json.location;
            $scope.weather = json.weather;
            $scope.diseases = json.incidences;

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
