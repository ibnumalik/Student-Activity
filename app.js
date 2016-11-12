(function() {
  'use strict';

  angular
    .module('studentPortals', [
        'ui.router'
    ])

    .run( function ( $rootScope, $timeout) {
      $rootScope.$on('$viewContentLoaded', ()=> {
        $timeout(() => {
          componentHandler.upgradeAllRegistered();
        })
      })
    })

    .config( function ( $stateProvider, $urlRouterProvider, $locationProvider ) {

      //$locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'pages/login.html',
          controller: 'UserCtrl as auth', 
        })
        .state('register', {
          url: '/register', 
          templateUrl: 'pages/register.html', 
          controller: 'UserCtrl as auth' 
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
    })

    .controller('AppCtrl', function ( $scope, $http, $state ) {
      if (localStorage['email'] === undefined ){
        $state.go("home");
      }
    })

    .controller('UserCtrl',  function ( $scope, $http, $state ) {

      // Define Object
      $scope.signUp = {
        email: undefined, 
        password: undefined
      }

      $scope.login = {
        email: undefined, 
        password: undefined
      }

      // Some logics      
      $scope.signUserUp = function () {
        var data = {
          email: $scope.signUp.email, 
          password: $scope.signUp.password
        }

        $http.post('api/signup.php', data)
          .success( function ( response ) {
            console.log(response);
            localStorage.setItem("email", JSON.stringify({email: response}));
            $state.go("dashboard");
          }).error( function ( error ) {
              console.error(error);
          });
      };


      // Login User
      $scope.loginUser = function () {
        var data = {
          email: $scope.login.email, 
          password: $scope.login.password
        }

        $http.post('api/login.php', data)
          .success( function ( response ) {
            console.log(response);
            localStorage.setItem("email", JSON.stringify({email: response[0].email}));
            $state.go("dashboard");

          }).error( function ( error ) {
              console.error(error);
          });

      }

      });

})();

