define([
    "components/customComponent",
    "jquery"    ,
    "underscore",
    "backbone"
], function (customComponent, $, _, Backbone) {
    return function(selector, templateSelector){
        customComponent(selector, templateSelector, createdCallback);
    };

    function createdCallback(element){
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
            el: element,
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
                $(element).find("#include-list").append('<li class="list-group-item">' + model.get('note') + '</li>');
                //Use .get to receive attributes of the model
            }
        });
        var appview = new AppView;
    }
});