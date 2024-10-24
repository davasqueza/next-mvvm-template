import { PokemonCard } from "@components/molecules";
import { Pokemon } from '@app/common/models';

type PokemonListProps = {
  pokemons: Pokemon[];
};

export function PokemonList({ pokemons }: PokemonListProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          imageUrl={pokemon.imageUrl}
        />
      ))}
    </div>
  )
}
