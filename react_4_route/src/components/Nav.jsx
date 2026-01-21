import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (

// NavLink hame akk style naam ka collback function deta hai jiske andar kaafi saare features deta hai jeseki isActive, iski help se ham link par color add kar sakte hai 
    <div>
        <NavLink style={ (e) => ({color: e.isActive ? "red" : "black"}) } to="/">
            Home
            </NavLink>
            <br />
        <NavLink style={ (e) => ({color: e.isActive ? "red" : "black"}) } to="/product">
            Product
            </NavLink>
            <br />
        <NavLink style={ (e) => ({color: e.isActive ? "red" : "black"}) } to="/about">
        About
        </NavLink>
        <br />
        <NavLink style={ (e) => ({color: e.isActive ? "red" : "black"}) } to="/service">
            Service
            </NavLink>
    </div>
  )
}

export default Nav