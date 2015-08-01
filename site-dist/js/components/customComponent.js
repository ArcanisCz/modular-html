define([
    "jquery"
], function ($) {
    return function (parentElement, selector, templateSelector, initFunction) {
        parentElement = $(parentElement);
        var templates = document.querySelectorAll('link[rel="import"]');
        for (var i= 0; i < templates.length; i++) {
            var template = templates[i].import.querySelector(templateSelector);
            if (template != null) {
                parentElement.find(selector).append(template.content.cloneNode(true));
                var element = parentElement.find(selector)[0];
                if (initFunction) {
                    initFunction.call(element, element);
                }
                return element;
            }
        }
    };
});