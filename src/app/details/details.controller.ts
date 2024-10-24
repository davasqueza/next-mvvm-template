import { inject, injectable } from 'inversify';
import { autorun, makeAutoObservable } from 'mobx';
import { NextRouter } from 'next/dist/shared/lib/router/router';
import { NextRouterToken } from '@app/common/services/router/router.interface';
import { LoggerService, LoggerServiceToken } from '@app/common/services/logger';
import { PokemonService } from '@app/common/services/pokemon';
import { PokemonDetails } from '@app/common/models';

@injectable()
export class DetailsController {
  pokemon: PokemonDetails;

  isLoading = false;

  constructor(
    @inject(PokemonService)
    private pokemonService: PokemonService,
    @inject(LoggerServiceToken)
    private loggerService: LoggerService,
    @inject(NextRouterToken)
    private observableRouter: NextRouter,
  ) {
    makeAutoObservable(this, {}, { autoBind: true });
    loggerService.info('[Pokemon Controller] Loaded controller');

    autorun(() => {
      const id = this.observableRouter.query.id;

      if(id) {
        this.loadPokemon(Number(id));
      }
    });
  }

  private async loadPokemon(id: number) {
    this.isLoading = true;

    try {
      this.pokemon = await this.pokemonService.getPokemonDetails(id);
    } catch (e) {
      this.loggerService.error('Unable to load pokemon');
    } finally {
      this.isLoading = false;
    }
  }
}
