angular
    .module('studentPortals', [
        'ui.router'
    ])

    .config( function( $stateProvider, $urlRouterProvider ) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'pages/front.html'
        })
        .state('parking', {
          url: '/parking',
          templateUrl: 'pages/parking.html',
          controller: 'StudentCtrl as student', 
        })
        .state('seminar', {
          url: '/seminar',
          templateUrl: 'pages/seminar.html'
        })
        .state('transcript', {
          url: '/transcript',
          templateUrl: 'pages/transcript.html'
        });
    })

    .controller('StudentCtrl', function($scope, $http) {

      $scope.url = 'http://localhost/student-system/db/connectDB.php';
      $scope.tableName = 'students';
      $scope.fieldName = '*';

      $http.get($scope.url + '?tableName=' + $scope.tableName + '&fieldName=' + $scope.fieldName).success(function(data) {
          $scope.data = data;
      });

      $scope.message = 'Hello';
  });