// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require_self
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require keyboard
//= require movingdivs
//= require d3
//= require tooltipsy.min
//= require jquery.darktooltip
//= require_tree ./treeGraph
//= require_tree ./journeyGraph
//=require pace.min

//application namespaced object
var Tangent = {};

Tangent.setHeading = function(heading_text) {
  this.heading_text = heading_text;
  $("h1").text(heading_text);
}

// $(function(){
//   Tangent.currentGraph = new Tangent.TreeGraph();
//   Tangent.getData("");
//   Tangent.currentGraph.render();
// });