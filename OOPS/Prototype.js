// prototype in javascript

function work(name, age){
    this.age = age
    this.name = name
}

let one = new work('Ayush', 94)
work.prototype.play = function(){
    return this.name
}
work.prototype.setName = function(some){
    this.name = some
}
console.log(one.play())
one.setName('Kammerr')
console.log(one)


