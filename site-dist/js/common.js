/* globals define, funcname */
/* exported serve, draw, response, DEBUG */

// Universal Module Definition
(function (root, factory)
{
    "use strict";
    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(
        [
            "jquery",
            "moment"
        ], factory);
    } else if (typeof exports === "object") {
        // Node, CommonJS
        module.exports = factory(
            require("jquery"),
            require("moment")
        );
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(
            root.jQuery,
            root.moment
        );
    }
}(this, function ($, moment)
{
    "use strict";

    console.log("Initializing module common");

    var DEBUG = true;

    $.ajaxPrefilter(function(options)
    {
        options.async = true;
    });

    function serve(url, timestamp)
    {
        var request = $.ajax
        ({
            url: url + "/" + timestamp,
            contentType: "application/python3.4"
        });

        console.log("Sending: " + url + "/" + timestamp);

        request.fail(function(jqXHR, textStatus)
        {
            alert("Request failed: " + textStatus);
        });

        return request;
    }

    function buildurl(url)
    {
        $("#datetimepicker").data("DateTimePicker").hide();
        var dateString = $("#datetimepicker").data("DateTimePicker").date();
        var timestamp = moment(dateString).unix();

        var length     = $("#event-length")    .val();
        var fileformat = $("#event-format")    .val();
        var collection = $("#event-collection").val();
        var name       = $("#event-name")      .val();
        var author     = $("#event-author")    .val();

        if (collection) {
            url = appendurl(url, collection);
        }
        if (length) {
            url = appendurl(url, length);
        }
        if (timestamp) {
            url = appendurl(url, timestamp);
        }
        if (fileformat) {
            url = appendurl(url, fileformat);
        }
        if (name) {
            url = appendurl(url, name);
        }
        if (author) {
            url = appendurl(url, author);
        }

        console.log("Calling " + url);
        return url;
    }

    function appendurl(url, str)
    {
        console.debug("Appending url: " + url + " with " + str);
        return url + "/" + str;
    }

    function draw()
    {
        console.log("Drawing page elements");

        var jquery = null;

        jquery = $("#include-navigation");
        if ( jquery.length > 0 ) {
            jquery.load("inc/navigation.inc");
        }

        jquery = $("#include-header");
        if ( jquery.length > 0 ) {
            jquery.load("inc/header.inc");
        }

        jquery = $("#include-breadcrumb");
        if ( jquery.length > 0 ) {
            jquery.load("inc/breadcrumb.inc");
        }

        jquery = $("#include-footer");
        if ( jquery.length > 0 ) {
            jquery.load("inc/footer.inc");
        }

        jquery = $("#include-controls");
        if ( jquery.length > 0 ) {
            jquery.load("inc/controls.inc");
        }

        jquery = $("#include-select");
        if ( jquery.length > 0 ) {
            jquery.load("inc/select.inc");
        }

        // jquery = $("#include-query");
        // if ( jquery.length > 0 ) {
        //     jquery.load("inc/query.html"); // Když tohle použiju, nefunguje celý module components/ndic!?
        // }

         //jquery = $("#include-timestamp");
         //if ( jquery.length > 0 ) {
         //    jquery.load("inc/timestamp.html"); // Když tohle použiju, nefunguje celý module components/timestamp!?
         //}
    }

    function response()
    {
        console.log("Drawing response");

        var url = buildurl(funcname);

        var jquery = $("#include-response");
        if ( jquery.length > 0 ) {
            jquery.load(url);
        }
    }

    return {
        serve   : serve,
        draw    : draw,
        response: response,
        buildurl: buildurl,
        DEBUG   : DEBUG
    };

}));
