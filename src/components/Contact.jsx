import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2';
import '../components/styles/contact.css'


const Contact = () => {

   const form = useRef()

   const handleRoute = () => {
      window.location.href = "/";
   }

      const sendEmail = (e) => {
         e.preventDefault();
   
         emailjs.sendForm('service_yzpz9dt', 'template_n32o1od', form.current, '4Mt_D66O4DHcvxwU7')
   };


   const mostrarAlerta = () => {
      Swal.fire(
         'Mensaje enviado con exito',
         'Gracias por contactarte con nosotros',
         'success'
      )
   }

   return (
      <div>
         <div className="container mb-5">
            <div className="row">
               <div className="col-12 text-center py-4 my-4">
                  <h1 className='titleContact'>¿Tiene alguna pregunta?</h1>
                  <hr />
               </div>
            </div>
            <div className="row">
               <div className="col-md-5 d-flex justify-content-center">
                  <img src="../assets/images/about/contact.svg" alt="Contactanos" height="300px" width="300px"/>
               </div>

               <form ref={form} onSubmit={sendEmail} className="col-md-6">
               <div className="mb-3">
                     <label  className="form-label">Nombre Completo</label>
                     <input type="text" className="form-control" name="name"  placeholder="Ingrese sui nombre completo" required/>
                  </div>
                  <div className="mb-3">
                     <label  className="form-label">Correo Electronico</label>
                     <input type="email" className="form-control" name="email" placeholder="name@example.com" required/>
                  </div>
                  <div className="mb-3">
                     <label className="form-label">Ingrese su Comentario</label>
                     <textarea className="form-control" name="message" rows="7"></textarea>
                  </div>

               <div className='botonContact'>
                  <button className="btn btnVolver"  onClick={handleRoute}>
                  <i className='fa fa-arrow-left mx-2'></i>Volver a la Tienda
                  </button>

                  <button type="submit" className="btn mx-3 btnEnviarMensaje" onClick={() => mostrarAlerta()} >
                     <i className='fa fa-envelope mx-2' ></i> Enviar Mensaje
                  </button> 
               </div>

               </form>
            </div>
         </div>
      </div>
   )
}

export default Contact