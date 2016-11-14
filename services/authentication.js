(function() {
  'use strict';

angular
  .module('studentPortals')
  .service('AuthenticationService', AuthenticationService);

AuthenticationService.$inject = ['$http', '$state'];

function AuthenticationService($http, $state) {
  var vm = this;

  vm.checkToken = function (token) {
    var data = {
      token: token
    };

    $http.post("api/checkToken.php", data)
    
    .success( function (response) {
      if ( response === "unauthorized" ) {
        $state.go("home");
      } else {
          return response;
      }
    })

    .error( function (error) {
      console.error(error);
    });
  };
};
})();