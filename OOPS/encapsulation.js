/*
This is a way to encapsulate the data from the constructor object. Avoid this keyword and use getter and setter


*/

function employee(name, age, designation){
    let _name = name
    let _age = age
    let _designation = designation

    this.getName =  function(){
        return _name
    }
    this.getAge = function(){
        return _age
    }
    this.getDesignation = function(){
        return _designation
    }
    this.setDesignation = function(works){
        _designation = works
    }
}
let one = new employee('Chaman', 34, 'Developer')
console.log(one.getAge())
one.setDesignation('Firefox Developer')
console.log(one.getDesignation())