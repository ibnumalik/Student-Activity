(function() {
  'use strict';
  angular
    .module('studentPortals')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$scope', '$http', '$state'];
  function LoginCtrl($scope, $http, $state){
    // Define object
    $scope.login = {
      email: undefined, 
      password: undefined
    }
    $scope.loginUser = function(isValid) {
      if (isValid) {
      // Get data
        var data = {
          email: $scope.login.email,
          password: $scope.login.password
        }
        $http.post("api/login.php", data)
          .success(function(response) {
            loginProcess(response);
          })
          .error(function(error) {
            console.error(error);
          });
      };
    };

    function loginProcess (response) {
      if ( !localStorage.setItem('token', JSON.stringify(response)) ){
        $state.go("dashboard");
      } else {
        console.log("No access");
      }
    }
  };
})();