import React from 'react';
import './style/ingredients.css'


class Ingredients extends React.Component{
    render(){
        
        var IngredientsList = []
        if(this.props.ingredients !== undefined){
            IngredientsList = this.props.ingredients;
        }
        var listItems = []
        for(var itr=0; itr<IngredientsList.length; itr++){
            listItems.push(<li>{IngredientsList[itr][0]} {IngredientsList[itr][1]}</li>)
        }
        return(
            <div className="ingredients">
                <h3>Ingredients</h3>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
        
        
    }
}

export default Ingredients;