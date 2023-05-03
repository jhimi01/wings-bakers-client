import React, { useState } from 'react';
import { Rating } from "@smastrom/react-rating";
import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const RecipeDetails = ({recipe}) => {
    const [showFullMethod, setShowFullMethod] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleShow = () => {
      setShowFullMethod(!showFullMethod);
    };
  
    const handleFevToast = () => {
      setButtonClicked(true);
      toast("added to Fevorite!");
    };


    return (
        <div className="bg-slate-400 text-gray-800 p-3 card-compact w-full card shadow-xl"
        style={{ borderRadius: 0 }}>
        <figure><img src={recipe.recipe_img} alt="recipe" /></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{recipe.recipe_name}</h2>
          <ol>
            <h2 className="font-semibold text-xl">Ingredients :</h2>
            {recipe.ingredients.map((ingred, index) => (
              <li key={index} className="text-lg">
                {index + 1}| {ingred}
              </li>
            ))}
          </ol>
          <hr />
         <div className='py-4'>
         <p className="text-lg font-bold ">Cooking Method:
          <span className="text-lg font-normal">
              {recipe.cooking_method}
            </span>
            <span style={{cursor: 'pointer'}} onClick={handleShow}>
              {showFullMethod ? "seeLess" : "seeMore"}
            </span>
          </p>
         </div>
          {/* rating star */}
          <div className="flex items-center gap-2">
            <Rating style={{ maxWidth: 100 }} value={recipe.rating} readOnly/>
            <p className="font-bold">{recipe.rating}</p>
          </div>
          <div className="card-actions mt-3">  
          {/* ---------- button to show toast ----------- */}
            <button onClick={handleFevToast} disabled={buttonClicked} className={`${buttonClicked ? "bg-gray-500" : "bg-gray-700"} py-2 px-5 text-xl flex items-center text-white`}>Favorite <FaHeart />
            </button>
           
          </div>
        </div>
        <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
      </div>
    );
};

export default RecipeDetails;