import React from "react";
import Banner from "../../../assets/banner4.jpg";
import recipe from "../../../../public/recipe.png";
import chefs from "../../../../public/chefs.png";
import menu from "../../../../public/menu.png";

const Details = () => {
  return (
    <div className="md:flex items-center gap-10 md:p-28 px-2">
      <div className="md:w-[60%]">
      <h1 className="text-3xl md:text-3xl font-semibold mb-5 text-yellow-50">Dear people, thank you for coming. The host will seat you shortly☺</h1>
      <div>
      <img
            className="w-full p-2"
            src={Banner}
            alt="Banner"
            style={{"border": "dashed 2px"}}
          />
      </div>
      </div>
      <div className="md:w-[40%]">
        <div className="flex mt-10 justify-between">
       <div>
       <h1 className="text-2xl text-yellow-50">The Chefs</h1>
        <p>We are four brothers teaching, and producing stop motion animation to the youngest members of the Youtube generation and their media mentors.</p>
       </div>
       <img
            className="w-[100px]"
            src={chefs}
            alt="chefs"
          />
        </div>
        <div className="flex mt-10 justify-between">
        <div>
       <h1 className="text-2xl text-yellow-50">The Menu</h1>
        <p>Food Menu is a fresh and juicy After Effects template with a delicious design, modern text animations and dynamic transitioning effects.</p>
       </div>
       <img
            className="w-[100px]"
            src={menu}
            alt="menu"
          />
        </div>
        <div className="flex mt-10 justify-between">
        <div>
       <h1 className="text-2xl text-yellow-50">The Recipe</h1>
        <p>We share fun, easy and homemade recipes through animation. Our mission is to inspire families to learn more about food and cook at home.</p>
       </div>
       <img
            className="w-[100px]"
            src={recipe}
            alt="recipe"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
