import './Home.css';
import Banner from '../../../assets/banner4.jpg';
import { FaFacebookF, FaInstagram, FaTwitter, FaGlassCheers } from "react-icons/fa";
import About from '../About/About';

const Home = () => {
    return (
        <div className="banner flex justify-start items-center">
         <img className='w-full h-full absolute object-cover' src={Banner} alt="Banner" />
         <div className='overLay w-full h-96 md:w-2/3 absolute flex justify-center items-center text-white  px-4'>
           <div className='my-4'>
           <h1 className='text-5xl font-bold font-serif'>Food is Amazing</h1>
            <p className='text-xl my-3 font-serif font-thin'>There are many different types of food, such as fruits, vegetables, rice, and pasta. We need to eat a variety of foods to get all the essential nutrients the body needs. Not eating a healthy and balanced diet leads to weakness and deficiency diseases.</p>
            <button className='bg-white py-2 px-5 text-xl flex items-center text-gray-600'>Chefs <FaGlassCheers className='ml-2'/></button>
           </div>
         </div>
         <div className='absolute right-11'>
            <FaFacebookF className='text-white mb-3 text-xl md:text-3xl'/>
            <FaInstagram className='text-white mb-3 text-xl md:text-3xl'/>
            <FaTwitter className='text-white text-xl md:text-3xl'/>
         </div>
         <About></About>
        </div>
    );
};

export default Home;