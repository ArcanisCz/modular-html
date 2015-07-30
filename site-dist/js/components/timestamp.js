/* globals define */
/* exported toUnix, fromUnix, resetNow */

// Universal Module Definition
(function (root, factory)
{
    "use strict";
    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define([
            "jquery",
            "bootstrap",
            "common",
            "moment",
            "text!../../inc/timestamp.html",
            "libraries/touchspin",
            "libraries/datetimepicker"
        ], factory);
    } else if (typeof exports === "object") {
        // Node, CommonJS
        module.exports = factory(
            require("jquery"),
            require("boostrap"),
            require("common"),
            require("moment"),
            require("text!../../inc/timestamp.html"),
            require("libraries/touchspin"),
            require("libraries/datetimepicker")
        );
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(
            root.jQuery,
            root.boostrap,
            root.common,
            root.moment,
            root.text("../../inc/timestamp.html"),
            root.touchspin,
            root.datetimepicker
        );
    }
}(this, function($, bootstrap, common, moment, view, touchspin, datetimepicker)
{
    "use strict";

    console.log("Initializing module controls/timestamp");

    $("#include-timestamp").html(view); // Tohle bych chtěl aby bylo v rámci common.draw, ale když to tam dám, tak to nefunguje!?
    console.log("VIEW1",view);
    common.draw();

    touchspin.initialize();
    datetimepicker.initialize();

    function fromUnix() {
        var timestamp = $("#timestamp").val();
        var isotime = moment.unix(timestamp);
        $("#datetimepicker").data("DateTimePicker").date(isotime);
    }

    function toUnix() {
        var isotime = $("#datetimepicker").data("DateTimePicker").date();
        var timestamp = moment(isotime).unix();
        if ( isNaN(timestamp) ) { timestamp = ""; }
        $("#timestamp").val(timestamp);
    }

    function resetNow() {
        var now = moment();
        $("#datetimepicker").data("DateTimePicker").date(now);
    }

    $(document).ready(function()
    {
        // Convert current date from #datetimepicker and save to #timestamp
        toUnix();

        // Elements
        $("#datetimepicker").on("dp.change", toUnix);
        $("#timestamp").change(fromUnix);

        // Events
        $("#event-process").click(toUnix);
        $("#event-reset"  ).click(resetNow);

        $("#timestep").change(function()
        {
            $("input").trigger("touchspin.updatesettings", {step: $("#timestep").val()});
        });

        // Key bindings
        // $("#datetimepicker").keypress(function(event)
        // {
        //     event.preventDefault();
        //     if(event.which === 13) { handler(); }
        // });
    });
}));
