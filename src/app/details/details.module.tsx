import { BindingScopeEnum, Container } from 'inversify';
import { Provider } from 'inversify-react';
import { DetailsController } from './details.controller';
import { DetailsTemplate } from '@components/templates';
import { PokemonService } from '@app/common/services/pokemon';
import { HttpPokemonRepository, PokemonRepositoryToken } from '@app/common/repositories/pokemon';

export function DetailsModule() {
  return (
    <Provider
      container={() => {
        const container = new Container({ defaultScope: BindingScopeEnum.Singleton });
        container.bind(DetailsController).toSelf();
        container.bind(PokemonService).toSelf();
        container.bind(PokemonRepositoryToken).to(HttpPokemonRepository);
        return container;
      }}
    >
      <DetailsTemplate />
    </Provider>
  );
}
