import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Buttons/Login'
import Signup from './Buttons/Signup'
import CardBtn from './Buttons/CardBtn'
import '../components/styles/header.css'


const Header = () => {
   return (
      <>
         <nav className="Navbar navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">

               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>

               <div className="collapse navbar-collapse" id="navbarSupportedContent">

                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/products">Product</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                     </li>
                  </ul>
                  <NavLink className='navbar-brand  guaches' to="/">
                     <img className='imgNav' src="/assets/images/home/logo.png" alt="" />
                  </NavLink>
                  <div className='botonesNavbar'>
                     {/* Aqui estoy trallendo mi componente Login.jsx y Signup.jsx  (Ventana Modal login y signup)*/}
                     <Login/>
                     <Signup/>
                     <CardBtn/>
                  </div>
               </div>
            </div>
         </nav>
      </>
   )
}

export default Header