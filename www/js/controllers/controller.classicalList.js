angular.module('controllers')
    .controller('classicalListCtrl', function ($scope, $state, dataService) {

        $scope.addItems = function () {
            if ($scope.itemList) {
                $scope.itemList.push({name: 'infinte item', description: 'Infinite description'});
            }
            $scope.$broadcast('scroll.infiniteScrollComplete')
        };

        $scope.onItemClicked = function (item) {
            $state.go('app.classicalList.detail');
        };

        $scope.clear = function () {
            dataService.deleteData().then(function (isOk) {
                if (isOk) {
                    $scope.itemList.splice(0, $scope.itemList.length);
                }
            });
        };


        /** Getting items from service */
        $scope.$on('$ionicView.enter', function () {
            loadData();
        });

        function loadData() {
            dataService.getDatabaseItems().then(function (data) {
                $scope.itemList = data;
            });
        }
    })

    /** controller for item detals */
    .controller('itemDetailCtrl', function ($scope, $state, dataService, $stateParams) {

            /** Getting items from service */
            dataService.getDataById($stateParams.id).then(function (data) {
                $scope.item = data;
            });

        }
    );