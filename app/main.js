var sbgnviz = require('sbgnviz');
var filesaverjs = require('filesaverjs');
var cytoscape = require('cytoscape');
//jQuery = jquery = $ = require('jquery');
//var jQuery = require('jQuery');
var jQuery = require('jquery');

var appUtilities = require('./js/app-utilities');
var appCy = require('./js/app-cy');

// Options
var options = {
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
};

// Libraries to pass sbgnviz
var libs = {
    cytoscape: cytoscape,
    jQuery: jQuery,
    filesaverjs: filesaverjs
};

alert('hello');

sbgnviz(options, libs);

appCy();
