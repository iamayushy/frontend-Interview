const product = {
    name: 'Tasneem',
    price: 3400,
    amount: 2290,
    madeIn: 'India',

    totalBill(){
        return this.price * this.amount
    }
}

// iterating
function set(){
    for (x in product){
        if (x == "name"){
            product.name= 'Bottle'
        }
        else if(x == "madeIn"){
            product.madeIn = 'China'
        }
        
    }
}