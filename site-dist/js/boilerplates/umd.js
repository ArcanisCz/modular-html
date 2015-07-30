/* globals define */
/* exported */
(function (root, factory)
{
    "use strict";
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(
        [
            "jquery"    ,
            "underscore"
        ], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS
        module.exports = factory(
            require('jquery')    ,
            require('underscore')
        );
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(
            root.jQuery,
            root._
        );
    }
}(this, function ($, _)
{
    "use strict";

    // Methods
    function a() {}  // Private because it's not returned (see below).
    function b() {}  // Public because it's returned.
    function c() {}  // Public because it's returned.

    // Exposed public methods
    return {
        b: b,
        c: c
    };
}));
