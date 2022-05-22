let search = document.querySelector('.search')
let normal = document.querySelector('.normal')
let debounce = document.querySelector('.debounce')
let throttle = document.querySelector('.throttle')
const goodfunction = canDoBetter(getData, 1000)
search.addEventListener('input', goodfunction)

function getData(){
    debounce.textContent = search.value
}
function canDoBetter(fun, delay){
    let timeout
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fun(...args)
        }, delay)
    }
}

