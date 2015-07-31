// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'controllers', 'services','uiGmapgoogle-maps'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })
    .config(function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            }
        ).state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home.html',
                        controller: 'AppCtrl'
                    }
                }
            }
        ).state('app.classicalList', {
                url: '/list',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/classicalList.html',
                        controller: 'classicalListCtrl'
                    }
                }
            }
        ).state('app.cardList', {
                url: '/card-list',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/cardList.html',
                        controller: 'cardListCtrl'
                    }
                }
            }
        ).state('app.database', {
                url: '/form-database',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/form-database.html',
                        controller: 'formDatabaseCtrl'
                    }
                }
            }
        ).state('app.location', {
                url: '/location',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/location.html',
                        controller: 'locationCtrl'
                    }
                }
            }
        ).state('app.notification', {
                url: '/notification',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/notification.html',
                        controller: 'notificationCtrl'
                    }
                }
            }
        );
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');
    });
