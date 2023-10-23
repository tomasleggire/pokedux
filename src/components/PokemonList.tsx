import PokemonCard from "./PokemonCard";
import "../styles/PokemonList.css";

interface Props {
  pokemons: string[];
}

const PokemonList = (props: Props) => {
  return (
    <div className="pokemon-list">
      {props.pokemons.map(() => {
        return <PokemonCard />;
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};

export default PokemonList;
