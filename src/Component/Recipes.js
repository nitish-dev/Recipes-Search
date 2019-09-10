import React from 'react';
import Items from './Items';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const Recipes = ({loading, recipe}) => {
    if(loading){
        return <Spinner />
    }else{
    return (
        <div className="container mt-5">
        <div className="row">
            {recipe.map( items => (
            <Items key={items.recipe_id} item={items} />
            ))}
        </div>
        </div>
    );
            }
}
Recipes.propTypes = {
    loading:PropTypes.bool,
    recipe:PropTypes.array.isRequired
}
export default Recipes;