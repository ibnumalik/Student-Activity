(function() {
  'use strict';
  angular
  .module('studentPortals')
  .run( function ( $rootScope, $timeout) {
    $rootScope.$on('$viewContentLoaded', ()=> {
      $timeout(() => {
        componentHandler.upgradeAllRegistered();
      })
    });
    /**
    * Check the validity state and update field accordingly.
    * @public
    */
    MaterialTextfield.prototype.checkValidity = function () {
      if (this.input_.validity.valid) {
        this.element_.classList.remove(this.CssClasses_.IS_INVALID);
      } else {
          if (this.element_.getElementsByTagName('input')[0].value.length > 0) {
            this.element_.classList.add(this.CssClasses_.IS_INVALID);
          }
      }
    };
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