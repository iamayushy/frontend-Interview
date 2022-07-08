function directory(str){
	let trav = str.split('/')
  let stack = []
  for(let i = 0; i < trav.length; i++){
  	if(trav[i] === "" || trav[i]==='.'){
    	continue
    }
    else if(trav[i] === '..' && stack.length > 0){
    	stack.pop()
    }

    else{
    stack.push(trav[i])
    }
  }
  return stack[stack.length - 1] ? stack[stack.length - 1] : 'root'
}
console.log(directory('/a/b/c/../../'))
console.log(directory('/a/b/c'))
console.log(directory('/../b/../c/'))
console.log(directory("/./"))
