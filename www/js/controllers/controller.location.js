angular.module('controllers')
    .controller('locationCtrl', function ($scope,uiGmapGoogleMapApi) {

        $scope.map = { center: { latitude: 47.390031, longitude: 0.688913 }, zoom: 8 };

        uiGmapGoogleMapApi.then(function(maps) {

        });


    }
);
