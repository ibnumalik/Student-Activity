(function() {
  'use strict';

angular
  .module('studentPortals')
  .controller('ParkingCtrl', ParkingCtrl);

ParkingCtrl.$inject = ['$scope', '$state', 'PaymentService'];

function ParkingCtrl($scope, $state, PaymentService) {

  $scope.items = [
  {
    display: '1',
    value: '1'
  },
  {
    display: '2',
    value: '2'
  },
  {
    display: '3',
    value: '3'
  },
  {
    display: '4',
    value: '4'
  },
  {
    display: '5',
    value: '5'
  },
  {
    display: '6',
    value: '6'
  },
  {
    display: '7',
    value: '7'
  },
  {
    display: '8',
    value: '8'
  },
  {
    display: '9',
    value: '9'
  },
  {
    display: '10',
    value: '10'
  },
  {
    display: '11',
    value: '11'
  },
  {
    display: '12',
    value: '12'
  },
  {
    display: '13',
    value: '13'
  },
  {
    display: '14',
    value: '14'
  },
  {
    display: '15',
    value: '15'
  },
  {
    display: '16',
    value: '16'
  }
];

$scope.processPayment = function(value) {
  $state.go('payment', {number: value});
}

}

})();