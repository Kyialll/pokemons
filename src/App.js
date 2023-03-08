
import './App.css';
import {useState,useEffect} from "react"
import PokemonCard from "./components/PokemonCard/PokemonCard";
import {fetchPokemons} from "./api/fetchPokemons";



const App=()=> {
  const [theme,setTheme]=useState('dark')
  const [list,setList]=useState([])

  const toggleTheme=()=>{
    const newTheme=theme==='dark'? 'light':'dark'
    setTheme(newTheme)
  }
  useEffect(()=>{
    fetchPokemons(setList)
  },[])




  return(
      <div className={`app ${theme}`}>
        <button onClick={toggleTheme}
                className="button">
          Change theme
        </button>
        <div className="pokemonCard">
          {list.map((pokemon)=>
              <PokemonCard name={pokemon.name}/>)
          }
        </div>






      </div>

  );
}

export default App;
