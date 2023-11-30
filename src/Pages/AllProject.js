import React from 'react';
import { RiShareForward2Fill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";


const AllProject = () => { 
    return (

<div className='max-sm:mt-9'>
  
<div name="work" className="max-sm:mt-96  max-sm:h-screen max-md:mt-40 dark:text-white min-h-screen max-h-full w-full flex-col flex items-center font-myfont justify-center">
      <div className="w-2/3  mx-auto h-screen2 flex flex-col justify-center">
        <div className="md:text-center font-bold">
          <h1 className="max-sm:text-3xl  text-5xl text-center lg:pb-10">
        All My Projects
          </h1>
        </div>
        <div className="mb-10 mt-20  md:mt-8 grid md:grid-cols-2 gap-6">
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
                'url("https://i.ibb.co/vd0QjBR/food.jpg")',
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
          {/* Works Container Starts */}
          <div
            style={{
              backgroundImage:"url('https://i.ibb.co/NWy73Qs/Screenshot-11.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-11/12 md:h-60 h-48 lg:h-56 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="w-full h-full bg-orange-200 opacity-0 hover:opacity-100 duration-300">
              <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
                <p className='text-orange-700'>Dr.Sakib Chamber</p>
                <p className="text-xl font-normal text-orange-700 mt-2">
                I am happy, When any one happy.
                </p>
                <div className="absolute flex gap-x-2 right-2 bottom-2">
                <a
                    href="https://github.com/sakib1100/dr.sakib-Client"
                    className="cursor-pointer block"
                    target={"_blank"}
                    
                  >
                    <AiFillGithub className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-black text-orange-700 duration-300" />
                  </a>

                  <a
                    href="https://doctorsakib.netlify.app/"
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
                'url("https://i.ibb.co/vBv6Yfc/Screenshot-1.png")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-11/12 md:h-60 h-48 lg:h-56 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="w-full h-full bg-orange-200 opacity-0 hover:opacity-100 duration-300">
              <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
                <p className='text-orange-700'>Clean City</p>
                <p className="text-xl font-normal text-orange-700 mt-2">
                Clean Your City and save country.
                </p>
                <div className="absolute flex gap-x-2 right-2 bottom-2">
                <a
                    href="https://github.com/sakib1100/Clean-City-Client"
                    className="cursor-pointer block"
                    target={"_blank"}
                    
                  >
                    <AiFillGithub className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-black text-orange-700 duration-300" />
                  </a>

                  <a
                    href="https://cleancity3.netlify.app/"
                    className="cursor-pointer block"
                    target={"_blank"}
                  >
                    <RiShareForward2Fill className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-black text-orange-700 duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>



             {/* worjs Container Ends */}
          
          <div
            style={{
              backgroundImage:"url('https://i.ibb.co/gShFKcD/Screenshot-2.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-11/12 md:h-60 h-48 lg:h-56 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="w-full h-full bg-orange-200 opacity-0 hover:opacity-100 duration-300">
              <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
                <p className='text-orange-700'>Universal Fitness</p>
                <p className="text-xl font-normal text-orange-700 mt-2">
                Build perfect body and and Healthy Life
                </p>
                <div className="absolute flex gap-x-2 right-2 bottom-2">
                <a
                    href="https://github.com/sakib1100/gim-center"
                    className="cursor-pointer block"
                    target={"_blank"}
                    
                  >
                    <AiFillGithub className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-black text-orange-700 duration-300" />
                  </a>
                  <a
                    href="https://gim-center.netlify.app"
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


         
          {/* Works Container Ends */}
          {/* Works Container Starts */}
          <div
            style={{
              backgroundImage:
                'url("https://i.ibb.co/C0GF25P/Screenshot-5.png")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-11/12 md:h-60 h-48 lg:h-56 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="w-full h-full bg-orange-200 opacity-0 hover:opacity-100 duration-300">
              <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
                <p className='text-orange-700'>Online Shopping</p>
                <p className="text-xl font-normal text-orange-700 mt-2">
                Your Cart Happiness. All rights reserved Happyshopping.
                </p>
                <div className="absolute flex gap-x-2 right-2 bottom-2">
                <a
                    href="https://github.com/sakib1100/my-business-site"
                    className="cursor-pointer block"
                    target={"_blank"}
                    
                  >
                    <AiFillGithub className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-black text-orange-700 duration-300" />
                  </a>

                  <a
                    href="https://onlinebusinesss.netlify.app"
                    className="cursor-pointer block"
                    target={"_blank"}
                  >
                    <RiShareForward2Fill className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-black text-orange-700 duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
</div>
  );
};


export default AllProject;





