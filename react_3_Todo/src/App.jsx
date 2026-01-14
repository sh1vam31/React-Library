import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import Create from './Components/Create.jsx'
import Read from './Components/Read.jsx'

const App = () => {

  const[todo , settodo] = useState(
    [
      {id:1 , title:'Kaam karle bhani' , completed:false},
    ]
  )

 

  

  console.log("todo:", todo);






  return (
    <>
    
    <Create todo={todo} settodo={settodo} />
    <Read todo={todo} settodo={settodo} />
     
    </>
  )
}

export default App
