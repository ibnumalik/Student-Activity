(function() {
  'use strict';

  angular
    .module('studentPortals')

    /* Login Controllers */
    .controller('LoginCtrl', 
      ['$scope', '$http', '$state', 
        function ($scope, $http, $state) {

            /**
           * Check the validity state and update field accordingly.
           *
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

      // Define object
      $scope.login = {
        email: undefined, 
        password: undefined
      }

      $scope.loginUser = function (isValid) {

        if (isValid) {
          // Get data
          var data = {
            email: $scope.login.email,
            password: $scope.login.password
          }

          $http.post("api/login.php", data)
            .success( function (response) {
              loginProcess(response);
            }).error( function (error) {
              console.error(error);
            });
          };
      };

      var loginProcess = function (response) {
        if ( !localStorage.setItem('token', JSON.stringify(response)) ){
          $state.go("dashboard");
        } else {
            console.log("wrong");
        }
      }

    }]);

})();