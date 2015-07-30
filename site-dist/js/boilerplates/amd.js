/* globals define */
/* exported */
define(
[
    "jquery"    ,
    "underscore"
],
function ($, _)
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
});
