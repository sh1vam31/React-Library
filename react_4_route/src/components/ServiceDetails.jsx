import React from 'react'
import { useNavigate } from 'react-router-dom'


const ServiceDetails = () => {
      // ham kisi bhi function ke ander NavLink ya frr Link nhi pass kar sakte hai to ham use Navigate() ka use karte hai 
    // useNavigate() -> jab bhi hame akk function ke andar koi bhi akk Link dalna hota hai to ham useNavigate ka use karte hai.
    const navigate = useNavigate();

    const NavigateHandler = () =>{
        navigate("/service")
    }
   
  return (
    <div>
        <h1>Details</h1>
        <h2>Choose more </h2>
        <button onClick={NavigateHandler}>Go Back</button>
    </div>
  )
}

export default ServiceDetails;


