import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Service = () => {
    const navigate = useNavigate();

    const NavigateHandler = () =>{
        navigate("/service/details")
    }
  return (
    <div>
        <h1>Service</h1>
        <button onClick={NavigateHandler}>
            More Details
        </button>
        <hr></hr>
        {/* child route ko parent child vaal epage mai hi show karna hota  hai to ham outlet ka use karte hai  */}
        <Outlet/>
    </div>
  )
}

export default Service