(function() {
  'use strict';
  angular
    .module('studentPortals')

    /* Registration Controllers*/
    .controller('SignupCtrl', [
      '$scope', '$http', '$state',
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
      // Define objects
      $scope.signUp = {
        email: undefined, 
        password: undefined
      }

      $scope.register = function (isValid) {

        if (isValid) {
            var data = {
              email: $scope.signUp.email,
              password: $scope.signUp.password
            }
            $http.post("api/signup.php", data)
              .success( function (response) {
                results(response);
              }).error( function (error) {
                  console.error(error);
                });
        };
      };

      var results = function (response) {
        if ( response === "exist") {
          $scope.existError = true;
          $scope.error = "Email already exist.";
        } else {
          localStorage.setItem('email', JSON.stringify({email: response}));
          $state.go('home');
        }
        
      }

    }]);
})(); 