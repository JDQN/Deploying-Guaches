import React from 'react'
import { NavLink } from 'react-router-dom'
import '../components/styles/about.css'

const About = () => {
   return (
      <div>
         <div className="container py-5 my-5">
            <div className="row">
               <div className="col-md-8">
                  <h1 className="textAbout fw-bold">Sobre Nosotros</h1>
                  <p className="parrafoAbaout lead">
                     Somos un emprendimiento rolo dedicado al estampado y sublimado de textiles 
                     y accesorios de toda clase para ocasiones especiales y empresas 
                     (mugs, camisetas, gorras, buzos, medias) en diferentes materiales 
                     de excelente calidad. Nuestro enfoque es hacer que las personas tengan 
                     prendas diferentes, que resalten entre las cosas que vemos diariamente en el común, 
                     con un toque de simplicidad, haciendo lo que mejor sabemos hacer estampando y sublimando.
                  </p>
                  <NavLink to="/contact" className="btn btnAbout btn-lg">
                     <i className='fa fa-envelope mx-2'></i>Contactanos
                  </NavLink>
               </div>
               <div className="col-md-6 container">
                  <img src="../assets/images/about/about.svg" alt="About" className='imgAbout'/>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About