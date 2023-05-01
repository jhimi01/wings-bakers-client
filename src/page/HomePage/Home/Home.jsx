import './Home.css';
import Banner from '../../../assets/banner4.jpg';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Home = () => {
    return (
        <div className="banner flex justify-start items-center">
         <img className='w-full h-full absolute object-cover' src={Banner} alt="Banner" />
         <div className='overLay w-full h-96 md:w-1/2 absolute flex justify-center items-center text-white  px-4'>
           <div>
           <h1 className='text-5xl font-bold font-serif'>food is Amazing</h1>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, iusto.</p>
           </div>
         </div>
         <div className='absolute right-11'>
            <FaFacebookF className='text-white mb-3 text-xl md:text-3xl'/>
            <FaInstagram className='text-white mb-3 text-xl md:text-3xl'/>
            <FaTwitter className='text-white text-xl md:text-3xl'/>
         </div>
        </div>
    );
};

export default Home;