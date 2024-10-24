import { BindingScopeEnum, Container } from 'inversify';
import { Provider } from 'inversify-react';
import { HomeController } from './home.controller';
import { HomeTemplate } from '@components/templates';
import { PokemonService } from '@app/common/services/pokemon';
import { HttpPokemonRepository, PokemonRepositoryToken } from '@app/common/repositories/pokemon';

export function HomeModule() {
  return (
    <Provider
      container={() => {
        const container = new Container({ defaultScope: BindingScopeEnum.Singleton });
        container.bind(HomeController).toSelf();
        container.bind(PokemonService).toSelf();
        container.bind(PokemonRepositoryToken).to(HttpPokemonRepository);
        return container;
      }}
    >
      <HomeTemplate />
    </Provider>
  );
}
