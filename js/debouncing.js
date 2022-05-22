let search = document.querySelector('.search')
let normal = document.querySelector('.normal')
let debounce = document.querySelector('.debounce')
let throttle = document.querySelector('.throttle')
const goodfunction = logger(getData, 1000)
search.addEventListener('input', goodfunction)

function getData(){
    throttle.textContent = search.value
}
// function canDoBetter(fun, delay){
//     let timeout
//     return (...args) => {
//         clearTimeout(timeout)
//         timeout = setTimeout(() => {
//             fun(...args)
//         }, delay)
//     }
// }

function logger(fun, delay){
    let flag = true
    return function(){
        if(flag) {
            fun()
            flag = false
            setTimeout(() => {
                flag = true
            }, delay)
        }
       
    }
}