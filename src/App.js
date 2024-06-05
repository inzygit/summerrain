import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import {Container,Row,Col}from 'react-bootstrap';
import Home from './home.js';
import About from './about.js';
import Nav from './nav.js';
import Service from './service.js';
import Contact from './contact.js';
import Switchimage from './switchimage.js';
import {Routes, Route, BrowserRouter} from "react-router-dom";




function App() {
  return (
    <>
     
     <BrowserRouter>
     <Nav/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/switchimage" element={<Switchimage/>}/>
    </Routes>
    </BrowserRouter>
    {/*<Home/>
    <Contact/>
    <Service/>
    <About/> */}
    </>
  );
}

export default App;
