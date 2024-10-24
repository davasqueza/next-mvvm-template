import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import { LoggerService, LoggerServiceToken } from '@app/common/services/logger';
import { PokemonService } from '@app/common/services/pokemon';
import { Pokemon } from '@app/common/models';

@injectable()
export class HomeController {
  pokemons: Pokemon[] = [];

  isLoading = false;

  constructor(
    @inject(PokemonService)
    private pokemonService: PokemonService,
    @inject(LoggerServiceToken)
    private loggerService: LoggerService,
  ) {
    makeAutoObservable(this, {}, { autoBind: true });
    loggerService.info('[Pokemon Controller] Loaded controller');

    this.loadPokemons();
  }

  private async loadPokemons() {
    this.isLoading = true;

    try {
      this.pokemons = await this.pokemonService.getAllPokemons();
    } catch (e) {
      this.loggerService.error('Unable to load pokemon list');
    } finally {
      this.isLoading = false;
    }
  }
}
