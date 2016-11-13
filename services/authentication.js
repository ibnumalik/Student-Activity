(function() {
  'use strict';

  angular
    .module('studentPortals')


    .service('AuthenticationService', [ '$http', '$state', 
      function ($http, $state) {
        
        var self = this;
        
        self.checkToken = function (token) {
          var data = {token: token};
          $http.post("api/checkToken.php", data)
            .success( function (response) {
              if ( response === "unauthorized") {
                $state.go("home");
              } else {
                return response;
              }
            }).error( function (error) {
              console.error(error);
            });
        };
      }]);

})();