import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../../components/styles/bottones.css'

const CardBtn = () => {
   const state = useSelector((state) => state.addItem) 
   return (
      <>
         <NavLink to="/cart" className="btn btnBotton ms-2">
            <i className='fa fa-shopping-cart me-1'></i> Cart ({state.length}) 
         </NavLink>
      </>
   )
}

export default CardBtn