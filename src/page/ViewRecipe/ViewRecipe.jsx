import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const [showFullMethod, setShowFullMethod] = useState(false);

  const handleShow = () => {
    setShowFullMethod(!showFullMethod);
  };

  const handleFevToast = () => {
    toast("added to Fevorite!");
  };

  return (
    <>
      <div className="grid bg-slate-600 md:grid-cols-2 grid-cols-1 gap-6 px-9 mt-3">
        <div className="w-full overflow-hidden">
          <figure>
            <img src={chef_picture} alt="chef picture" />
          </figure>
        </div>
        <div className="text-orange-50 pb-6">
          <h1 className="md:text-5xl text-xl font-bold text-center border-y md:py-4 py-2 md:my-5 my-1">
            {chef_name}
          </h1>
          <div className="flex flex-col text-xl text-gray-300">
            <p className="mb-3">Experience of: {years_of_experience} years</p>
            <p className="mb-3">Recipes: {number_of_recipes}</p>
            <p className="flex items-center gap-2 mb-3">Liked by : {likes} </p>
            <p className="mb-3">Specialty: {details.specialty}</p>
            <p className="mb-3">Awards: {details.awards[0]}</p>
          </div>
        </div>
      </div>
      <h1 className="text-center text-4xl font-semibold mt-8">Recipies</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-7 py-7 container mx-auto">
        {recipes.map((recipe) => (
          <div
            className="card bg-slate-100 text-gray-800 p-5 card-compact w-full shadow-xl"
            style={{ borderRadius: 0 }}
          >
            <figure>
              <img src={recipe.recipe_img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">
                {recipe.recipe_name}
              </h2>
              <ol>
                <h2 className="font-semibold text-xl">Ingredients :</h2>
                {recipe.ingredients.map((ingred, index) => (
                  <li className="text-lg">
                    {index + 1}| {ingred}
                  </li>
                ))}
              </ol>
              <hr />
              <p className="text-lg font-bold">
                Cooking Method:{" "}
                <span className="text-lg font-normal">
                  {recipe.cooking_method.length < 150
                    ? recipe.cooking_method
                    : recipe.cooking_method.substring(0, 100) + "..."}
                </span>
                <span onClick={handleShow}>
                  {showFullMethod ? "seeLess" : "seeMore"}
                </span>
              </p>

              {/* rating star */}

              <div className="flex items-center gap-2">
                <Rating
                  style={{ maxWidth: 100 }}
                  value={recipe.rating}
                  readOnly
                />
                <p className="font-bold">{recipe.rating}</p>
              </div>
              <div className="card-actions mt-3">
                <button
                  onClick={handleFevToast}
                  className="bg-gray-600 py-2 px-5 text-xl flex items-center text-white"
                >
                  Favroite <FaHeart />
                </button>
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
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ViewRecipe;

// <span>{recipe.cooking_method.length < 150 ? recipe.cooking_method :  recipe.cooking_method.substring(0, 100) + '...'}</span>
/* <span onClick={handleShow}>{showFullMethod?'seeLess':'seeMore'}</span> */
