import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const ProductDetails = () => {
      // ham kisi bhi function ke ander NavLink ya frr Link nhi pass kar sakte hai to ham use Navigate() ka use karte hai 
    // useNavigate() -> jab bhi hame akk function ke andar koi bhi akk Link dalna hota hai to ham useNavigate ka use karte hai.
    const navigate = useNavigate();

    const NavigateHandler = () =>{
        navigate("/product")
    }

   //  URL ke andar se parameters nikalne ke use mai ata hai
    const params = useParams();
    console.log(params)
   
  return (
    <div>
        <h1>{params.name}</h1>
        <h2>Product Detail...</h2>
        <button onClick={NavigateHandler}>Go Back</button>
    </div>
  )
}

export default ProductDetails