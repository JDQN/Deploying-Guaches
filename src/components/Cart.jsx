import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delItem } from '../redux/actions'
import { NavLink } from 'react-router-dom'
import '../components/styles/empty.css'


const Cart = () => {

  const handleRoute = () => {
    window.location.href = "/";
  }

  const state = useSelector((state) => state.addItem)
  const dispatch = useDispatch()
  
  const handleClose  = (item) => {
    dispatch(delItem(item))
  }

  const cartItems = (cartItem) => {
    return (
      <>
        <div className="container card mb-5 my-5 py-2">
          <div className="row g-0">
              <div className="col-md-3">
                <img src={cartItem.img} className="img-fluid rounded-start" alt={cartItem.title} height="300px" />
              </div>

              <div className="col-md-6">
              <button onClick={()=> handleClose(cartItem)} className="btn-close float-end btnClose" arial-label="close"></button>
                <div className="card-body">
                  <h1 className="card-title">{cartItem.title}</h1>
                  <p className="card-text">{cartItem.desc}</p>
                  <h3 className="card-text">
                    <small className="text-muted text-price">Precio: $ {cartItem.price}</small>
                  </h3>
                </div>
              </div>
          </div>
          </div>
      </>
    )
  }

  const emptyCart = () => {
    return (

      <div className='emptyCart'>
      <img src='https://merchlist.co/assets/emptycart.png' alt='' />
      <button onClick={handleRoute}>
        <i className='fa fa-arrow-left'></i>Ir a la tienda
      </button>
    </div>
    )
  }

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink to="/checkout" className="btn btnProcederCompra">Proceder a comprar</NavLink>
        </div>
      </div>
    )
  }

  return ( 
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  )
}

export default Cart
