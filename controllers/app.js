(function() {
  'use strict';

  angular
  .module('studentPortals')
  .run( function ( $rootScope, $timeout) {
    $rootScope.$on('$viewContentLoaded', ()=> {
      $timeout(() => {
        componentHandler.upgradeAllRegistered();
      })
    })
  })

  .controller('AppCtrl', AppCtrl);

  AppCtrl.$inject = ['$scope', '$http', '$state', 'AuthenticationService'];

  function AppCtrl($scope, $http, $state, AuthenticationService) {
    var token;
    if ( localStorage['token'] ) {
      token = JSON.parse(localStorage['token']);
    } else {
      token = "Null";
    };

    AuthenticationService.checkToken(token);

    $scope.logout = function () {
      var data = {
        token: token
      }

      $http.post('api/logout.php', data)

        .success( function (response) {
          console.log(response);
          localStorage.clear();
          $state.go('home');
        })
        .error( function (error) {
          console.error(error);
        });
    };

  }

})();