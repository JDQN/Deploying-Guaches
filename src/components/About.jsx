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
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam repellendus, neque ut earum voluptatum veniam beatae, consequatur in sint, corporis at sequi? Sit, esse tempora voluptas non laudantium modi.
                     Dolorem quod ipsam ab omnis obcaecati! Ex incidunt, ea eaque accusamus libero sapiente corrupti doloribus dolorem exercitationem dolor velit! Animi, maxime illo! Consequuntur, impedit ullam obcaecati distinctio aspernatur delectus nulla!
                     Amet cumque repudiandae animi aliquam dolor provident iusto, temporibus adipisci nesciunt consequatur quaerat nemo mollitia libero pariatur in! Nulla, quos veritatis placeat porro qui ea repellat alias rem dolorum et!
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