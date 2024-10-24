export interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

export interface PokemonDetails {
  id: number,
  name: string,
  height: number,
  weight: number,
  types: string[],
  abilities: string[],
  imageUrl: string,
}
