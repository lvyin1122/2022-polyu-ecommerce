import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">iBookStore</span>
            <span className="cart">Cart</span>
        </div>
    </div>
  )
}

export default Navbar