import { Button, Input } from '@mantine/core'
import { useState } from 'react'
import './App.css'
import { TodoBox } from './Components/TodoBox'

function App() {
  const [click, setClick] = useState(true)
  const [taskList, setTaskList] = useState([<TodoBox Title={'Ongoing'}/>])
  const [handle, setHandle] = useState('')
  const handleInput = (e) => {
    if(handle.length < 4){
      if(e.key === 'Enter'){
        setClick(true)
        return
      }
      
    }
    if(e.key === 'Enter'){
      console.log(e.key)
    setTaskList([
      ...taskList,
      <TodoBox Title={handle}/>
    ])
    setClick(true)
  }
  } 

  return (
    <div className="App">
      {click ?
     <Button onClick={() => setClick(false)}>Create New Board</Button> :
     <Input onKeyPress={handleInput}  value={handle} onChange={(e)=>setHandle(e.target.value)} placeholder='Title'></Input>
    }
    <div className='tasklist'>
     {taskList.map(ele => {
       return(
         <div>
           {ele}
           </div>
       )
     })}
    </div>
    <div>

    </div>
    
    </div>
  )
}

export default App
