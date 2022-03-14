import React from 'react'
import '../../components/styles/bottones.css'


const Login = () => {
   return (
      <>
         {/*  Button trigger modal  */}
         <button type="button" className="btn btnBotton" data-bs-toggle="modal" data-bs-target="#signupModal">
            <i className='fa fa-sign-in'></i> Login
         </button> 

         {/* Modal  */}
         <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content">

                  <div className="modal-header">
                     <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>

                  <div className="modal-body">
                     <button className="btn btn-primary w-100 mb-3">
                        <span className='fa fa-google me-2'></span>Sing up With Google
                     </button>
                     <button className="btn btn-primary w-100 mb-4">
                        <span className='fa fa-facebook me-2'></span>Sing up With Facebook
                     </button>
                     <form>

                     <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Ingrese su Correo Electronico</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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

                        <button type="submit" className="btn btn-outline-primary w-100 mt-3">Ingresar</button>
                     </form>
                  </div>

               </div>
            </div>
         </div>
      </>
   )
}

export default Login