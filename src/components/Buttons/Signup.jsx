import React from 'react'
import '../../components/styles/bottones.css'

const Signup = () => {
   return (
      <>
      {/*  Button trigger modal  */}
      <button type="button" className="btn btnBotton ms-2" data-bs-toggle="modal" data-bs-target="#singupModal">
            <i className='fa fa-user-plus me-1'></i> Reguistrarse
         </button>

         {/* Modal  */}
         <div className="modal fade" id="singupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content">

                  <div className="modal-header">
                     <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>

                  <div className="modal-body">
                     <button className="btn btn-primary w-100 mb-3">
                        <span className='fa fa-google me-2'></span>Sing in With Google
                     </button>
                     <button className="btn btn-primary w-100 mb-4">
                        <span className='fa fa-facebook me-2'></span>Sing in With Facebook
                     </button>

                     <form>
                     <div className="mb-3">
                        <label htmlFor="exampleInput" className="form-label">Ingrese su Usuario</label>
                        <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text"></div>
                     </div>

                     <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Ingrese su Correo Electronico</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text"></div>
                     </div>

                     <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                     </div>

                     <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                     </div>

                        <button type="submit" className="btn btn-outline-primary w-100 mt-2">Reguistrase</button>
                     </form>
                  </div>

               </div>
            </div>
         </div>
      </>
   )
}

export default Signup