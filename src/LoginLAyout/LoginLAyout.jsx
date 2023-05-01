import { Outlet } from "react-router-dom";
import NavogationBar from "../components/NavogationBar/NavogationBar";
import Footer from "../components/Footer/Footer";

const LoginLAyout = () => {
    return (
       <>
         <NavogationBar></NavogationBar>
        <Outlet></Outlet>
        <Footer></Footer>
       </>
    );
};

export default LoginLAyout;