import { Delete } from 'lucide-react'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import { todocontext } from '../Wrapper'

const Read = (props) => {

    // context create karne ke baad jo bhi data wrapper component mai pass kara hoga vo saare childs and grand childes mai aa gay hoga 
    const [todo, settodo] = useContext(todocontext)  // call the useContext(pass the name of the context) save the value and then print it .
   //  console.log(value);

    // const todo = props.todo
    // const settodo = props.settodo

    const x = {color: 'blue'}

    // agar ham akk Read.css file bana ke use import karte to wo external css hota
    // orr agar usme h1{ colcor: red} likhte to wo pure project mai jaha jaha par h1 tag hoga uska color red ho jata hai ye react ka default behaviour hai isliye ham Tailwind ka use karte hai ya frr className dete hai element ko orr us classname par css lagate hai

    const rendertodo = todo.map((todo) => {
        return <li key={todo.id}>
            {todo.title} | {" "}
            <span onClick={() => { DeleteHandaler(todo.id) }} style={x} >Delete</span>
        </li>
    })

    // to delete an item in a list , you filter it out of the array and use the setter function 
    const DeleteHandaler = (id) => {
        const filterTodo = todo.filter((todo) => {
            return todo.id != id
        })
        settodo(filterTodo)

        toast.error("Todo deleted successfully")
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