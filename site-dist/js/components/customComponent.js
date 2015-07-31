define([
], function () {

    return function(selector, templateSelector, initFunction){
        var templates = document.querySelector('link[rel="import"]').import;
        var template = templates.querySelector(templateSelector);
        document.querySelector(selector).appendChild(template.content.cloneNode(true));
        var element = document.querySelector(selector).firstElementChild;
        if(initFunction){
            initFunction.call(element, element);
        }
        return element;
    };
});