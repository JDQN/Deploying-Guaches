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
      /* https://jdqn.github.io/jsonapi/data.json */
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
          <h1 className='textGuaches'>@guache_shirts</h1>
          
          <h3 className="span loader">
            <span className='m'>P</span>
            <span className='m'>e</span>
            <span className='m'>r</span>
            <span className='m'>s</span>
            <span className='m'>o</span>
            <span className='m'>n</span>
            <span className='m'>l</span>
            <span className='m'>i</span>
            <span className='m'>z</span>
            <span className='m'>a</span>
            <span className='m'>m</span>
            <span className='m'>o</span>
            <span className='m'>s</span>
            <span className='m'>&nbsp;</span>
            <span className='m'>T</span>
            <span className='m'>u</span>
            <span className='m'>s</span>
            <span className='m'>&nbsp;</span>
            <span className='m'>I</span>
            <span className='m'>d</span>
            <span className='m'>e</span>
            <span className='m'>a</span>
            <span className='m'>s</span>
          </h3>

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
                <> {/*  */}
                    <div className="mb-4 col-md-4 col-lg-3 col-sm-6">
                      <div className="containerHome card h-100 text-center " key={product.id}>
                        <img src={product.img} className="card-img-top imgHome" alt="..." height="250px"/>
                        <div className="card-body">
                          <h5 className="card-title-home mb-0">{product.title.substring(0,100)}</h5>
                          <hr/>
                          <p className="card-text-home">{product.desc}</p>
                          <p className="card-text-home fw-bold">$ {product.price}</p>
                          <NavLink to={`/products/${product.id}`} className="btn btnComprar">Comprar Ahora</NavLink>
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
