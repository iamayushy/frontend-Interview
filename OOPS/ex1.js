const Human = {
    name: 'Dev',
    age: 23,

    fetchInfo(){
        return this.name +' '+ this.age
    },
    setter(change){
        this.name = change
    },
    getter(){
        return this.name
    }
}


Human.setter('Kareem')
console.log(Human.fetchInfo())
console.log(Human.getter())