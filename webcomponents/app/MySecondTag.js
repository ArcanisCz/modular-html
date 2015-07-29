define([
    "text!./MySecondTag.html"
],function(text){
    var MyTagProto = Object.create(HTMLElement.prototype);

    MyTagProto.createdCallback = function() {
        this.innerHTML = text;
        this.addEventListener('click', function(e) {
            console.log("clicked", this.getAttribute("pokusattr"));
        });
    };

    var MyTag = document.registerElement('my-second-tag',{
        prototype: MyTagProto
    });


    return MyTag;
});