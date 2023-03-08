import classes from '../PokemonCard/PokemonCard.module.css'


const PokemonCard=({name})=>{

    return(
        <div className={classes.pokemonCard}>
            <h3>{name}</h3>

        </div>
    )


}



export default PokemonCard;