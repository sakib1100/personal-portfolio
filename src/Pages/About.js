import image from "./../image/animation.gif";
import { CiFacebook } from "react-icons/ci";
import { RiWhatsappLine } from "react-icons/ri";
import { MdOutlineCastForEducation } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";

const About = () => {
  return (
    <div className="max-sm:mt-20 lg:pb-10  sm:mt-20">
      <p className=" font-bold text-5xl font-bold font-serif  max-sm:text-4xl text-center">
        {" "}
        About Me
      </p>
      <p className=" mt-2 text-center">My introduction</p>

      <div className="hero-content flex-col lg:flex-row m-auto ">
        <div className="max-sm:w-1/7 lg:mt-5 max-sm:mt-6 max-lg:mt-6">
          <div className="lg:ml-10">
            <h1 className="text-3xl  font-bold font-serif max-sm:text-2xl ">
              Frontend Web Developer
            </h1>
            <p className="text-lg text-tahiti-dark max-sm:text-2sm   mt-3 font-serif">
              {" "}
              I am Full stack Developer with React js, Node js Express and{" "}
              <br></br>
              MongoDB basically Frontend specalist. I am currently working in
              online marketplace.
            </p>
            <p className=" text-xl mt-3 flex max-sm:text-2xl  items-center ">
              <MdOutlineCastForEducation className="text-base text-xl max-sm:text-center " />{" "}
              <span className="ml-2 font-bold">Education--</span>
            </p>

            <li className="text-2xl font-semibold font-serif  max-sm:text-xl max-sm:font-bold">
              BSC in Computer Science and Engineering
            </li>
            <p className="text-lg font-serif">Northern University Bangladesh</p>
            <p className="italic">current-2023-at present</p>

            <li className="text-2xl font-semibold font-serif max-sm:text-xl max-sm:font-bold ">
              Diploma in Computer Technology{" "}
            </li>
            <p className="text-lg font-serif">
              Chattogram Polytechnic Institute
            </p>
            <p className="italic">current-2018-2023</p>
          </div>
          <div className="lg:ml-10 flex items-center socialicon mt-4 cursor-pointer">
            <a
              target={"_blank"}
              href="https://www.facebook.com/mostafa.mohsin.5473"
            >
              {" "}
              <CiFacebook className="text-base text-4xl rounded-lg transition duration-500 hover:scale-150" />
            </a>
            <a
              target={"_blank"}
              href="https://wa.me/01877981100/?text=Hi i am sakib, Whatsup"
            >
              {" "}
              <RiWhatsappLine className="text-base text-4xl rounded-lg ml-4 transition duration-500 hover:scale-150" />
            </a>
            <MdAlternateEmail className="text-base text-4xl  rounded-lg ml-4 transition duration-500 hover:scale-150" />
          </div>
        </div>
        <div className="lg:w-50 ">
          <img
            src={image}
            className="w-12/12  max-sm:w-74 mx-auto mx-sm:mb-5 lg:mt-5 rounded-xl"
            alt="img4.png"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
