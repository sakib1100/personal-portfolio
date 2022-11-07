import React from 'react';
import img1 from './../image/pic1.png'
import { ImQuotesLeft } from 'react-icons/im';

 

const Review = () => {
    return (
  
    <div className='py-16'>
<div className='text-center py-5'>
<h1 className='font-bold text-5xl font-bold font-serif  max-sm:text-4xl text-center'>Review</h1>
<p className='mt-2'>What Client say</p>
</div>

        <div className=" flex mx-auto">  
   
   <div className='grid mx-auto lg:grid-cols-3  gap-5  sm:grid-cols-2  max-sm:inline '>
 
   <div className="card sm:w-72 max-sm:w-64  w-80 glass  mix-blend-overlay ">
   <figure className='text-6xl mt-4'>
    <ImQuotesLeft />
     </figure>
   <div className="card-body items-center text-center shadow-2xl ">
     
     <p className='text-xl'>Duis aute irure  dolor in repre hen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
     <div className="card-actions items-center mt-3">
       <img className='w-10' src={img1} alt=''></img>
       <div>
         <h1 className='text-xl font-bold'>Jhone Doe</h1>
         <p className='text-start'>Designer</p>
       </div>
     </div>
   </div>
   </div>    
 
   <div className="card sm:w-72 max-sm:w-64 w-80 glass  border mix-blend-overlay  max-sm:my-6">
   <figure className='text-6xl mt-4'>
    <ImQuotesLeft />
     </figure>
   <div className="card-body items-center text-center shadow-2xl ">
     
     <p className='text-xl'>Duis aute irure  dolor in repre hen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
     <div className="card-actions items-center mt-3">
       <img className='w-10' src={img1} alt=''></img>
       <div>
         <h1 className='text-xl font-bold'>Jhone Doe</h1>
         <p className='text-start'>Designer</p>
       </div>
     </div>
   </div>
   </div>
 
 
   <div className="card sm:w-72 max-sm:w-64 w-80 glass  border mix-blend-overlay ">
   <figure className='text-6xl mt-4'>
    <ImQuotesLeft />
     </figure>
   <div className="card-body items-center text-center shadow-2xl">
     
     <p className='text-xl'>Duis aute irure  dolor in repre hen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
     <div className="card-actions items-center mt-3">
       <img className='w-10' src={img1} alt=''></img>
       <div>
         <h1 className='text-xl font-bold'>Jhone Doe</h1>
         <p className='text-start'>Designer</p>
       </div>
     </div>
   </div>
   </div>
 
   </div>
 
 
     </div> 
 
    </div>

    );
};


export default Review;


