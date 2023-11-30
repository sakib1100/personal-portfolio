import React from 'react';
import { RiShareForward2Fill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Portfolio = () => {
    return (


    <div name="work" className="lg:mt-3  lg:mb-9 max-sm:mt-36  max-sm:my-40  max-sm:h-screen max-md:mt-40  min-h-screen py-20 max-h-full w-full flex-col flex items-center font-myfont justify-center">
      <div className="w-2/3  mx-auto h-screen2 flex flex-col justify-center">
        <div className="md:text-center font-bold">
          <h1 className="max-sm:text-3xl text-dark text-5xl text-center lg:pb-10">
            My Works
          </h1>
        </div>
        <div className="mt-8 md:mt-8 grid md:grid-cols-2 gap-6">
          {/* Works Container Starts */} 
          
          <div
            style={{
              backgroundImage:
                'url("https://i.ibb.co/2j1HRk3/Screenshot-2023-10-16-111248.png")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-11/12 md:h-60 h-48 lg:h-56 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="w-full h-full bg-orange-200 opacity-0 hover:opacity-100 duration-300">
              <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
                <p className='text-orange-700'>Shopping</p>
                <p className="text-xl font-normal text-orange-700 mt-2">
               This is online shopping website.
                </p>
                <div className="absolute flex gap-x-2 right-2 bottom-2">
                <a
                    href="https://github.com/sakib1100/shopping-clinet"
                    className="cursor-pointer block"
                    target={"_blank"}
                    
                  >
                    <AiFillGithub className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-black text-orange-700 duration-300" />
                  </a>

                  <a
                    href="https://shoppingmalsite.netlify.app/home"
                    className="cursor-pointer block"
                    target={"_blank"}
                  >
                    <RiShareForward2Fill className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-black text-orange-700 duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Works Container Ends */}
          {/* Works Container Starts */}
          
<div
style={{
  backgroundImage:"url('https://i.ibb.co/0mbDzw8/Screenshot-2023-11-30-210221.png')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
}}
className="w-11/12 md:h-60 h-48 lg:h-56 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
>
<div className="w-full h-full bg-orange-200 opacity-0 hover:opacity-100 duration-300">
  <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
    <p className='text-orange-700'>Dental Clinic</p>
    <p className="text-xl font-normal text-orange-700 mt-2">
   Your Health is your smile.
    </p>
    <div className="absolute flex gap-x-2 right-2 bottom-2">
    <a
        href="https://github.com/sakib1100/Dental-client"
        className="cursor-pointer block"
        target={"_blank"}
        
      >
        <AiFillGithub className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-black text-orange-700 duration-300" />
      </a>

      <a
        href="https://dentalmedicare.netlify.app/"
        className="cursor-pointer block"
        target={"_blank"}
        
      >
        <RiShareForward2Fill className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-black text-orange-700 duration-300" />
      </a>
    </div>
  </div>
</div>
</div>
          {/* Works Container Ends */}
          {/* Works Container Starts */}
          <div
            style={{
              backgroundImage:
              'url("https://i.ibb.co/6Y0wLZp/Screenshot-7.png")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-11/12 h-48 md:h-60 lg:h-56 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]">
            <div className="w-full h-full bg-orange-200 opacity-0  hover:opacity-100 duration-300">
              <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
                <p className='text-orange-700'>Mechanic store</p>
                <p className="text-xl font-normal text-orange-700 mt-2">
                
              Best Car service and online car parts sell.
                </p>
                <div className="absolute flex gap-x-2 right-2 bottom-2">
                <a
                    href="https://github.com/sakib1100/mechanic-client"
                    className="cursor-pointer block"
                    target={"_blank"}
                    
                  >
                    <AiFillGithub className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-black text-orange-700 duration-300" />
                  </a>

                  <a
                    href="https://mechanic-store.netlify.app/"
                    className="cursor-pointer block"
                    target={"_blank"}
                  >
                    <RiShareForward2Fill className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-white border-black text-orange-700 duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Works Container Ends */}
          {/* Works Container Starts */}
          <div
            style={{
              backgroundImage:
                'url("https://i.ibb.co/bmxf1kP/resturent.png")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-11/12 md:h-60 h-48 lg:h-56 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="w-full h-full bg-orange-200 opacity-0 hover:opacity-100 duration-300">
              <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
                <p className='text-orange-700'>Healthy Food</p>
                <p className="text-xl font-normal text-orange-700 mt-2">
                 Good Food, Good Breath and enjoy it.
                 
                </p>
                <div className="absolute flex gap-x-2 right-2 bottom-2">
                <a
                    href="https://github.com/sakib1100/resturant-blog"
                    className="cursor-pointer block"
                    target={"_blank"}
                    
                  >
                    <AiFillGithub className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-black text-orange-700 duration-300" />
                  </a>

                  <a
                    href="https://resturantsakib.netlify.app"
                    className="cursor-pointer block"
                    target={"_blank"}
                  >
                    <RiShareForward2Fill className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white  border-black text-orange-700 duration-300" />
                  </a>
                </div>

              </div>
            </div>
          </div>
          
          {/* Works Container Ends */}

        </div>
        <button className='btn mt-10 btn-error mx-auto'><Link to="/AllProject" >See All Project</Link></button>

      </div>
    </div>
  );
};


export default Portfolio;


    


