app.controller('StateController', ['$api', '$http', '$scope', '$routeParams', function ($api, $http, $scope, $routeParams) {

    $scope.id = ($routeParams.id);

    var baseUrl = 'http://social.devnup.com/twitter/search?limit=25&query=';
    var query = {a:'dengue', b:'febre amarela', c:'malária', d:'leishmanioses'};
    var token = '&token=2403743390-bk2nEnyPK4auCQgQB7tNawicsgR3RcmTyTq3o9d&secret=KEEJjAIZ9FIfGr48fuJxOkhSbYoY6ZxPqJhifZKrdw3R8';

    var res = [];
    var counter = 0;

    for (var q in query) {
        var endpoint = baseUrl+query[q]+token;

        $http.get(endpoint).
            success(function(data, status, headers, config) {
                res.push(data.data.statuses[0].text);
                counter++;

                if(counter===4) {
                    $api.main.location({
                        id: $routeParams.id,
                        data: res
                    })
                        .success(function (response) {

                            var json = response[0];

                            $scope.location = json.location;
                            $scope.weather = json.weather;
                            $scope.diseases = json.incidences;
                            $scope.twitter = json.twittter;

                            $this.twitter

                            console.log($scope.twitter);
                        })
                        .error(function (err) {
                            alert('Erro na requisição. Tente novamente.')
                        });
                }

            }).
            error(function(data, status, headers, config) {
                console.log(data);
            });
    }



}]);

// AngularJS Controllers
app.controller('MainController', function ($scope) {

});

app.controller('AboutController', function ($scope) {

});

app.controller('SelectController', function ($scope) {
    $scope.submit = function() {

        window.location.href = "http://localhost:63342/bd-front/public/index.html#/estado/" + $scope.id;
    };
});
