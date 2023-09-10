import React from 'react'
import './index.css'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Customcatalog from './components/Customcatalog';
import Mycart from './components/Mycart';
import Header from "./components/Header";
import S1_hotproducts from "./components/S1_hotproducts"
import S2_products from "./components/S2_products"
import S3_catalog from "./components/S3_catalog"
import S4_recomendataion from './components/S4_recomendataion'
import Footer from './components/Footer'
import Contact from './components/Contact';
import About from './components/About';
import ProductDetail from './components/ProductDetails';
export default function App() {
  return (
<>
<Header />
<Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotproducts' element={<S1_hotproducts />} />
        <Route path='/products' element={<S2_products />} />
        <Route path='/catalog' element={<S3_catalog />} />
        <Route path='/recomendataion' element={<S4_recomendataion />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Cart' element={<Mycart />} />
        <Route path='*' element={<Home />} />
        <Route path='/ProductDetails/:id' element={<ProductDetail />} />
        <Route path='/customcatalog/:dcatagory' element={<Customcatalog />} />
      </Routes>
    </Router>
<Footer />
    </>
    )
}
