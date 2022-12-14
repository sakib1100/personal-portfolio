
import image from './../image/pic4.png'
import { CiFacebook } from 'react-icons/ci';
import { RiWhatsappLine } from 'react-icons/ri';
import { MdOutlineCastForEducation } from 'react-icons/md';
import { MdAlternateEmail } from 'react-icons/md';




const About = () => {
  

    return (
        <div  className='max-sm:mt-20 lg:pb-10  sm:mt-20'> 
        <p className=' font-bold text-5xl font-bold font-serif  max-sm:text-4xl text-center'> About Me</p>
     <p className=" mt-2 text-center"> My introduction</p>
           
           <div className="hero-content flex-col lg:flex-row m-auto ">
            
    <div  className='max-sm:w-1/7 lg:mt-5 max-sm:mt-6 max-lg:mt-6'>
    
      <div>
      <h1 className="text-3xl  font-bold font-serif max-sm:text-2xl ">Frontend Web Developer</h1>
       <p  className='text-lg text-tahiti-dark max-sm:text-2sm   mt-3 font-serif'> I am Full stack Developer with React js , Node js, Express and MongoDB<br></br> basically Frontend specalist. I am currently working in online marketplace<br></br> as well as looking for a job remotely or in any company.</p>
       <p className=' text-xl mt-3 flex max-sm:text-2xl  items-center '><MdOutlineCastForEducation className="text-base text-xl max-sm:text-center " /> <span className='ml-2 font-bold'>Education--</span></p>
       <li className='text-2xl font-semibold font-serif max-sm:text-xl max-sm:font-bold '>Computer Science and Engineering </li>
       <p className='text-lg font-serif'>Chittagong Polytechnic Institute,bangladesh</p>
       <p className='italic'>current-2018-2022</p>
       
       <li className='text-2xl font-semibold font-serif  max-sm:text-xl max-sm:font-bold'>Secondary School Certificate </li>
       <p className='text-lg font-serif'>Garangia High School, Bangladesh</p>
       <p className='italic'>current-2012-2018</p>
       
      </div>
      <div className='flex items-center socialicon mt-4 cursor-pointer'>
     <a target={"_blank"} href='https://www.facebook.com/mostafa.mohsin.5473'> <CiFacebook className="text-base text-4xl rounded-lg transition duration-500 hover:scale-150"  /></a>
     <a target={"_blank"} href="https://wa.me/01877981100/?text=Hi i am sakib, Whatsup"> <RiWhatsappLine className="text-base text-4xl rounded-lg ml-4 transition duration-500 hover:scale-150" /></a>
      <MdAlternateEmail className="text-base text-4xl  rounded-lg ml-4 transition duration-500 hover:scale-150" />
      </div>
      
    </div>
    <div className='lg:w-50 '>
    <img  src={image} className="w-8/12  max-sm:w-64 mx-auto mx-sm:mb-5 lg:mt-5 rounded-xl" alt="img4.png"  />
    </div>
  </div>
        </div>
    ); 
};

export default About;