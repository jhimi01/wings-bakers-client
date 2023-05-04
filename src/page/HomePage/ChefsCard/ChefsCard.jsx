import { useEffect, useState } from "react";
import SingleChef from "../../../components/SingleChef/SingleChef";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'




const ChefsCard = () => {
  const [chefs, setChefs] = useState([]);
  const [loader, setLoader] = useState(true);
  

  useEffect(() => {
    fetch("https://wings-bakers-server-talukderjhimi-gmailcom.vercel.app/chefs")
    .then((res) => res.json())
    .then((data) => {
      setChefs(data);
      setLoader(false); // Update the loader state in Home component
    });
}, [loader]);


  return (
    <div className="md:p-28 py-20 px-2">
    <h1 className="text-3xl md:text-5xl font-bold text-center mb-9 text-yellow-50">Master Chefs</h1>
    <SkeletonTheme baseColor="#f0f8ff7e" height="200" highlightColor="#f0f8ff7e" >
     {loader ? (
          <div className="grid md:grid-cols-2 md:gap-10 gap-3 grid-cols-1">
            <div className="col-span-1">
              <Skeleton height={200} />
            </div>
            <div className="col-span-1">
              <Skeleton height={200} />
            </div>
            <div className="col-span-1">
              <Skeleton height={200} />
            </div>
            <div className="col-span-1">
              <Skeleton height={200} />
            </div>
            <div className="col-span-1">
              <Skeleton height={200} />
            </div>
            <div className="col-span-1">
              <Skeleton height={200} />
            </div>
          </div>
        ) : (<div className="grid md:grid-cols-2 md:gap-10 gap-3 grid-cols-1">
     {chefs.map((chef) => <SingleChef key={chef.id} chef={chef}></SingleChef>
      )}
     </div>)}
     </SkeletonTheme>

    </div>
  );
};

export default ChefsCard;
