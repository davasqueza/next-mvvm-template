import { observer } from 'mobx-react';
import { useInjection } from 'inversify-react';
import { DetailsController } from '@app/details';
import Link from 'next/link';
import { PokemonImage, PokemonName } from '@components/atoms';

export const DetailsTemplate = observer(() => {
  const { isLoading, pokemon } = useInjection(DetailsController);

  if (isLoading) {
    return <div className="text-center mt-8">Loading...</div>
  }

  if (!pokemon) {
    return <div className="text-center mt-8">Pokemon not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Back to Pokemon List
      </Link>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <PokemonImage name={pokemon.name} url={pokemon.imageUrl} />
          <div className="md:ml-8 mt-4 md:mt-0">
            <PokemonName name={pokemon.name} />
            <p className="text-gray-600 mt-2">#{pokemon.id.toString().padStart(3, '0')}</p>
            <div className="mt-4">
              <h3 className="font-semibold">Types:</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {pokemon.types.map((type) => (
                  <span key={type} className="bg-gray-200 px-2 py-1 rounded-full text-sm">
                    {type}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Abilities:</h3>
              <ul className="list-disc list-inside mt-1">
                {pokemon.abilities.map((ability) => (
                  <li key={ability} className="capitalize">
                    {ability}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <p>
                <span className="font-semibold">Height:</span> {pokemon.height / 10} m
              </p>
              <p>
                <span className="font-semibold">Weight:</span> {pokemon.weight / 10} kg
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
