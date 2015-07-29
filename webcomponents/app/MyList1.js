define([
    "MySecondTag"
],function(MySecondTag){
    var MyTagProto = Object.create(HTMLElement.prototype);
    var someList = ["jedna", "dva", "tri"];

    MyTagProto.createdCallback = function() {
        for(var i = 0; i < someList.length; i++){
            var tag = new MySecondTag();
            tag.setAttribute("pokusattr", someList[i]);
            this.appendChild(tag);
        }
    };

    var MyTag = document.registerElement('my-list1',{
        prototype: MyTagProto
    });
    return MyTag;
});