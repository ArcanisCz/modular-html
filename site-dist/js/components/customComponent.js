define([
    "jquery"
], function ($) {
    return function(parentElement, selector, templateSelector, initFunction){
        parentElement = $(parentElement)
        var templates = document.querySelector('link[rel="import"]').import;
        var template = templates.querySelector(templateSelector);
        parentElement.find(selector).append(template.content.cloneNode(true));
        var element = parentElement.find(selector)[0];
        if(initFunction){
            initFunction.call(element, element);
        }
        return element;
    };
});