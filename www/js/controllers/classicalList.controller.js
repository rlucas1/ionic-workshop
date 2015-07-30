angular.module('controllers')
    .controller('classicalListCtrl', function ($scope,dataService) {

        dataService.getClassicalList().then(function(data){
            $scope.itemList = data;
        });

    }
);