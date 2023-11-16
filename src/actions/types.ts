export interface PokemonType {
  name: string;
  key: string;
  url: string;
}

export interface IPokemonDetails {
  abilities: [];
  // base_experience:          number;
  // forms:                    [];
  // game_indices:             [];
  // height:                   number;
  // held_items:               any[];
  // id:                       number;
  // is_default:               boolean;
  // location_area_encounters: string;
  // moves:                    [];
  name: string;
  // order:                    number;
  // past_types:               any[];
  // species:                  [];
  sprites: SpritesType;
  // stats:                    [];
  // types:                    [];
  // weight:                   number;
}

export type SpritesType = {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
};
export const SET_POKEMONS = "SET_POKEMONS";
