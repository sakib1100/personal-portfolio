import React, { useState } from 'react';
import image from './../image/pic1.png';
import { CgFileDocument } from 'react-icons/cg';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import Review from './Review';
import Foter from './Foter';
import Portfolio from './Portfolio';
import SkillSlide from './SkillSlide';
import './Home.css';
const Home = () => {
  const [dark,setDark] = useState(true);

    return (

<div className=''>


<div className="hero lg:h-screen min-h-fit  bg-base-200">
 
  <div className="hero-content flex-col lg:flex-row-reverse md:mt-10 max-sm:mb-5 lg:p-20   max-lg:mt-20">
  {/* {dark && <div id='stars'></div>
           <div id='stars2'></div>
           <div id='stars3'></div> } */}
{dark ? <div><div id='stars'></div>
           <div id='stars2'></div>
           <div id='stars3'></div></div> : ''}
  <img data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1000"  src={image} className="lg:w-5/12 max-sm:w-10/12 sm:w-7/12  text-center mx-auto" alt="img1.png"/>
    <div data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1000">

<main class="container lg:flex lg:justify-center">
  <p className='text-dark font-bold'>Hello I'm</p>
  <section class="animation lg:ml-7">
    <div class="first text-dark"><div>Mostafa Mohsin</div></div>
    <div class="second text-dark"><div>Web Developer</div></div>
    <div class="third text-dark"><div>React Develoer</div></div>
  </section>
</main>

      
    {/* <p className="lg:text-5xl md:text-4xl max-sm:text-3xl font-bold font-serif ">Mostafa Mohsin</p> */}
    {/* <p className="lg:text-4xl md:text-3xl max-sm:text-2xl font-bold font-serif ">React Developer</p> */}
      <p className="py-6 font-serif">I am Full stack Developer with React js , Node js,<br /> Express and MongoDB
 basically Frontend specalist. </p>
      <a target={"_blank"} href="https://drive.google.com/file/d/1PEXOrdjfRwv3NsVLIBzEkRLtu8obBwyk/view?usp=sharing" className="btn border-none  bg-orange-600 hover:bg-orange-600  hover:text-white max-sm:btn-md btn-light text-lime-100 text-md"> <CgFileDocument className="text-base" /> Resume</a>
    </div>
  </div>
</div>




<div  className='mt-10 w-100 '>
    <SkillSlide />
</div>

<div  className='mt-10 w-100 '>
    
    <About />
</div>
   

<div  className=' w-100 '>
    <Skills />
</div>

<div  className=' w-100 '>
    <Portfolio />
</div>

<div>
  <Review />
</div>
   
<div  className=' w-100  '>
   <Contact />
</div>


<div className='w-100'>
<Foter />
</div>








</div>



    );
};

export default Home;