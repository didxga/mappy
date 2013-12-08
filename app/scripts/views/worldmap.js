/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'bower-jvectormap'
], function ($, _, Backbone, JST, Jvectormap) {
    'use strict';

    var WorldmapView = Backbone.View.extend({
        template: JST['app/scripts/templates/worldmap.hbs'],
        render: function() {
            this.$el.html("here we go");
        }
    });

    return WorldmapView;
});