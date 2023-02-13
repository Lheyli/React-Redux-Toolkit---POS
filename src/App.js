import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Addtocart from './component/Addtocart';
import Product from './component/Product';
import Navbar from './component/Navbar';
import ViewProduct from './component/ViewProduct';
import Home from './component/Home';
import Contact from './component/Contact';
import About from './component/About';



const App = () => {
  return (

    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/all" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add" element={<Addtocart />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:id" element={<ViewProduct />} />
      </Routes>

    </Router>

  );
}

export default App;
