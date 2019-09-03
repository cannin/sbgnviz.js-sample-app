var jQuery = $ = require('jquery');

var appUtilities = {};

appUtilities.defaultGeneralProperties = {
  compoundPadding: 10,
  dynamicLabelSize: 'regular',
  fitLabelsToNodes: false,
  rearrangeAfterExpandCollapse: false,
  animateOnDrawingChanges: false
};

appUtilities.currentGeneralProperties = jQuery.extend(true, {}, appUtilities.defaultGeneralProperties);

module.exports = appUtilities;
