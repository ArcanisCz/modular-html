// Require.js configuration
require.config(
{
    baseUrl: "./js",
    // Cache busting
    urlArgs: "bust=" + (+ new Date), // Development
    // urlArgs: "bust=v1" // Production
    // RequireJS loads all code relative to a baseUrl
    paths:
    {
        jquery:         "../lib/jquery/jquery-1.11.3.min",
        underscore:     "../lib/underscore/underscore-1.8.3.min",
        backbone:       "../lib/backbone/backbone-1.2.1.min",
        bootstrap:      "../lib/bootstrap/bootstrap.min",
        moment:         "../lib/moment/moment-with-locales.min",
        prettify:       "../lib/prettify/prettify",
        transition:     "../lib/bootstrap/transition",
        collapse:       "../lib/bootstrap/collapse",
        datetimepicker: "../lib/datetimepicker/bootstrap-datetimepicker.min",
        touchspin:      "../lib/touchspin/bootstrap-touchspin.min",
        text:           "../lib/require/text",
        domReady:       "../lib/require/domReady"
    },
    shim:
    {
        // Loading Bootstrap, see [http://getfishtank.ca/blog/how-to-use-bootstrap-3-with-requirejs]
        // - jquery and bootstrap paths are created. These act as references for the libraries in RequireJS.
        // - We use a shim to load the bootstrap library.
        //   A shim automatically adds a wrapper around a JavaScript library that makes it AMD-compatible / RequireJS-friendly.
        // - jquery is declared as a dependency of bootstrap. Whenever we load boostrap, RequireJS makes sure *jQuery is loaded first
        // - jQuery 1.7 supports AMD. No shim is required.
        "bootstrap":
        {
            deps: [ "jquery" ]
        }
    }
});
