import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const PrivateRoutes = ({ children }) => {

    const { user, loader} = useContext(AuthContext)
    const location = useLocation();

    if (loader) {


      return <SkeletonTheme baseColor="#f0f8ff7e" height="200" highlightColor="#f0f8ff7e" ><div className="grid md:grid-cols-2 mt-4 mx-4 md:gap-10 gap-3 grid-cols-1">
      <div className="col-span-1">
        <Skeleton height={350} />
      </div>
      <div className="col-span-1">
        <Skeleton height={350} />
      </div>
    </div>
    </SkeletonTheme>
  
    //   return <div style={{ display: "flex", justifyContent: "center" ,alignItems:'center' ,height:'55vh'}}>
    //   <div
    //     className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[center] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    //     role="status"
    //   >
    //     <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
    //       Loading...
    //     </span>
    //   </div>
    // </div>
    }



    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace/>;
};

export default PrivateRoutes;