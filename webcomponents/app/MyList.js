define([

],function(text){
    var MyTagProto = Object.create(HTMLElement.prototype);

    MyTagProto.createdCallback = function() {
        var ul = document.createElement("UL");
        var h1 = document.createElement("H1");
        h1.innerHTML = this.getAttribute("header");
        var inner = this.innerHTML;
        this.innerHTML = "";
        ul.innerHTML = inner;

        this.appendChild(h1);
        this.appendChild(ul);
    };

    var MyTag = document.registerElement('my-list',{
        prototype: MyTagProto
    });
    return MyTag;
});