/*global define*/

define([
    'jquery',
    'backbone',
    '../views/worldmap'
], function ($, Backbone, Worldmap) {
    'use strict';

    var WorldmapRouter = Backbone.Router.extend({
        routes: {
            '': "loadmap"
        },
        loadmap: function() {
            var worldmapView = new Worldmap({el:'#map-container'});
            worldmapView.render();
        }
    });

    return WorldmapRouter;
});