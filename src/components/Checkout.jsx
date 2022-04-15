import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import '../components/styles/checkout.css'


const Checkout = () => {
   const state = useSelector((state) => state.addItem)
   const [message, setMessage] = useState('')

   const createMessage = () => {
      let message = `Hola ${state.map((item) =>{
         return(
            JSON.stringify(item.title) + ' *  ' +
            JSON.stringify(item.price) + 
            ' \n\n Total a pagar ' + total
         )
      })
   }` 
   message = encodeURI(message)
   return message
}


   let total = 0;
   const itemList = (item) => {

      total = total + item.price;

      return(
         <li className='list-group-item d-flex justify-content-between lh-sm'>
            <div className="my-2">
               <h6 className='my-0'>{item.title}</h6>
            </div>
            <span className='text-muted'>{item.price}</span>
         </li>
      )
   }

   return (
      <>
         <div className="container my-5">
            <div className="row g-5">
               {/* Inicio formulario carrito */}
                  <div className="col-md-5 col-lg-4 order-md-last">
                     <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-products">Tus Productos</span>
                        <i className="badge btnTotal rounded-pill">{state.length}</i>
                     </h4>
                     <ul className="list-group mb-3">
                        {state.map(itemList)}

                        <li className="list-group-item d-flex justify-content-between">
                           <span>Total a Pagar</span>
                           <strong>$ {total}</strong>
                        </li>
                     </ul>

                     {/* <form className="card p-2">
                        <div className="input-group">
                           <input type="text" className="form-control" placeholder="Promo code" />
                           <button type="submit" className="btn btn-secondary">Pagar el total de {total}</button>
                        </div>
                     </form> */}
                  </div>
               {/* end formulario carrito */}

               {/* Inicio Formulario de contacto */}
                  <div className="col-md-7 col-lg-8">
                     <h4 className="mb-3 text-foulario">Formulario de Contacto</h4>
                     <form className="needs-validation" novalidate="">

                        <div className="row g-3">
                           <div className="col-12">
                              <label htmlFor="firstName" className="form-label">Nombre completo</label>
                              <input type="text" className="form-control" id="firstName" placeholder="Nombre completo" value="" required=""/>
                              <div className="invalid-feedback">
                                 Introduzca un correo valido.
                              </div>
                           </div>
                        </div>

                        
                        <div className="col-12">
                           <label htmlFor="email" className="form-label">Correo electronico <span className="text-muted"></span></label>
                           <input type="email" className="form-control" id="email" placeholder="Email" />
                           <div className="invalid-feedback">
                              Introduzca un correo valido.
                           </div>
                        </div>

                        <div className="col-12">
                           <label htmlFor="address" className="form-label">Dirrección de entrega</label>
                           <input type="text" className="form-control" id="address" placeholder="Dirección de entrega" required="" />
                           <div className="invalid-feedback">
                              Introduzca una direccion valida.
                           </div>
                        </div>

                        <div className="col-12">
                           <label htmlFor="address" className="form-label">Telefono de contacto</label>
                           <input type="text" className="form-control" id="address" placeholder="Número de contacto" required="" />
                           <div className="invalid-feedback">
                              Introduzca número de telefono valido.
                           </div>
                        </div>

                        <hr className="my-4"/>

                     </form>
                     <a
                        onClick={() => {setMessage(createMessage)}}
                        target="_blank" 
                        href={`https://api.whatsapp.com/send?phone=+573134941951&text=${message}`} >
                        <button className="w-100 btn btnRealizarPerdido btn-lg">Realizar el pedido</button>
                     </a>
                  </div>
               {/* Inicio Formulario de contacto */}
            </div>
         </div>
      </>
   )
}

export default Checkout