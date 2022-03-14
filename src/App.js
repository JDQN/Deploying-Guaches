import './App.css';
/* Aqui importo mis archivos de components */
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

import { Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';


function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Product />} />
          <Route exact path="/products/:productId" element={<ProductDetail />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
