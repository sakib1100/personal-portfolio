import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdMarkEmailUnread } from 'react-icons/md';
import { TiLocation } from 'react-icons/ti';
import { CiFacebook } from 'react-icons/ci';
import { RiWhatsappLine } from 'react-icons/ri';
import { MdAlternateEmail } from 'react-icons/md';


const Contact = () => {
  // const [status, setStatus] = useState("Submit");
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   const details = {
  //     name: e.target.name.value,
  //     email:  e.target.email.value,
  //     message:  e.target.message.value,
  //   };
  //  emailjs.sendForm('service_daspnwm','template_c7zj85i',e.target)



  //   //   method: "POST",
  //   //   headers: {
  //   //     "Content-Type": "application/json;charset=utf-8",
  //   //   },
  //   //   body: JSON.stringify(details),
  //   // });
  //   // setStatus("Submit");
  //   // let result = await response.json();
  //   // alert(result.status);
  // };
  return (


    <div className="bg-base-200 mt-10">

    <div className="mt-10 "> 
 <div className="pt-20">
<p className='font-bold text-5xl font-bold font-serif  max-sm:text-4xl text-center'>Contact Me</p>
<p className=" mt-2 text-center">Enter Your Reason</p>
</div> 
    <div className="hero-content pb-16 flex justify-evenly  w-full max-sm:flex-col lg:mt-2  sm:mt-20  sm:flex-col lg:flex-row-reverse">
 <form  action="https://formspree.io/f/xayklrzn" method="post" className=" max-sm:mb-5  ">

<div className="flex max-sm:inline">
 <div className="">
 <label className="label">
   <span className="label-text fw-bold">Name</span>
 </label>
 <input type="text" name="name" placeholder="Enter Name" className="max-sm:w-60 input border-orange-300 text-2md" />
 </div>

 <div className="ml-7  max-sm:m-0">
 <label className="label">
   <span className="label-text fw-bold">Email</span>
 </label>
 <input type="email" name="email" placeholder="Enter Email" className="max-sm:w-60 input border-orange-300 text-2md" />
 </div>
 </div>
 
 <div className="">
 <label className="label">
   <span className="label-text fw-bold">Message</span>
 </label>
 <textarea type="text" name="message" placeholder="Message" className="max-sm:w-60 textarea h-40 w-full border-orange-300 resize-none text-5sm" />
 </div>



      <button className="btn bg-orange-600 hover:bg-orange-600  text-lime-100 border-none  hover:text-white mt-2" type="submit">Submit</button>
    </form>

    <div>
    
      <div className="mb-3">
     <p className="flex items-center text-xl "><BsFillTelephoneFill className="text-orange-600" /><span className="ml-3">Call Me</span></p>
     <p>+8801877981100 or 01865395208</p>
      </div>
      <div className="mb-3">
     <p className="flex items-center text-xl "><MdMarkEmailUnread className="text-orange-600" /><span className="ml-3">Email</span></p>
     <p>mostafamohsin783@gmail.com</p>
      </div>
      <div className="mb-3">
     <p className="flex items-center text-xl "><TiLocation className="text-orange-600" /><span className="ml-3">Location</span></p>
     <p>Satkania,Chittagong,Bangladesh</p>
      </div>
     
      <div className='flex items-center socialicon mt-4 cursor-pointer'>
     <a target={"_blank"} href='https://www.facebook.com/mostafa.mohsin.5473'> <CiFacebook className="text-base text-4xl rounded-lg transition duration-500 hover:scale-150"  /></a>
     <a target={"_blank"} href="https://wa.me/01877981100/?text=Hi i am sakib, Whatsup"> <RiWhatsappLine className="text-base text-4xl rounded-lg ml-4 transition duration-500 hover:scale-150" /></a>
      <MdAlternateEmail className="text-base text-4xl rounded-lg ml-4 transition duration-500 hover:scale-150" />
      </div>
    </div>

    </div>
    </div>   
    </div>
  
  );
};

export default Contact;




// <div className='flex justify-center items-center h-screen  bg-base-200'>
// <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
// <div className="card-body">
// <h1 className='text-2xl text-center'>Message</h1>
// <div className="form-control">
// <label className="label">
//   <span className="label-text">Name</span>
// </label>
// <input type="text" placeholder="Enter Name" className="input input-bordered" />
// </div>
// <div className="form-control">
// <label className="label">
//   <span className="label-text">Email</span>
// </label>
// <input type="text" placeholder="email" className="input input-bordered" />
// </div>
// <div className="form-control">
// <label className="label">
//   <span className="label-text">Message </span>
// </label>
// <textarea type="text" placeholder="Enter Your Message" className="input input-bordered" />
// <label className="label">
//   <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
// </label>
// </div>
// <div className="form-control mt-6">
// <button className="btn btn-primary">Sent Message</button>
// </div>
// {/* <div className="divider">OR</div>
// <button className='btn btn-light hover:btn-accent'>sign in with google</button> */}
// </div>
// </div>
// </div>