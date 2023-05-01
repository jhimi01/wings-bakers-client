import NavogationBar from '../components/NavogationBar/NavogationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div>
             <div className="container mx-auto">
          <NavogationBar></NavogationBar>
          </div>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Main;