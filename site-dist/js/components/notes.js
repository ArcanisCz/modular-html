/* globals define */

// Universal Module Definition
(function (root, factory)
{
    "use strict";
    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(
        [
            "jquery"    ,
            "underscore",
            "backbone",
            "text!../../inc/notes.html",
        ], factory);
    } else if (typeof exports === "object") {
        // Node, CommonJS
        module.exports = factory(
            require("jquery"    ),
            require("underscore"),
            require("backbone"  ),
            require("text!../../inc/notes.html")
        );
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(
            root.jQuery    ,
            root._,
            root.Backbone
        );
    }
}(this, function ($, _, Backbone, view)
{
    "use strict";

    $("#include-notes").html(view);

    var Note = Backbone.Model.extend({
    //Create a model to hold friend atribute
        note: null
    });

    var Notes = Backbone.Collection.extend({
        //This is our Notes collection and holds our Note models
        initialize: function (models, options) {
            this.bind("add", options.view.addNote);
            //Listen for new additions to the collection and call a view function if so
    }
    });

    var AppView = Backbone.View.extend({
    el: $("body"),
    initialize: function () {
        this.notes = new Notes( null, { view: this });
        //Create a friends collection when the view is initialized.
        //Pass it a reference to this view to create a connection between the two
    },
    events: {
        "click #btn-addnote":  "showPrompt",
    },
    showPrompt: function () {
        var get_name = prompt("Zadejte pozámku");
        var get_model = new Note({ note: get_name });
        //Add a new friend model to our friend collection
        this.notes.add( get_model );
    },
    addNote: function (model) {
        //The parameter passed is a reference to the model that was added
        $("#include-list").append('<li class="list-group-item">' + model.get('note') + '</li>');
        //Use .get to receive attributes of the model
    }
    });

    var appview = new AppView;
}));
