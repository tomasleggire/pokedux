import { getPokemonDetails } from "../api";
import { PokemonType, SET_POKEMONS } from "./types";

export const setPokemons = (payload: any) => ({
  type: SET_POKEMONS,
  payload,
});

export const getPokemonsWithDetails =
  (pokemons: PokemonType[] = []) =>
  async (dispatch: any) => {
    const pokemonDetailed = await Promise.all(
      pokemons.map((pokemon: PokemonType) => getPokemonDetails(pokemon))
    );

    dispatch(setPokemons(pokemonDetailed));
  };
