/* globals define */

// Universal Module Definition
(function (root, factory)
{
    "use strict";
    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(
        [
            "jquery"   ,
            "touchspin"
        ], factory);
    } else if (typeof exports === "object") {
        // Node, CommonJS
        module.exports = factory(
            require("jquery"   ),
            require("touchspin")
        );
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(
            root.jQuery   ,
            root.touchspin
        );
    }
}(this, function ($)
{
    "use strict";

    function initialize()
    {
        console.log("Initializing module controls/touchspin");

        $("#timestamp").TouchSpin(
        {
            initval: "",                    // Applied when no explicit value is set on the input with the value attribute.
            min: 0,                         // Minimum value.
            max: 9999999999,                // Maximum value.
            step: $("#timestep").val(),     // Incremental/decremental step on up/down change.
            forcestepdivisibility: "round", // How to force the value to be divisible by step value: 'none' | 'round' | 'floor' | 'ceil'
            decimals: 0,                    // Number of decimal points.
            booster: true,                  // If enabled, the the spinner is continually becoming faster as holding the button.
            boostat: 5,                     // Boost at every nth step.
            maxboostedstep: 31557600,       // Maximum step when boosted.
            mousewheel: true,               // Enables the mouse wheel to change the value of the input.
            prefix : "",
            postfix: "[s]"
        });
    }

    return {
        initialize: initialize
    };
}));
