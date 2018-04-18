(function() {
  'use strict';

angular
  .module('studentPortals')
  .factory('PaymentService', PaymentService);

function PaymentService() {

  var data = {
    chosen: ''
  };

  return {
    getParkingValue: function() {
      return data.chosen;
    },
    setParkingValue: function() {
      data.chosen = chosenSpace;
    }
  };
};
})(); 