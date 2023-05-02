
import { FaConciergeBell, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleChef = ({chef}) => {
    const {chef_name, chef_picture, years_of_experience, number_of_recipes, likes, id} =chef;
    return (
      <div style={{borderRadius: 0}} className="card md:h-56 lg:card-side bg-orange-50 text-gray-600 shadow-xl">
      <figure><img src={chef_picture} className="md:w-44 md:h-full h-52 object-cover w-full" alt="Album"/></figure>
      <div className="card-body">
        <h2 className="card-title">{chef_name}</h2>
        <p>Experience: {years_of_experience} years</p>
        <p>Recipes: {number_of_recipes} </p>
        <p className="flex items-center gap-1">Liked by <FaHeart />: {likes} </p>
        <div className="card-actions justify-end">
         <Link to={`/chefs/${id}`}> <button className="bg-gray-800 py-2 px-5 text-base flex items-center gap-2 text-white">View Recipe <FaConciergeBell /></button></Link>
        </div>
      </div>
    </div>
    );
};

export default SingleChef;