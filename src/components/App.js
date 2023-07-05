import React, { useEffect, useState } from 'react'
import Foodrecipe from './Foodrecipe';
import Navbar from './Navbar';
import Footer from './Footer';
import "../styles.scss"
import load from "../load.gif"


const Loader = () => {
  return (
    <div className='loading-image'>
      <img src={load} alt='loading' />
    </div>
  );
};




const App = () => {



  const API_ID="d1844ad9";
  const APP_ID="c38ae492";
  const APP_KEY="f1449a79c75028e50710d11937d56ab1";
  
  const [rec,setrec]=useState([]);
  const [search,setsearch]=useState("");
  const [query, setQuery] = useState("chicken");
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect( ()=>{
  getRecipes()
    
  },[query]);

  const getRecipes= async ()=>{
    const response= await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=c38ae492&app_key=f1449a79c75028e50710d11937d56ab1`)
    const data= await response.json();
    setrec(data.hits);
    setIsLoading(false);
    console.log(data.hits);
  }

  
function updatesearch(event){
  setsearch(event.target.value);

}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setIsLoading(true);

  // reset search to empty string
  setsearch("");
};

return (
  <div className='app'>
    <Navbar />
    <form onSubmit={getSearch} action='' className='search-form'>
      <input
        type='text'
        value={search}
        onChange={updatesearch}
        className='search-bar'
        placeholder='type here foodie ;)'
      />
      <button type='submit' className='search'>
        Make moi Food!
      </button>
    </form>
    {isLoading ? <Loader /> : (
      <div className='recipes'>
        {rec.map((recipe) => {
          return (
            <Foodrecipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              cals={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              type={recipe.recipe.cuisineType}
            />
          );
        })}
      </div>
    )}
    <Footer />
  </div>
);
};

export default App;



  