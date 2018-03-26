(function() {
  'use strict';
  angular
    .module('studentPortals')
    .controller('PaymentCtrl', PaymentCtrl);

  PaymentCtrl.$inject = ['$scope', 'PaymentService', '$state'];
  function PaymentCtrl($scope, PaymentService, $state) {
    var data = {
      user: localStorage.token,
      receiptHash: localStorage.receipt
    };

    $scope.displayHash = data.receiptHash;
    $scope.parkingSpaceNumber = $state.params.number;

    function generateReceiptHash () {
      return Math.random().toString(36).substring(7).toUpperCase();
    }

    if ( localStorage.receipt ) {
      console.log(localStorage);
    } else {
      localStorage.setItem('receipt', generateReceiptHash());
    }
  }
})();