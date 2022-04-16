import React from 'react'
import './footer.css';

const Footer = () => {

 

  return (
   <div className="footer">
      <footer className=" container d-flex flex-wrap justify-content-between align-items-center py-0 my-3 ">
         <div className="col-md-6 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
               <img src="/assets/images/home/logo.png" alt="" className="logo"/>
               <svg className="bi" width="30" height="24"><use href="#bootstrap"></use></svg>
            </a>
            <span className="text-muted">© 2022 Company, Guaches</span>
         </div>

         <ul className="iconosRedes col-md-2 justify-content-end list-unstyled d-flex">

            <li className="ms-3">
               <a href='https://www.instagram.com/guache_shirts/' target="_blank">
                  <i className="fa fa-instagram instagram"></i>
               </a>
            </li>

            <li className="ms-3">
               <a href='https://www.facebook.com/guache.shirts' target="_blank">
                  <i className="fa fa-facebook facebook"></i>
               </a>
            </li>

            <li className="ms-3">
               <a  href='https://api.whatsapp.com/send?phone=+573134941951' target="_blank">
                  <i className="fa fa-whatsapp whatsapp"></i>
               </a>
            </li>
            
         </ul>
      </footer>
   </div>
   )
}

export default Footer