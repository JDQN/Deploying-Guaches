import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import '../components/styles/home.css'


const Home = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

  useEffect(() => {
    const getProducts = async() => {
      setLoading(true);
      /* "http://localhost:5000/listProduct" */
      const response = await fetch("https://jdqn.github.io/jsonapi/data.json");
      if(componentMounted){
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter)
      }
      return () => {
        componentMounted = false;
      }
    }
    getProducts();
}, []);

  const filterProduct = (cat) => { 
    const updatedList = data.filter(item => item.category === cat);
    setFilter(updatedList);
  }


  return (
      <>
        <section className="nav">
          <h1 className='textProduct' >Todos nuestros productos los encuentras aqui</h1>
          
          <div className="nav-container ">
            <button className="botonera nav-tab" onClick={() => setFilter(data)}>Todo</button>
            <button className="botonera nav-tab" onClick={() => filterProduct("camiseta")}>Camisetas</button>
            <button className="botonera nav-tab" onClick={() => filterProduct("gorra")}>Gorras</button>
            <button className="botonera nav-tab" onClick={() => filterProduct("mugs")}>Mugs</button>
            <button className="botonera nav-tab" onClick={() => filterProduct("medias")}>Medias</button>
            <span className="botonera nav-tab-slider"></span>
          </div>
        </section>


        <div className='container p-5'>
          <div className='row'>
            {filter.map((product) => {
              return (
              <>
                <div className="mb-4 col-md-4 col-lg-3 col-sm-6">
                  <div className="containerHome card h-100 text-center " key={product.id}>
                      <img src={product.img} className="card-img-top" alt={product.title} height="230px"/>
                      <div className="card-body">
                        <h5 className="card-title-home mb-0">{product.title.substring(0,100)}</h5>
                        <hr/>
                        <p className="card-text-home">{product.desc}</p>
                        <p className="card-text-home lead fw-bold">$ {product.price}</p>
                        <NavLink to={`/products/${product.id}`} className="btn botonProducts">Comprar Ahora</NavLink>
                      </div>
                  </div>
                </div>
              </>
              );
          })}
          </div>
        </div>
    </>
  )

}

export default Home
