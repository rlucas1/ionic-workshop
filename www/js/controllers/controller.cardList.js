angular.module('controllers')
    .controller('cardListCtrl', function ($scope, dataService) {

        dataService.getSimpleData().then(function (data) {
            $scope.items = data;
        })
    }
);
