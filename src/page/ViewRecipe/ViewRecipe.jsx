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
    const { chef_name, chef_picture, years_of_experience, number_of_recipes, likes, details } =item;

    return (
        <div className='grid bg-slate-600 md:grid-cols-2 grid-cols-1 gap-6 p-9 mt-3'>
            <div className='w-full overflow-hidden'>
                <figure>
                    <img src={chef_picture} alt="chef picture" />
                </figure>
            </div>     
            <div className='chefs-details  text-orange-50'>
                 <h1 className='md:text-5xl text-xl font-bold text-center border-y md:py-4 py-2 md:mt-0 my-2'>{chef_name}</h1>
                 <div  className='flex justify-between text-xl text-gray-300'>
                 <p>Experience of: {years_of_experience} years</p>
                 <p>Recipes: {number_of_recipes}</p>
                 </div>
                 <div  className='flex justify-between text-xl text-gray-300'>
                 <p>Likes <FaHeart />: {years_of_experience} years</p>
                 <p>Specialty: {details.specialty}</p>
                 </div>
                
            </div>
        </div>
    );
};

export default ViewRecipe;