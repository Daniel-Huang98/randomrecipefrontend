import React from 'react';
import './App.css';
import Image from './components/image.js'
import Button from './components/button.js'
import Ingredients from './components/ingredients.js'
import Instructions from './components/instructions.js'
import Information from './components/information.js'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      recipe:{
        name: "",
        category: "",
        region: "",
        ingredients: [],
        instructions:[],
        imageURL:"",
      },
      data: "" ,
      hasRecipe:0
    };
    this.getRecipe = this.getRecipe.bind(this)
  }
  getRecipe(){
    fetch("https://randomrecipeapi.herokuapp.com/randomrecipe",{method: 'GET', mode:'cors'}).then(data=>data.json()).then(json=>JSON.parse(json.data)).then(recipedata=>this.setState(
      {
        recipe:{
          name: recipedata.name,
          category: recipedata.category,
          region: recipedata.region,
          ingredients: recipedata.ingredients,
          instructions:recipedata.instructions,
          imageURL:recipedata.imageURL
        },
        data:recipedata.ingredients
      }
    )).catch(error=>console.log(error));
  }
  componentDidMount(){
    if(this.state.hasRecipe === 0){
      this.getRecipe();
    }
  }
  render(){
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>Show Me a Recipe</h1>
          <Information name={this.state.recipe.name} category={this.state.recipe.category} region={this.state.recipe.region}/>
          <Image imageURL={this.state.recipe.imageURL} name={this.state.recipe.name}/>
          <Button onclick={this.getRecipe} text={"generate"}/>
          <Ingredients ingredients={this.state.recipe.ingredients}/>
          <Instructions instructions={this.state.recipe.instructions}/>
        </header>
      </div>
    );
  }
}

export default App;
