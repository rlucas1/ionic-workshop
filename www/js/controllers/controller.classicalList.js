angular.module('controllers')
    .controller('classicalListCtrl', function ($scope, $state, dataService) {

        /** Getting items from service */
        dataService.getSimpleData().then(function (data) {
            $scope.itemList = data;
        });

        $scope.addItems = function () {
            $scope.itemList.push({name: 'infinte item', description: 'Infinite description'});

            $scope.$broadcast('scroll.infiniteScrollComplete')
        };

        $scope.onItemClicked = function (item) {
            $state.go('app.classicalList.detail');
        };
    })

    /** controller for item detals */
    .controller('itemDetailCtrl', function ($scope, $state, dataService,$stateParams) {

        /** Getting items from service */
        dataService.getDataById($stateParams.id).then(function (data) {
            $scope.item = data;
        });

    }
);