import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './compoment/Navbar/navbar';
import ButtonTop from './compoment/button-top/SideButton';
import Home from './pages/Home/Home';
import Service from './pages/Services/services'
import About from './pages/About Us/about';
import Contact from './pages/Contact Us/contact'
import { Routes, Route } from 'react-router-dom';
import Footer from './compoment/footer/footer';
import Uiux from './pages/UI & UX/uiux';
import Web from './pages/Webpage/Web';
import Social from './pages/Social Media/Social';
import Digital from './pages/Digital Marketing/Digital';
import Business from './pages/Business Consultancy/Business';
import Strategy from './pages/Content Strategy/strategy';
import Paid from './pages/Paid Advertising/paid';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<Service/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/uiux' element={<Uiux/>}/>
        <Route path='/web' element={<Web/>}/>
        <Route path='/Social' element={<Social/>} />
        <Route path='/Digital' element={<Digital/>}/>
        <Route path='/Business' element={<Business/>}/>
        <Route path='/strategy' element={<Strategy/>}/>
        <Route path='/paid' element={<Paid/>}/>
      </Routes>
      <ButtonTop />
      <Footer />
    </div>

  );
}

export default App;
