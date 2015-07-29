define([
    "text!./MyTag.html",
    "MySecondTag"
],function(text){
    var MyTagProto = Object.create(HTMLElement.prototype);

    MyTagProto.createdCallback = function() {
        this.innerHTML = text;
    };

    var MyTag = document.registerElement('my-tag',{
        prototype: MyTagProto
    });

    return MyTag;
});