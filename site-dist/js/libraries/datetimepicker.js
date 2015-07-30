/* globals define */

// Universal Module Definition
(function (root, factory)
{
    "use strict";
    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(
        [
            "jquery"        ,
            "moment"        ,
            "transition"    ,
            "collapse"      ,
            "datetimepicker"
        ], factory);
    } else if (typeof exports === "object") {
        // Node, CommonJS
        module.exports = factory(
            require("jquery"        ),
            require("moment"        ),
            require("transition"    ),
            require("collapse"      ),
            require("datetimepicker")
        );
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(
            root.jQuery        ,
            root.moment        ,
            root.transition    ,
            root.collapse      ,
            root.datetimepicker
        );
    }
}(this, function ($, moment)
{
    "use strict";

    function initialize()
    {
        console.log("Initializing module controls/datetimepicker");

        var now = moment();

        $("#datetimepicker").datetimepicker({
            locale: "cs",                  // Set locale.
            format: "DD/MM/YYYY HH:mm:ss", // Set format.
            extraFormats: [ "DD/MM/YYYY", "YYYY-MM-DD HH:mm:ss", "YYYY-MM-DD" ], // Allows for several input formats to be valid
            // useCurrent: true,             // On show, will set the picker to the current date/time.
            defaultDate: now,              // Sets the picker default date/time. Overrides useCurrent.
            sideBySide: true,              // Shows the picker side by side when using the time and date together.
            showTodayButton: true,         // Show the "Today" button in the icon toolbar.
            showClear: true,               // Show the "Close" button in the icon toolbar.
            showClose: true,               // Show the "Clear" button in the icon toolbar.
            // useStrict: true,              // Defines if moment should use strict date parsing when considering a date to be valid.
            toolbarPlacement: "top",        // Changes the placement of the icon toolbar
            allowInputToggle: true,
        });
    }

    // exposed public methods
    return {
        initialize: initialize
    };
}));

// Key Bindings
// Default:
// up: function (widget) {
//     if (widget.find('.datepicker').is(':visible')) {
//         this.date(this.date().clone().subtract(7, 'd'));
//     } else {
//         this.date(this.date().clone().add(1, 'm'));
//     }
// },
// down: function (widget) {
//     if (!widget) {
//         this.show();
//     }
//     else if (widget.find('.datepicker').is(':visible')) {
//         this.date(this.date().clone().add(7, 'd'));
//     } else {
//         this.date(this.date().clone().subtract(1, 'm'));
//     }
// },
// 'control up': function (widget) {
//     if (widget.find('.datepicker').is(':visible')) {
//         this.date(this.date().clone().subtract(1, 'y'));
//     } else {
//         this.date(this.date().clone().add(1, 'h'));
//     }
// },
// 'control down': function (widget) {
//     if (widget.find('.datepicker').is(':visible')) {
//         this.date(this.date().clone().add(1, 'y'));
//     } else {
//         this.date(this.date().clone().subtract(1, 'h'));
//     }
// },
// left: function (widget) {
//     if (widget.find('.datepicker').is(':visible')) {
//         this.date(this.date().clone().subtract(1, 'd'));
//     }
// },
// right: function (widget) {
//     if (widget.find('.datepicker').is(':visible')) {
//         this.date(this.date().clone().add(1, 'd'));
//     }
// },
// pageUp: function (widget) {
//     if (widget.find('.datepicker').is(':visible')) {
//         this.date(this.date().clone().subtract(1, 'M'));
//     }
// },
// pageDown: function (widget) {
//     if (widget.find('.datepicker').is(':visible')) {
//         this.date(this.date().clone().add(1, 'M'));
//     }
// },
// enter: function () {
//     this.hide();
// },
// escape: function () {
//     this.hide();
// },
// 'control space': function (widget) {
//     if (widget.find('.timepicker').is(':visible')) {
//         widget.find('.btn[data-action="togglePeriod"]').click();
//     }
// },
// t: function () {
//     this.date(moment());
// },
// 'delete': function () {
//     this.clear();
// }
