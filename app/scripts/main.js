/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        handlebars: '../bower_components/handlebars/handlebars',
        modernizr: '../bower_components/modernizr/modernizr',
        'requirejs-text': '../bower_components/requirejs-text/text',
        requirejs: '../bower_components/requirejs/require',
        'handlebars.runtime': '../bower_components/handlebars/handlebars.runtime',
        'bower-jvectormap': '../bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.min'
    }
});

require([
    'backbone', './routes/worldmap'
], function (Backbone, Router) {
    var router = new Router();
    Backbone.history.start({ pushState: true, root: "/" });
});
