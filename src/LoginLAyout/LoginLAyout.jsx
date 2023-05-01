import { Outlet } from "react-router-dom";
import NavogationBar from "../components/NavogationBar/NavogationBar";

const LoginLAyout = () => {
    return (
       <>
         <NavogationBar></NavogationBar>
        <Outlet></Outlet>
       </>
    );
};

export default LoginLAyout;