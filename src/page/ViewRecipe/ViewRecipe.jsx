import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewRecipe = () => {
    const { id } = useParams();
    const details = useLoaderData()
    console.log(details)
    console.log(id)
    const item  = details.find(detail => detail.id == id)
    console.log(item)
    const { chef_name, chef_picture, years_of_experience, number_of_recipes, likes } =item;

    return (
        <div>
    <p>{chef_name}</p>      
        </div>
    );
};

export default ViewRecipe;