import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewRecipe = () => {
    const { id } = useParams();
    const detailschef = useLoaderData()
    console.log(detailschef)
    console.log(id)
    const item  = detailschef.find(detail => detail.id == id)
    console.log(item)
    const { chef_name, chef_picture, years_of_experience, number_of_recipes, likes, details, recipes } =item;

    return (
        <>
            <div className='grid bg-slate-600 md:grid-cols-2 grid-cols-1 gap-6 p-9 mt-3'>
            <div className='w-full overflow-hidden'>
                <figure>
                    <img src={chef_picture} alt="chef picture" />
                </figure>
            </div>     
            <div className='chefs-details  text-orange-50'>
                 <h1 className='md:text-5xl text-xl font-bold text-center border-y md:py-4 py-2 md:mt-0 my-2'>{chef_name}</h1>
                 <div  className='flex justify-center flex-col text-xl text-gray-300'>
                 <p>Experience of: {years_of_experience} years</p>
                 <p>Recipes: {number_of_recipes}</p>
                 <p className='flex items-center gap-2'>Liked by : {likes} </p>
                 <p>Specialty: {details.specialty}</p>
                 <p>Awards: {details.awards[0]}</p>
                 </div>
                 
                
            </div>
        </div>
        <h1 className='text-center text-4xl font-semibold mt-8'>Recipies</h1>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-3 mt-7 py-7 container mx-auto'>
            {recipes.map(recipe => 
            <div className="card bg-slate-100 text-gray-800 p-5 card-compact w-96 shadow-xl" style={{borderRadius: 0}}>
  <div className="card-body">
    <h2 className="card-title">{recipe.recipe_name}!</h2>
   <ol>
   {recipe.ingredients.map((ingred, index) => <li>{index + 1}.{ingred}</li>)}
   </ol>
    <div className="card-actions justify-end">
    <button className='bg-white py-2 px-5 text-xl flex items-center text-gray-600'>Favroite <FaHeart /></button>
    </div>
  </div>
</div>)}
        </div>
        </>
    );
};

export default ViewRecipe;