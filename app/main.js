var sbgnviz = require('sbgnviz');
var filesaverjs = require('filesaverjs');

//window.jQuery = window.$ = require('jquery');
window.jQuery = window.jquery = window.$ = require('jquery'); 

var cytoscape = require('cytoscape');

var appUtilities = require('./js/app-utilities');
var appCy = require('./js/app-cy');

// Libraries to pass sbgnviz
var libs = {};

libs.filesaverjs = filesaverjs;
libs.jQuery = jQuery;
libs.cytoscape = cytoscape;

sbgnviz({
  networkContainerSelector: '#sbgn-network-container',
  imgPath: 'node_modules/sbgnviz/src/img',
  
  // whether to fit label to nodes
  fitLabelsToNodes: function () {
    return appUtilities.currentGeneralProperties.fitLabelsToNodes;
  },
  // dynamic label size it may be 'small', 'regular', 'large'
  dynamicLabelSize: function () {
    return appUtilities.currentGeneralProperties.dynamicLabelSize;
  },
  // percentage used to calculate compound paddings
  compoundPadding: function () {
    return appUtilities.currentGeneralProperties.compoundPadding;
  }
}, libs);

appCy();
