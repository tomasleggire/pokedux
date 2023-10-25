import PokemonCard from "./PokemonCard";
import "../styles/PokemonList.css";

interface Props {
  pokemons: { name: string; url: string }[];
}

const PokemonList = (props: Props) => {
  return (
    <div className="pokemon-list">
      {props.pokemons.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
          />
        );
      })}
    </div>
  );
};

export default PokemonList;
