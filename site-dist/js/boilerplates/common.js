/* globals define */
/* exported */
define(function(require, exports, module)
{
    "use strict";
    var $ = require("jquery");
    var _ = require("underscore");

    // Methods
    function a() {}  // Private because it's omitted from module.exports (see below).
    function b() {}  // Public because it's defined in module.exports.
    function c() {}  // Public because it's defined in module.exports.

    // Exposed public methods
    module.exports = {
        b: b,
        c: c
    };
});
