import React from 'react'
import { useState } from 'react'

const App = () => {

  const[todo , settodo] = useState(
    [
      {id:1 , title:'Kaam karle bhai' , completed:false},
    ]
  )

  const [title , setTitle] = useState('')

  const [completed, setcompleted] = useState()

  const [gender, setgender] = useState()

  const [city, setcity] = useState('mumbai')



  return (
    <div>
      <h1> Create Tasks </h1>

      <form>

        <input onChange={(e) => setTitle(e.target.value)}
         type="title"  
         value={title}
         placeholder='title'/>

        <br /> <br />

        <input
         checked={completed}
        //  checked= ""
         onChange={(e) => setcompleted(e.target.checked)}
         // onChange={(e) => console.log(e.target.checked)}
         type="checkbox" /> Completed

        <br /> <br />

        <input 
        value = "male"
        type="radio" onChange={(e) => setgender(e.target.value) } 
        checked = {gender == "male" && true}
        /> male 

        <input 
        value = "Female"
        type="radio" onChange={(e) => setgender(e.target.value) } 
        checked = {gender == "Female" && true} 
        /> Female 

        <br /> <br />

        <select 
        value={city}
        onChange={(e) => setcity(e.target.value)}>
          <option value="kanpur">Kanpur</option>
          <option value="bangalore">Bangalore</option>
          <option value="mumbai">Mumbai</option>
          <option value="davengere">Davengare</option>
        </select>

        <br /> <br />

        <button type='submit'>Add Todo</button>

      </form>

    </div>
  )
}

export default App