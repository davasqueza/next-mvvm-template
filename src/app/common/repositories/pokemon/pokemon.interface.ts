import { interfaces } from 'inversify';

import { Pokemon, PokemonDetails } from '@app/common/models';

export interface PokemonRepository {
  getAll(): Promise<Array<Pokemon>>;
  getById(id: number): Promise<PokemonDetails>
}

export const PokemonRepositoryToken: interfaces.ServiceIdentifier<PokemonRepository> = Symbol('PokemonRepository');
