import React from 'react'
import Home from '../components/Home'
import Product from '../components/Product'
import Service from '../components/Service'
import About from '../components/About'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from '../components/ProductDetails'
import ServiceDetails from '../components/ServiceDetails'


const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Product/>} />
        {/* jab bhi ham route mai : ka use karte hai to vo dynamic ho jata hai matlab ki ham type karte hai name , id to vo specific name ya id open hoti hai */}
        <Route path='/product/details/:name' element={<ProductDetails/>} />
        {/* Agar hame serviceDetails ka page service vale page mai hi open karna hai to ham service route ke andar hi serviceDetails route ko daal dete hai */}
        <Route path='/service' element={<Service/>}>
          <Route path='/service/details' element={<ServiceDetails/>} />
         </Route>
        
        <Route path='/about' element={<About/>} />
      </Routes>
  )
}

export default MainRoutes