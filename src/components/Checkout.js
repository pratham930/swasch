import React from 'react'
import { NavLink } from 'react-router-dom'
import "./cart.css"

const Checkout = () => {
    return (
        <div className='lastpage'>
      
             <h1>THANK YOU FOR YOUR ORDER</h1>
            
          <h2> <NavLink className='active_class' to="/cart"> Order Again</NavLink></h2> 
        </div>
    )
}

export default Checkout
