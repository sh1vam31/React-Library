import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'

const Create = (props) => {

    const todo = props.todo
    const settodo = props.settodo

    const [title , setTitle] = useState('')

    const submitHandler= (e) => {
        e.preventDefault();
        const newtodo = {
          // nanoid ia a package to generate unique id
          id : nanoid(),
          title : title,
          completed : false,
    
        }
        console.log("title:", title);
    
        let copytodo = [...todo]
        copytodo.push(newtodo)
        settodo(copytodo)
    
        setTitle('')
      }

  return (
    <>
        <h1> Create Tasks </h1>

<form onSubmit={submitHandler}>

  <input onChange={(e) => setTitle(e.target.value)}
   type="title"  
   value={title}
   placeholder='title'/>

  <br /> <br />

  <button type='submit'>Add Todo</button>

</form>
    </>
  )
}

export default Create