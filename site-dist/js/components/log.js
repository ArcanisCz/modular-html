/* globals define, prettyPrint, funcname */
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
            "prettify",
            "text!../../inc/query.html",
            "libraries/datetimepicker"
        ], factory);
    } else if (typeof exports === "object") {
        // Node, CommonJS
        module.exports = factory(
            require("jquery"),
            require("boostrap"),
            require("common"),
            require("moment"),
            require("prettify"),
            require("text!../../inc/query.html"),
            require("libraries/datetimepicker")
        );
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(
            root.jQuery,
            root.boostrap,
            root.common,
            root.moment,
            root.prettify,
            root.text("inc/query.html"),
            root.datetimepicker
        );
    }
}(this, function($, bootstrap, common, moment, prettify, view, datetimepicker)
{
    "use strict";

    console.log("Initializing module controls/log");

    $("#include-query").html(view); // Tohle bych chtěl aby bylo v rámci common.draw, ale když to tam dám, tak to nefunguje!?
    common.draw();
    datetimepicker.initialize();
    common.response();

    function process()
    {
        // Stop the browser from submitting the form.
        event.preventDefault();

        // CherryPy URL
        var url = common.buildurl(funcname);
        var request = $.ajax({"url": url});

        request.done(function(response)
        {
            $("#include-response").html(response);
        });
        request.fail(function(jqXHR, textStatus)
        {
            alert("Request failed: " + textStatus);
        });
    }

    function toggle()
    {
        $("#button-highlight").toggleClass("btn-primary");
        $("#button-highlight").toggleClass("btn-info");

        if ( $("#button-highlight").hasClass("btn-primary") )
        {
            $('#include-response').removeClass("prettyprinted");
            $("#button-highlight").text("Formátovat");
        }
        else
        {
            $("#button-highlight").text("Neformátovat");
        }
    }

    function prettyprint()
    {
        if ( $("#button-highlight").hasClass("btn-primary") )
        {
            $('#include-response').removeClass("prettyprinted");
            process();
        }
        else
        {
            prettyPrint();
        }
    }

    $(document).ready(function()
    {
        // Set up an event listener for the contact form.
        $("#event-form").submit(function(event)
        {
            // Stop the browser from submitting the form.
            event.preventDefault();
            $('#include-response').removeClass("prettyprinted");
            $("#button-highlight").removeClass("btn-info");
            $("#button-highlight").addClass("btn-primary");
            $("#button-highlight").text("Formátovat");
            process();
        });

        $("#event-highlight").click(function(event)
        {
            event.preventDefault();
            toggle();
            prettyprint();
        });

        $("#event-download").click(function(event)
        {
            event.preventDefault();

            var url = common.buildurl("/call/download");
            window.open(url);
        });
    });

    $(document).on("shown", "#include-response", function()
    {
        $('#include-response').removeClass('prettyprinted');
        prettyPrint();
    });
}));
