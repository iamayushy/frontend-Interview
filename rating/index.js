let star = document.querySelectorAll('.star')


star.forEach((rate, index) => {
    let c = false
    rate.addEventListener('click', (check) => {
        if(c){
            c = false
            rate.style.backgroundColor = 'transparent'
        }
        else{
            c = true
            rate.style.backgroundColor = 'rgb(249, 255, 60)'
        }
        console.log(index)
        
        
    })
})