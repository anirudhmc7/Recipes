import React from 'react';
import style from '../recipe.module.css'
import { Link } from "react-router-dom";

const APP_ID = "2558ddad";
const APP_KEY = "6088ff662f93a8a8fc8a75137f9fbfb0";




class Details extends React.Component {

    state = {
        activeRecipe: []
    }
    
    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const req = await fetch(`https://api.edamam.com/search?q=${title}&app_id=${APP_ID}&app_key=${APP_KEY}&`
        );
        const res = await req.json();
        // console.log(res.hits[0].recipe);
        this.setState({ activeRecipe: res.hits[0].recipe});
        console.log(this.state.activeRecipe);        
    }
    
    render() {
         const recipe = this.state.activeRecipe;
        
        return (
            <div className="container">
                {   this.state.activeRecipe.length !== 0 &&
                    <div className={style.recipe}>
                    <h1 className="active-recipe__title">{ recipe.label }</h1>
                    <img className="active-recipe__img" src={recipe.image} alt={recipe.label}/>                    
                    <br></br>
                    <h4>Ingredients:</h4>
                    <ol>
                        {recipe.ingredients.map(ingredient =>(
                        <li>{ingredient.text}</li>
                    ))}
                    </ol>                   
                    <p className="recipes__subtitle"><b>Calories:</b> {recipe.calories}</p>
                    <button className="active-recipe__button">
                        <Link to="/"> Go Home</Link>
                    </button>
                    <br></br>
                </div> 

                }
            </div>
        );
    }
};



        

export default Details;