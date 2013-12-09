/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'jvectormapworlden',
    'bowerjvectormap'
], function ($, _, Backbone, JST, Jvectormap) {
    'use strict';

    var WorldmapView = Backbone.View.extend({
        template: JST['app/scripts/templates/worldmap.hbs'],
        render: function() {
            console.log(this.$el);
            this.$el.vectorMap({
                map: 'world_mill_en',
                scaleColors: ['#C8EEFF', '#0071A4'],
                normalizeFunction: 'polynomial',
                hoverOpacity: 0.7,
                hoverColor: false,
                markerStyle: {
                    initial: {
                        fill: '#F8E23B',
                        stroke: '#383f47'
                    }
                },
                backgroundColor: '#383f47',
                markers: [
                    {latLng: [37.0000, 127.5000], name: 'Vatican City', scale:[5,20],value:19, fill: 'black'}
                ]
            });
        }
    });

    return WorldmapView;
});