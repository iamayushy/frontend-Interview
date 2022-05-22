// Function Curry
const multiply = function(x, y){
    console.log(x * y)
}
const myby2 = multiply.bind(this, 2)
myby2(2)

const myby3 = multiply.bind(this, 3)
myby3(4)

//Function Closures
const mul = function(x){
    return function(y){
        console.log(x * y)
    }
}
mul(5)(3)