angular.module('controllers')
    .controller('formDatabaseCtrl', function ($scope, dataService) {

        $scope.item = {};

        //TODO voir pour mettre de vrai message
        $scope.insert = function () {
            dataService.insertItem($scope.item).then(function (result) {
                    alert(JSON.stringify(result));
                }, function (data) {
                    alert("Error : " + result);
                }
            );
        };
    }
);
