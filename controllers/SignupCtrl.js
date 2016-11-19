(function() {
  'use strict';
  angular
    .module('studentPortals')
    .controller('SignupCtrl', SignupCtrl);
  
  SignupCtrl.$injector = ['$scope', '$http', '$state'];
  function SignupCtrl ($scope, $http, $state) {
    // Define objects
    $scope.signUp = {
      email: undefined, 
      password: undefined
    };
    $scope.register = function (isValid) {
      if (isValid) {
        var data = {
          email: $scope.signUp.email,
          password: $scope.signUp.password
        };

        $http.post("api/signup.php", data)
          .success( function (response) {
            results(response);
          })
          .error( function (error) {
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
  }
})(); 