var jQuery = $ = require('jquery');
var appUtilities = require('./app-utilities');

module.exports = function() {
  function loadSample(filename) {
      return sbgnviz.loadSample(filename, 'app/samples/');
  }

  $(document).ready(function() {
    appUtilities.sbgnNetworkContainer = $('#sbgn-network-container');

    setTimeout(function(){
        loadSample('neuronal_muscle_signaling.xml');
    }, 100);
  });
};
