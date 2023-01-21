import Navbar from './Compunent/Navbar'
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import AOS from 'aos';
import   'aos/dist/aos.css';
import { useEffect } from "react";
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Review from './Pages/Review';
import AllProject from './Pages/AllProject';
import Foter from './Pages/Foter';

function App() {

  useEffect(() => {
    AOS.init();
  })

  return (
    <div>
     
     <Navbar>

    
<Routes >

 <Route path="/" element={<Home />}></Route>
  <Route path="/AllProject" element={<AllProject />}></Route>
  <Route path="/about" element={<About />}></Route>
  <Route path="/skills" element={<Skills />}></Route>
  <Route path="/portfolio" element={<Portfolio />}></Route>
  <Route path='/contact' element={<Contact />}></Route>
  <Route path='/review' element={<Review />}></Route>

</Routes>

</Navbar>
     


    </div>
);
}

export default App;
