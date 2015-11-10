angular.module('controllers')
    .controller('locationCtrl', function ($scope,uiGmapGoogleMapApi,$cordovaGeolocation) {

        $scope.map = { center: { latitude: 47.390031, longitude: 0.688913 }, zoom: 10 };
        $scope.markers = [];

        uiGmapGoogleMapApi.then(function(maps) {


            $cordovaGeolocation.getCurrentPosition().then(function(pos) {
                console.log("WONDELLe : "+JSON.stringify(pos));
                addMarker("Current position",47.390031,0.688913 );
            });

            addMarker("Current position", 47.390031, 0.688913);
            var watchOptions = {
                frequency : 500,
                timeout : 1000,
                enableHighAccuracy: true // may cause errors if true
            };

            var watch = $cordovaGeolocation.watchPosition(watchOptions);
            watch.then(
                null,
                function(err) {
                    console.log("ouch");
                },
                function(position) {
                    var lat  = position.coords.latitude
                    var long = position.coords.longitud
                    console.log("WONDELLe 2 : "+JSON.stringify(position));
                });


            function addMarker(name,lat,lng){
                var latitude = lat;
                var longitude = lng;
                $scope.markers.push({
                    id:name,
                    latitude: latitude,
                    longitude: longitude,
                    title: name
                });
            }

        });


    }
);
