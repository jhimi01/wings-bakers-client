import "./Home.css";
import Banner from "../../../assets/banner4.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGlassCheers,
} from "react-icons/fa";
import About from "../About/About";
import ChefsCard from "../ChefsCard/ChefsCard";
import Subscribtionsection from "../Subscribtionsection/Subscribtionsection";
import ContactForm from "../ContactForm/ContactForm";
import LazyLoad from "react-lazy-load";
import Details from "../Details/Details";
import Features from "../Features/Features";

const Home = () => {
  return (
    <>
      <div className="banner flex justify-start items-center">
        <LazyLoad effect="blur" height={600}>
          <img
            className="w-full h-full absolute object-cover"
            src={Banner}
            alt="Banner"
          />
        </LazyLoad>
        <div className="overLay w-full h-96 md:w-2/3 absolute flex justify-center items-center text-white  px-4">
          <div className="my-4">
            <h1 className="text-5xl font-bold font-serif">Amazing chefs</h1>
            <p className="text-xl my-3 font-serif font-thin">
              There are many different types of food, such as fruits,
              vegetables, rice, and pasta. We need to eat a variety of foods to
              get all the essential nutrients the body needs. Not eating a
              healthy and balanced diet leads to weakness and deficiency
              diseases.
            </p>
            <div style={{ cursor: "pointer", zIndex: "10000000" }}>
              <a href="#chef">
                <button className="bg-white py-2 px-5 text-xl flex items-center text-gray-600">
                  Chefs <FaGlassCheers className="ml-2" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute right-11">
          <FaFacebookF className="text-white mb-3 text-xl md:text-3xl cursor-pointer hover:text-gray-500" />
          <FaInstagram className="text-white mb-3 text-xl md:text-3xl cursor-pointer hover:text-gray-500" />
          <FaTwitter className="text-white text-xl md:text-3xl cursor-pointer hover:text-gray-500" />
        </div>
      </div>
      <About></About>

      <div className="mt-40">
        <Details />
      </div>

      <div id="chef" className="my-4">
        <ChefsCard />
      </div>

      <div>
        <Features />
      </div>

      <div>
        <Subscribtionsection />
      </div>
      <div>
        <ContactForm />
      </div>
    </>
  );
};

export default Home;
