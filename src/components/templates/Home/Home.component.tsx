import { observer } from 'mobx-react';
import { useInjection } from 'inversify-react';
import { HomeController } from '@app/home';
import { PokemonList } from '@components/organisms';

export const HomeTemplate = observer(() => {
  const { isLoading, pokemons } = useInjection(HomeController);

  if (isLoading) {
    return <div className="text-center mt-8">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Pokemon List</h1>
      <PokemonList pokemons={pokemons} />
    </div>
  )
});
