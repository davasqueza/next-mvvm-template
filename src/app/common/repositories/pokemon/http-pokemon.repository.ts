import { PokemonRepository } from './pokemon.interface';
import { inject, injectable } from 'inversify';
import { Pokemon, PokemonDetails } from '@app/common/models';
import { Config, ConfigToken } from '@app/common/services/config';
import { HttpService, HttpServiceToken } from '@app/common/services/http';

type GetAllResponse = {
  count: number;
  next: string;
  previous: string;
  results: { name: string; url: string; }[];
};

type GetByIdResponse = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
  sprites: { front_default: string };
}

@injectable()
export class HttpPokemonRepository implements PokemonRepository {
  constructor(
    @inject(ConfigToken)
    private config: Config,
    @inject(HttpServiceToken)
    private httpService: HttpService,
  ) {
  }

  async getAll(): Promise<Array<Pokemon>> {
    const response = await this.httpService.get<GetAllResponse>(
      `${this.config.apiPath}/pokemon?limit=150`,
    );

    return response.data.results.map((pokemon, index) => {
      const id = index + 1
      return {
        id,
        name: pokemon.name,
        imageUrl: `${this.config.imagesPath}/${id}.png`,
      }
    });
  }

  async getById(id: number): Promise<PokemonDetails> {
    const response = await this.httpService.get<GetByIdResponse>(
      `${this.config.apiPath}/pokemon/${id}`,
    );

    return {
      id: response.data.id,
      name: response.data.name,
      height: response.data.height,
      weight: response.data.weight,
      types: response.data.types.map((type: any) => type.type.name),
      abilities: response.data.abilities.map((ability: any) => ability.ability.name),
      imageUrl: response.data.sprites.front_default,
    }
  }
}
