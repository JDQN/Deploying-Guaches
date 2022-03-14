import React from 'react'
import '../components/styles/contact.css'


const Contact = () => {

   const handleRoute = () => {
      window.location.href = "/";
   }

   return (
      <div>
         <div className="container mb-5">
            <div className="row">
               <div className="col-12 text-center py-4 my-4">
                  <h1>¿Tiene alguna pregunta?</h1>
                  <hr />
               </div>
            </div>
            <div className="row">
               <div className="col-md-5 d-flex justify-content-center">
                  <img src="../assets/images/about/contact.svg" alt="Contactanos" height="300px" width="300px"/>
               </div>
               <div className="col-md-6">
               <div className="mb-3">
                     <label for="exampleFormControlInput1" className="form-label">Nombre Completo</label>
                     <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                  </div>
                  <div className="mb-3">
                     <label for="exampleFormControlInput1" className="form-label">Correo Electronico</label>
                     <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                  </div>
                  <div className="mb-3">
                     <label for="exampleFormControlTextarea1" className="form-label">Ingrese su Comentario</label>
                     <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>

               <div className='botonContact'>
                  <button className="btn btn-outline-primary "  onClick={handleRoute}>
                  <i className='fa fa-arrow-left mx-2'></i>Volver a la Tienda
                  </button>

                  <button className="btn btn-outline-secondary mx-3 ">
                     <i className='fa fa-envelope mx-2' ></i>Enviar Mensaje
                  </button> 
               </div>

               </div>
            </div>
         </div>
      </div>
   )
}

export default Contact