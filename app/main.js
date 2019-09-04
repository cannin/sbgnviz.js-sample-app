var sbgnviz = require('sbgnviz');
var filesaverjs = require('filesaverjs');
var cytoscape = require('cytoscape');
var jQuery = $ = require('jquery');
var tippy = require('tippy.js');

// Get cy extension instances
var cyPanzoom = require('cytoscape-panzoom'); // Needs CSS in index.html

// Options
var options = {
    networkContainerSelector: '#sbgn-network-container',
    imgPath: 'node_modules/sbgnviz/src/img',

    // whether to fit label to nodes
    fitLabelsToNodes: function () {
        return true;
    },
    // dynamic label size it may be 'small', 'regular', 'large'
    dynamicLabelSize: function () {
        return 'regular';
    },
    // percentage used to calculate compound paddings
    compoundPadding: function () {
        return 10;
    },
    // From https://github.com/iVis-at-Bilkent/cytoscape.js-expand-collapse
    rearrangeAfterExpandCollapse: function () {
        return false;
    },
    // Whether to animate on drawing changes
    animateOnDrawingChanges: function () {
        return false;
    },
    undoable: false
};

// Libraries to pass sbgnviz
var libs = {
    cytoscape: cytoscape,
    jQuery: jQuery,
    filesaverjs: filesaverjs,
    tippy: tippy
};

var filename = 'neuronal_muscle_signaling_color.xml';
var folder = 'app/samples/';

console.log('START');

// Register cy extensions
cyPanzoom(cytoscape, $);

function loadXMLDoc(path) {
    var xhttp;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", path, false);
    xhttp.send();

    console.log(xhttp.responseText);

    return xhttp.responseText;
}

$(document).ready(function () {
    function cytoscapeExtensions() {
        console.log("Cytoscape Extensions");

        var panProps = {
            fitPadding: 10,
            fitSelector: ':visible',
            animateOnFit: true,
            animateOnZoom: true
        };

        cy.panzoom(panProps);
    }

    // Register libs
    sbgnviz.register(libs);

    var s = sbgnviz(options);

    var cy = s.getCy();

    // register extensions when cy is ready
    cy.ready(function () {
        cytoscapeExtensions();
    });

    setTimeout(function() {
        // load XML document
        var xmlObject = loadXMLDoc(folder + filename);
        console.log("S: " + xmlObject.toString());

        s.loadSBGNMLFile(new Blob([xmlObject], {
            type: "text/xml"
        }));
    }, 100);

    $("#save-as-svg").click(function(evt) {
        s.saveAsSvg("network.svg");
    });

    console.log('Loaded filename: ' + filename);
});
