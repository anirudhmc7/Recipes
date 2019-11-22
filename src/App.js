import React,{useEffect, useState} from 'react'; 
import Recipe from './components/Recipe';
import './App.css';

const App = () => {

  const APP_ID = "2558ddad";
  const APP_KEY = "6088ff662f93a8a8fc8a75137f9fbfb0";

// input functions

    const [tags, setTags] = React.useState([]);
    const removeTags = indexToRemove => {
      setTags(tags.filter((_, index) => index !== indexToRemove));
    };
    const addTags = event => { 
      if(event.target.value !== "") {
        setTags([ ... tags, event.target.value]);
        event.target.value = "";
        setSearch('');
      }      
     };

//Api functions

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('');
  

  useEffect(() => { 
    getRecipes();    
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
      setSearch(e.target.value);      
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);    
  }  

  return (
    <div className="App">

      <header className="App-header">
          <h1 className="App-title">HOUSE OF RECIPES</h1>
        </header>

        <h4>Obtain a collection of our mindblowing recipes</h4>
        <h5>All you have to do is type in your favorite ingredients below!!</h5>
        <br></br>
        <br></br>

      <form onSubmit={getSearch} className="search-form">  
         
                          
        <div className="tags-input">
          <ul>
            { tags.map((tag, index) => (
              <li key={index}>              
              <span className="tag">{tag}</span>
              <i className="material-icons close" onClick={() => removeTags(index)}>
              close</i>
              </li>
                ))}            
          </ul>
           <input type="text" className="main-input"
            onKeyUp={e => (e.key === "Enter" ? addTags(e) : null)}
            value={search}
            onChange={updateSearch}          
            placeholder='Hit the "Enter" key as you input each ingredient'
            />
            <br></br>
            <br></br>
            <br></br>
        </div>

      </form>

      <div className="container">
        <div className="row">
              {recipes.map(recipe => (
              <Recipe 
              key={recipe.recipe.label}
              title={recipe.recipe.label} 
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              />
            ))}
          </div>
        </div>
      </div>

  );
  
}


export default App;
