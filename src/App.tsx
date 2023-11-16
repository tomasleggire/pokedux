import { useEffect } from "react";
import { setPokemons } from "./actions";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { getPokemon, getPokemonDetails } from "./api";
import logo from "./statics/logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { PokemonType } from "./actions/types";

function App() {
  const pokemons = useSelector((state: any) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      const pokemonDetailed = await Promise.all(
        pokemonsRes.map((pokemon: PokemonType) => getPokemonDetails(pokemon))
      );
      dispatch(setPokemons(pokemonDetailed));
    };
    fetchPokemons();
  }, []);

  return (
    <div className="app">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
