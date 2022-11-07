import React from 'react';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import image from './../image/resturent.png';

const Portfolio = () => {
    return (


    <div name="work" className="lg:mt-20  max-sm:my-40  max-sm:h-screen max-md:mt-40 dark:text-white min-h-screen py-20 max-h-full w-full flex-col flex items-center font-myfont justify-center">
      <div className="w-2/3  mx-auto h-screen2 flex flex-col justify-center">
        <div className="md:text-center font-bold">
          <h1 className="max-sm:text-3xl  text-5xl text-center lg:pb-10">
            My Works
          </h1>
        </div>
        <div className="mt-8 md:mt-8 grid md:grid-cols-2 gap-6">
          {/* Works Container Starts */}
          <div
            style={{
              backgroundImage:"url('https://i.ibb.co/vd0QjBR/food.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-11/12 h-48 md:h-60 lg:h-56 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]">
            <div className="w-full h-full bg-orange-200 opacity-0  hover:opacity-100 duration-300">
              <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
                <p className='text-orange-700'>Gandhis Quotes</p>
                <p className="text-xl font-normal text-orange-700 mt-2">
                  Best Collections of Quotes of Mahatma Gandhi
                </p>
                <div className="absolute right-2 bottom-2">
                  <a
                    href="https://resturantsakib.netlify.app"
                    className="cursor-pointer block"
                    target={"_blank"}
                  >
                    <BsFillArrowRightCircleFill className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-white border-black text-orange-700 duration-300" />
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
                'url("https://play-lh.googleusercontent.com/8aqAfNAhGesimpsrQAyPl1l6kwAUbsrBnVlmRL00n7rRj5V7wo_YhgsV1KMu8t05Bw=w720-h310-rw")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-11/12 md:h-60 h-48 lg:h-56 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="w-full h-full bg-orange-200 opacity-0 hover:opacity-100 duration-300">
              <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
                <p className='text-orange-700'>IgCap</p>
                <p className="text-xl font-normal text-orange-700 mt-2">
                  A huge collection of Instagram Captions
                </p>
                <div className="absolute right-2 bottom-2">
                  <a
                    href=""
                    className="cursor-pointer block"
                    target={"_blank"}
                  >
                    <BsFillArrowRightCircleFill className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white  border-black text-orange-700 duration-300" />
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
                'url("https://play-lh.googleusercontent.com/ruEZL_MLiEnAANUhhsi13h0McRuHV3GA12evI7omfAJJvLFL5ff-7yon1PxqRaGXB8wW=w720-h310-rw")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-11/12 md:h-60 h-48 lg:h-56 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="w-full h-full bg-orange-200 opacity-0 hover:opacity-100 duration-300">
              <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
                <p className='text-orange-700'>Happy Dashain Status</p>
                <p className="text-xl font-normal text-orange-700 mt-2">
                  App for Happy Dashain Status, Wishes, Images, SMS, Greetings
                  and Wallpapers
                </p>
                <div className="absolute right-2 bottom-2">
                  <a
                    href=""
                    className="cursor-pointer block"
                    target={"_blank"}
                  >
                    <BsFillArrowRightCircleFill className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-black text-orange-700 duration-300" />
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
                'url("https://play-lh.googleusercontent.com/aBfcQfWNs8LLWcxJ-k1MJ-ybGDtBtlW6S5byeSoCiVTJRZWhvRtECKzXgNSbOE6aRA=w720-h310-rw")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-11/12 md:h-60 h-48 lg:h-56 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="w-full h-full bg-orange-200 opacity-0 hover:opacity-100 duration-300">
              <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
                <p className='text-orange-700'>Hanuman Chalisa</p>
                <p className="text-xl font-normal text-orange-700 mt-2">
                  Shree Hanuman Chalisa with meanings in Hindi, English, and
                  Nepali
                </p>
                <div className="absolute right-2 bottom-2">
                  <a
                    href=""
                    className="cursor-pointer block"
                    target={"_blank"}
                  >
                    <BsFillArrowRightCircleFill className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-black text-orange-700 duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Works Container Ends */}
        </div>
      </div>
    </div>
  );
};


export default Portfolio;