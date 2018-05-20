(function() {
  'use strict';

  /* Router for app */
  angular
    .module('studentPortals')

    .config( function ( $stateProvider, $urlRouterProvider, $locationProvider ) {
        //$locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        $stateProvider
          .state('seminar', {
            url: '/seminar',
            templateUrl: 'pages/seminar.html'
          })
          .state('transcript', {
            url: '/transcript',
            templateUrl: 'pages/transcript.html',
            controller: 'TranscriptCtrl',
          })
          .state('transcript-payment', {
            url: '/payment',
            templateUrl: 'pages/payment.html',
            controller: 'PaymentCtrl as pay'
          });
      });

})();