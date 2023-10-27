import { PokemonType } from "../actions/types";

export const logger = (store: any) => (next: any) => (action: any) => {
  console.log(action);
  console.log(store);
  next(action);
};

export const featuring = (store: any) => (next: any) => (actionInfo: any) => {
  console.log(store);
  const featured = [{ name: "eddie" }, ...actionInfo.payload];
  const updatedActionInfo = {
    ...actionInfo,
    payload: [...featured],
  };
  next(updatedActionInfo);
};

export const pokeUpperCaseName =
  (store: any) => (next: any) => (actionInfo: any) => {
    console.log(store);
    const upperCase = [
      ...actionInfo.payload.map((poke: PokemonType) => ({
        ...poke,
        name: poke.name.toUpperCase(),
      })),
    ];
    const updatedActionInfo = { ...actionInfo, payload: [...upperCase] };
    next(updatedActionInfo);
  };
