'use strict';

var path = require('path');
var fs   = require('fs');

function EmberCLIFoundation(project) {
  this.project = project;
  this.name    = 'Ember CLI Foundation';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLIFoundation.prototype.treeFor = function treeFor(name) {
  var treePath = path.join('node_modules/ember-cli-foundation', name);

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLIFoundation.prototype.included = function included(app) {
  var stylePath = 'vendor/foundation/css/';

  // Import css from foundation
  app.import(stylePath + 'normalize.css');
  app.import(stylePath + 'foundation.css');

};

module.exports = EmberCLIFoundation;
