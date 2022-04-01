import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav>
        <div className="nav-container">
            <div className="logo">React assignment</div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/product">Product</Link>
                <Link to="/todo">ToDo</Link>
                <Link to="/services">services</Link>
            </div>
            <div className="form-link">
                <Link to="/signup">Signup</Link> 
                <Link to="/login">Login</Link>   
            </div>
        </div>
    </nav>
    
    </>
  )
}

export default Navbar