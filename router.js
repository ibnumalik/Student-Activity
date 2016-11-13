(function() {
  'use strict';

  /* Router for app */
  angular
    .module('studentPortals')

    .config( function ( $stateProvider, $urlRouterProvider, $locationProvider ) {

        //$locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');

        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'pages/login.html',
            controller: 'LoginCtrl', 
          })
          .state('register', {
            url: '/register', 
            templateUrl: 'pages/register.html', 
            controller: 'SignupCtrl' 
          })
          .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'pages/front.html',
            controller: 'AppCtrl as app', 
          })
          .state('parking', {
            url: '/parking',
            templateUrl: 'pages/parking.html',
            controller: 'AppCtrl as app', 
          })
          .state('seminar', {
            url: '/seminar',
            templateUrl: 'pages/seminar.html'
          })
          .state('transcript', {
            url: '/transcript',
            templateUrl: 'pages/transcript.html'
          });
      });
  
})();