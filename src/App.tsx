import { useEffect } from "react";
import { connect } from "react-redux";
import { setPokemons as setPokemonsActions } from "./actions";
import { PokemonType } from "./actions/types";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import getPokemon from "./api";
import logo from "./statics/logo.svg";
import "./App.css";

type AppType = {
  pokemons: PokemonType[];
  setPokemons: any;
};

function App({ pokemons, setPokemons }: AppType) {
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
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

const mapStateToProps = (state: any) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch: any) => ({
  setPokemons: (value: any) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
