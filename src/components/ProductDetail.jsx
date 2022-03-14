import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index'; 
import { NavLink } from 'react-router-dom';
import '../components/styles/productDetail.css';




const ProductDetail = () => {

   const [cartBtn, setCartBtn] = useState("Agregar al carrito")
   const [productDetail, setProductDetail] = useState({})


   const {productId} = useParams();
   const getDetail = async () => {
      /* "http://localhost:5000/listProduct" */
      const response = await fetch(`https://jdqn.github.io/jsonapi/data.json`);
      const data = await response.json();
      setProductDetail(data.filter(item => item.id === Number(productId))[0]);
   };
   useEffect(() => {
      getDetail();
   },[]);
   
   const dispatch = useDispatch(); 

   /* Importante necesitamos almacenar useDispatch en una variable para poderla utilizar en la const handleCart*/
   const handleCart = (product) => {
      if (cartBtn === "Agregar al Carrito") {
         dispatch(addItem(product)); 
         setCartBtn("Quitar Producto")
      } else {
         dispatch(delItem(product));
         setCartBtn("Agregar al Carrito")
      }
   }


   return (
      <>
      <div className="container card mb-5 my-5 py-2">
            <div className="row g-0">
               <div className="col-md-3">
                  <img src={productDetail.img} className="img-fluid rounded-start" alt={productDetail.title} height="300px" />
               </div>
               <div className="col-md-6">
                  <div className="card-body">
                     <h1 className="card-title">{productDetail.title}</h1>
                     <p className="card-text">{productDetail.desc}</p>
                  
                     <h3 className="card-text">
                        <small className="text-muted">$ {productDetail.price}</small>
                     </h3>

                        <button  onClick={()=> handleCart(productDetail)} className='btn btnAgregar btn-lg'> 
                           <i className="fa fa-cart-plus" /> {cartBtn} 
                        </button>
                        <NavLink  to="/checkout" className='btn btnPedido btn-lg'>
                           <i className="fa fa-arrow-right"></i> Hacer Pedido
                        </NavLink>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default ProductDetail;

