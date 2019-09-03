var jQuery = $ = require('jquery');
var appUtilities = require('./app-utilities');

module.exports = function() {
  $(document).ready(function() {
    appUtilities.sbgnNetworkContainer = $('#sbgn-network-container');
  });
};
