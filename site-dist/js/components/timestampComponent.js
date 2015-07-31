define([
    "components/customComponent",
    "jquery",
    "moment",
    //not referenced, only needs to load
    "touchspin",
    "transition",
    "collapse",
    "datetimepicker"
], function (customComponent, $, moment) {
    return function(selector, templateSelector) {
        customComponent(selector, templateSelector, createdCallback);
    };

    function createdCallback(element) {
        var timestep = $(element).find("#timestep");
        var timestamp = initTouchspin($(element).find("#timestamp"), timestep);
        var datepicker = initDatetimepicker($(element).find("#datetimepicker"));

        timestamp.val(toUnix(datepicker));

        datepicker.on("dp.change", function () {
            timestamp.val(toUnix(datepicker));
        });
        timestamp.change(function () {
            $("#datetimepicker").data("DateTimePicker").date(fromUnix(timestamp));
        });

        $("#event-process").click(function(){
            timestamp.val(toUnix(datepicker));
        });
        $("#event-reset").click(function () {
            var now = moment();
            datepicker.data("DateTimePicker").date(now);
        });

        timestamp.change(function () {
            $(element).find("input#timestamp").trigger("touchspin.updatesettings", {step: $("#timestep").val()});
        });
    }

    function fromUnix(timestamp) {
        var value = timestamp.val();
        var isotime = moment.unix(value);
        return isotime;
    }

    function toUnix(datepicker) {
        var isotime = datepicker.data("DateTimePicker").date();
        var timestamp = moment(isotime).unix();
        if (isNaN(timestamp)) {
            timestamp = "";
        }
        return timestamp;
    }

    function initDatetimepicker(element) {
        var now = moment();
        element.datetimepicker({
            locale: "cs",                  // Set locale.
            format: "DD/MM/YYYY HH:mm:ss", // Set format.
            extraFormats: ["DD/MM/YYYY", "YYYY-MM-DD HH:mm:ss", "YYYY-MM-DD"], // Allows for several input formats to be valid
            // useCurrent: true,             // On show, will set the picker to the current date/time.
            defaultDate: now,              // Sets the picker default date/time. Overrides useCurrent.
            sideBySide: true,              // Shows the picker side by side when using the time and date together.
            showTodayButton: true,         // Show the "Today" button in the icon toolbar.
            showClear: true,               // Show the "Close" button in the icon toolbar.
            showClose: true,               // Show the "Clear" button in the icon toolbar.
            // useStrict: true,              // Defines if moment should use strict date parsing when considering a date to be valid.
            toolbarPlacement: "top",        // Changes the placement of the icon toolbar
            allowInputToggle: true
        });
        return element;
    }

    function initTouchspin(element, timestepElement) {
        element.TouchSpin(
            {
                initval: "",                    // Applied when no explicit value is set on the input with the value attribute.
                min: 0,                         // Minimum value.
                max: 9999999999,                // Maximum value.
                step: timestepElement.val(),     // Incremental/decremental step on up/down change.
                forcestepdivisibility: "round", // How to force the value to be divisible by step value: 'none' | 'round' | 'floor' | 'ceil'
                decimals: 0,                    // Number of decimal points.
                booster: true,                  // If enabled, the the spinner is continually becoming faster as holding the button.
                boostat: 5,                     // Boost at every nth step.
                maxboostedstep: 31557600,       // Maximum step when boosted.
                mousewheel: true,               // Enables the mouse wheel to change the value of the input.
                prefix: "",
                postfix: "[s]"
            });
        return element;
    }
});