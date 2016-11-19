(function() {
  'use strict';
  
  angular
    .module('studentPortals')
    .controller('TranscriptCtrl', TranscriptCtrl);
  
  TranscriptCtrl.$inject = ['$scope', '$http', '$state'];
  function TranscriptCtrl ($scope, $http, $state) {
    $scope.TranscriptForm = {
      firstname: '',
      lastname: '',
      studentid: '', 
      identificationNumber: '', 
      phoneNumber: ''
    };

    $scope.transcriptSend = function (isValid) {
      if ( isValid ) {
        var data = {
          firstname: $scope.TranscriptForm.firstname,
          lastname: $scope.TranscriptForm.lastname,
          studentid: $scope.TranscriptForm.studentid, 
          identificationNumber: $scope.TranscriptForm.identificationNumber, 
          phoneNumber: $scope.TranscriptForm.phoneNumber
        };

        $http.post("api/transcriptRequest.php", data)
          .success( function(response) {
            successTranscript(response);
          })
          .error( function(error) {
            console.error(error);
          });

        function successTranscript (response) {
          $state.go('transcript-payment');
        }
      }
    }
    
  }
})();