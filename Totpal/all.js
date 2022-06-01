// Question 1 
(function(){
    var a = b = 3; // b = 3 and var a = b
})()

console.log("a defined? "+(typeof a !== 'undefined')) // false
console.log("b defined? "+(typeof b !== 'undefined')) // true

// Question 2
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();