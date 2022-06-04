// Callbacks
//functions Are first class are object
// pass argument to function
// also return function
/*Callback => Any function that is passed to function as an argument
to another function is called as callback function

HOF => A function which accepts function as arguments or returns a
function is called a higher order function
*/
// Why callbacks ?
/*
A callbacks function that executes immediatley is known as
synchronous cbf


*/
//Eg : 
const arr = [1, 2, 4, 10, 12, 20]
let ans = arr.map((ele => ele * 20))
console.log('Map', ans)
ans = arr.filter(ele => ele % 2 === 0)
console.log('Filter', ans)
ans = arr.sort((a, b) => b - a)
console.log('Rev', ans)

/*
Async call
1. Use to continue of resume a code execution after some operation
is completed.
2. Delay something after something is done
*/
