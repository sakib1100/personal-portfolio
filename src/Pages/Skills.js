
import React from "react";

const Skills = () =>{
  return (
<div className="bg-base-200 py-20">
<p className='  font-bold text-5xl font-bold font-serif  max-sm:text-4xl text-center'>My Skills</p>
 
<div className="flex justify-center ">
<div className="mt-10  text-center ">
<div className="grid justify-center lg:grid-cols-4 w-full gap-4 max-sm:grid-cols-2  sm:grid-cols-3 md:grid-cols-3">
  
<div class="card  bg-base-100 shadow-xl ">
  <div class="card-body mx-auto ">
  <div className="radial-progress text-orange px-30" style={{"--value":95}}>95%</div>
  <p>HTML</p>
    </div>
  </div> 

  <div class="card  bg-base-100 shadow-xl ">
  <div class="card-body mx-auto">
  <div className="radial-progress text-orange px-30" style={{"--value":95}}>95%</div>
  <p>CSS</p>
    </div>
  </div> 
  
<div class="card  bg-base-100 shadow-xl ">
  <div class="card-body mx-auto">
  <div className="radial-progress text-orange px-30" style={{"--value":85}}>85%</div>
  <p>Tailwind</p>
    </div>
  </div> 

<div class="card  bg-base-100 shadow-xl ">
  <div class="card-body mx-auto">
  <div className="radial-progress text-orange px-30" style={{"--value":80}}>80%</div>
  <p>JavaScript</p>
    </div>
  </div> 
  
<div class="card  bg-base-100 shadow-xl">
  <div class="card-body mx-auto">
  <div className="radial-progress text-orange px-30" style={{"--value":95}}>95%</div>
  <p>React js</p>
    </div>
  </div> 
  
<div class="card  bg-base-100 shadow-xl">
  <div class="card-body mx-auto">
  <div className="radial-progress text-orange px-30" style={{"--value":70}}>70%</div>
  <p>Node Js</p>
    </div>
  </div> 
  
<div class="card  bg-base-100 shadow-xl">
  <div class="card-body mx-auto">
  <div className="radial-progress text-orange px-30" style={{"--value":70}}>70%</div>
  <p>Express Js</p>
    </div>
  </div> 
  <div class="card  bg-base-100 shadow-xl">
  <div class="card-body mx-auto">
  <div className="radial-progress text-orange px-30" style={{"--value":80}}>80%</div>
  <p>Mongo db</p>
    </div>
  </div> 



</div>
    </div>
</div>
</div>
  );
}
export default Skills;
