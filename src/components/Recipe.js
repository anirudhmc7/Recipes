import React from 'react'; 
import style from '../recipe.module.css';
import { Link } from "react-router-dom";

const Recipe = ({title,image }) => { 
    
    return(
            
        <div className="col-sm-12 col-md-6 col-lg-6">
            <div  className={style.recipe}>
            <h1 className="recipes__title">
                {title.length < 30 ? `${title}` : `${title.substring(0,30)}...`}
            </h1>                      
            <img className={style.image} src={image} alt=""/> 
            <br></br>           
            <button className="recipe_buttons">
                <Link to={{
                     pathname: `/details/${title}`,
                     state : { recipe : title}
                     }}>View Recipe</Link>
            </button>
            </div>
        </div>
        
    );        
}


export default Recipe;