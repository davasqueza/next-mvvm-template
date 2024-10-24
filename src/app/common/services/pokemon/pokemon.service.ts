import { inject, injectable } from 'inversify';
import { Pokemon, PokemonDetails } from '@app/common/models';
import { PokemonRepository, PokemonRepositoryToken } from '@app/common/repositories/pokemon';

@injectable()
export class PokemonService {
  constructor(
    @inject(PokemonRepositoryToken)
    private pokemonRepository: PokemonRepository,
  ) {
  }

  getAllPokemons(): Promise<Pokemon[]> {
    return this.pokemonRepository.getAll();
  }

  getPokemonDetails(id: number): Promise<PokemonDetails> {
    return this.pokemonRepository.getById(id);
  }
}
