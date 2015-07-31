define([
], function () {
    function commonInclude(selector, templateSelector) {
        simpleComponent(selector, templateSelector, function(){});
    }

    function simpleComponent(selector, templateSelector, initFunction){
        var templates = document.querySelector('link[rel="import"]').import;
        var template = templates.querySelector(templateSelector);
        document.querySelector(selector).appendChild(template.content.cloneNode(true));
        var element = document.querySelector(selector).firstElementChild;
        initFunction.call(element, element);
    }


    return {
        commonInclude: commonInclude,
        simpleComponent: simpleComponent
    }
});