import PokemonCard from "./PokemonCard";
import "../styles/PokemonList.css";
import { IPokemonDetails } from "../actions/types";

interface Props {
  pokemons: IPokemonDetails[];
}

const PokemonList = (props: Props) => {
  return (
    <div className="pokemon-list">
      {props.pokemons.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
          />
        );
      })}
    </div>
  );
};

export default PokemonList;
