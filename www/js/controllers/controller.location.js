angular.module('controllers')
    .controller('locationCtrl', function ($scope,uiGmapGoogleMapApi,$cordovaGeolocation) {

        $scope.map = { center: { latitude: 47.390031, longitude: 0.688913 }, zoom: 10 };
        var myPosition;
        $scope.markers = [myPosition];

        uiGmapGoogleMapApi.then(function(maps) {

            ionic.Platform.ready(function () {
                onDeviceReady();
            });

            function onDeviceReady() {
                $cordovaGeolocation.getCurrentPosition().then(function (pos) {
                    myPosition = {
                        id: "Current position",
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude,
                        title: "Current position"
                    };
                    addMarker(myPosition);
                });

                //addMarker("Current position", 47.390031, 0.688913);
                var watchOptions = {
                    frequency: 1000,
                    timeout: 5000,
                    enableHighAccuracy: true // may cause errors if true
                };

                var watch = $cordovaGeolocation.watchPosition(watchOptions);
                watch.then(
                    null,
                    function (err) {
                        alert("ouch");
                    },
                    function (position) {
                        updatePosition(position.coords.latitude, position.coords.longitude);
                    });


                function updatePosition(lat, lng) {
                    myPosition.latitude = lat;
                    myPosition.longitude = lng;
                }

                function addMarker(position) {
                    $scope.markers.push({
                        id: position.id,
                        latitude: position.latitude,
                        longitude: position.longitude,
                        title: position.name
                    });

                }


            }
        });


    }
);
