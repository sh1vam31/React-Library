import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {

    const navigate = useNavigate();
    // ham kisi bhi function ke ander NavLink ya frr Link nhi pass kar sakte hai to ham use Navigate() ka use karte hai 
    // useNavigate() -> jab bhi hame akk function ke andar koi bhi akk Link dalna hota hai to ham useNavigate ka use karte hai.
    const NavigateHandler = (name)=> {
        navigate(`/product/details/${name}`)
    }
  return (
    <div>
        <h1>Products</h1>
        <div>
            <h1>Product1</h1>
            <button  onClick={() => NavigateHandler("Product1")}>See Details</button>
        </div>
        <div>
            <h1>Product2</h1>
            <button  onClick={() =>NavigateHandler("Product2")}>See Details</button>
        </div>
        <div>
            <h1>Product3</h1>
            <button  onClick={() =>NavigateHandler("Product3")}>See Details</button>
        </div>
    </div>
  )
}

export default Product