let content = document.querySelector('.display-box')
let find = document.querySelector('#find')
let loader = document.querySelector('.loader')
var loading = false
const callAPI = helper(better, 1000)

find.addEventListener('input', callAPI)
function better(){
    content.innerHTML = ''
    callme(find.value)
    loading = true
    show(loading)
    
}
function helper(call, delay){
    let timeout
    return function(){
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            call()
        }, delay)
    }
}



function callme(call){
fetch(`https://restcountries.com/v3.1/name/${call}`)
.then(res => res.json())
.then(op => {console.log(op)
itereate(op)})
.catch(err => dead(call))
}
function itereate(data){
    data.forEach(element => {
        // console.log(element.currencies, element.currencies.symbol)
        //flag, region, name
        const data = element.currencies
        let curr = document.createElement('p')
        for(let key in data){
            console.log(data[key].name, data[key].symbol) //currency
            curr.innerHTML = ` Currency: ${data[key].name}  ${data[key].symbol}`
        }
       

        let img = document.createElement('img')
        img.src = element.flags.png
        let name = document.createElement('h3')
        name.innerHTML = `Country Name:  ${element.name.common}`
        let continent = document.createElement('p')
        continent.innerHTML = `Region: ${element.region}`
        let pop = document.createElement('p')
        pop.innerHTML = `Population ${element.population}`
        let detail = document.createElement('article')
        detail.classList.add('box')
        
        detail.appendChild(img)
        detail.appendChild(name)
        detail.appendChild(continent)
        detail.appendChild(pop)
        detail.appendChild(curr)
        content.append(detail)

        loading = false
        show(loading)
        
        

        
        
    });
}
function dead(call){
    loading = false
    show(loading)
    let err =  document.createElement('div')
    err.className = 'err'
    
    if(call.length === 0){
        err.innerHTML = 'Search Your Nation'
    }
    else{
        err.innerHTML = "Can't Find Your Search Country"
    }
    content.append(err)
}
function show(load){
    if(load) {
        loader.style.display='block'
    }
    else{
        loader.style.display='none'
    }
}
