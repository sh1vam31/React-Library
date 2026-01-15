import { Delete } from 'lucide-react'
import React from 'react'

const Read = (props) => {

    const todo = props.todo
    const settodo = props.settodo

    const x = {color: 'blue'}

    // agar ham akk Read.css file bana ke use import karte to wo external css hota
    // orr agar usme h1{ colcor: red} likhte to wo pure project mai jaha jaha par h1 tag hoga uska color red ho jata hai ye react ka default behaviour hai isliye ham Tailwind ka use karte hai ya frr className dete hai element ko orr us classname par css lagate hai

    const rendertodo = todo.map((todo) => {
        return <li key={todo.id}>
            {todo.title} | {" "}
            <span onClick={() => { DeleteHandaler(todo.id) }} style={x} >Delete</span>
        </li>
    })

    const DeleteHandaler = (id) => {
        const filterTodo = todo.filter((todo) => {
            return todo.id != id
        })
        settodo(filterTodo)
    }


    return (
        <>

            {/* Inline CSS */}
            <h1 style={{ color: "tomato" }}>Pending Todos</h1>
            <ol>{rendertodo}</ol>
        </>
    )
}

export default Read