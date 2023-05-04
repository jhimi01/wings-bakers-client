import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "@smastrom/react-rating/style.css";

import "react-toastify/dist/ReactToastify.css";
import RecipeDetails from "../../components/RecipeDetails/RecipeDetails";

const ViewRecipe = () => {

  const { id } = useParams();
  const detailschef = useLoaderData();

  const item = detailschef.find((detail) => detail.id == id);

  const {
    chef_name,
    chef_picture,
    years_of_experience,
    number_of_recipes,
    likes,
    details,
    recipes,
  } = item;



  return (
    <>






      <div className="grid bg-slate-600 md:grid-cols-2 grid-cols-1 gap-6 px-9 mt-3">
        <div className="w-full h-full overflow-hidden flex items-center justify-center">
          <figure>
            <img src={chef_picture} alt="chef picture" />
          </figure>
        </div>
        <div className="text-orange-50 pb-6">
          <h1 className="md:text-5xl text-xl font-bold text-center border-y md:py-4 py-2 md:my-5 my-1">
            {chef_name}
          </h1>
          <div className="flex flex-col text-xl text-gray-300">
            <p className="mb-3">Bio: {details.bio}</p>
            <p className="mb-3">Experience of: {years_of_experience} years</p>
            <p className="mb-3">Recipes: {number_of_recipes}</p>
            <p className="mb-3">Specialty: {details.specialty}</p>
            <p className="mb-3">Awards: {details.awards[0]}</p>
            <p className="flex items-center gap-2 mb-3">Liked by : {likes} </p>
          </div>
          <Link to="/">
            <button className="flex py-2 px-5 text-xl bg-gray-200 text-gray-700 gap-1 items-center">
              {" "}
              <FaArrowLeft className="text-xl" /> Back Home{" "}
            </button>
          </Link>
        </div>
      </div>
    
    
    
    
      <h1 className="text-center text-4xl font-semibold mt-8">Recipies</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-7 py-7 container mx-auto">
        {recipes.map((recipe, index) => (

         <RecipeDetails key={index} recipe={recipe}></RecipeDetails>
        ))}
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
    </>
  );
};

export default ViewRecipe;







// {recipe.cooking_method.length < 230 
    // ? recipe.cooking_method
    // : recipe.cooking_method.substring(0, 200)}