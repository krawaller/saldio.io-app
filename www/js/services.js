var credentials = require('/credentials.json');
var skanetrafiken = require('balance-api-skanetrafiken');

angular.module('saldo.io.services', [])

.factory('BalancesService', function() {
  return {
    refresh: function(callback) {
      skanetrafiken(credentials, callback);
    }
  }
})
