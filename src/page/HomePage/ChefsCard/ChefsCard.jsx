import { useEffect, useState } from "react";
import SingleChef from "../../../components/SingleChef/SingleChef";

const ChefsCard = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  // console.log(chefs.map((chef) => chef.chef_picture));

  return (
    <div className="md:p-28 py-20 px-2">
    <h1 className="text-3xl md:text-5xl font-bold text-center mb-9 text-yellow-50">Master Chefs</h1>
     <div className="grid md:grid-cols-2 md:gap-10 gap-3 grid-cols-1">
     {chefs.map((chef) => <SingleChef key={chef.id} chef={chef}></SingleChef>
      )}
     </div>
    </div>
  );
};

export default ChefsCard;
