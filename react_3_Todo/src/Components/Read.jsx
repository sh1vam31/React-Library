import React from 'react'

const Read = (props) => {

    const todo = props.todo
    const settodo = props.settodo

    const rendertodo = todo.map((todo) =>{
        return <li key={todo.id}> {todo.title} </li>
        })

  return (
    <>
        <h1>Pending Todos</h1>
      <ol>{rendertodo}</ol>
      </>
  )
}

export default Read