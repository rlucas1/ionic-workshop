angular.module('controllers')
    .controller('notificationCtrl', function ($scope, $cordovaLocalNotification) {

        $scope.scheduleSingleNotificationIn10s = function () {
            var now = new Date().getTime();
            var scheduleTime = new Date(now + 10 * 1000);
            $cordovaLocalNotification.schedule({
                id: 1,
                title: 'Code-Troopers',
                text: 'http://code-troopers.com',
                data: {
                    customProperty: 'custom value'
                },
                at: scheduleTime
            }).then(function (result) {
                // ...
            });
        };

        $scope.scheduleSingleNotificationNow = function () {
            $cordovaLocalNotification.schedule({
                id: 1,
                title: 'Code-Troopers',
                text: 'http://code-troopers.com',
                data: {
                    customProperty: 'custom value'
                },
                icon: 'img/logo.png'
            }).then(function (result) {
                // ...
            });
        };

    }
);
