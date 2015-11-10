angular.module('controllers')
    .controller('formDatabaseCtrl', function ($scope, $rootScope, dataService) {

        $scope.item = {};

        //TODO voir pour mettre de vrai message
        $scope.insert = function () {
            console.log("Test");
            dataService.insertItem($scope.item).then(function (result) {
                delete $scope.item.name;
                delete $scope.item.description;
                }, function (data) {
                alert("Error : " + JSON.stringify(data));
                }
            );
        };
    }
);
