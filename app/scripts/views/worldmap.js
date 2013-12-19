/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
	'../models/worldmap',
	'../mapUtils',
    'jvectormapworlden',
    'bowerjvectormap'
], function ($, _, Backbone, JST, Model, MapUtils) {
    'use strict';

    var WorldmapView = Backbone.View.extend({
        template: JST['app/scripts/templates/worldmap.hbs'],
	    model: new Model(),
        render: function() {
	        var _self = this;
	        this.model.fetch({"success": function(resp){
		        MapUtils.drawMap(_self.$el, resp.toJSON().data, function(code) {
			        console.log(code);
		        });
	        }, "error":function(e,response){console.log(response.responseText);}});

        }
    });

    return WorldmapView;
});