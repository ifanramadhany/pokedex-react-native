import {makeObservable, observable, action, computed} from 'mobx';
import {getRequest} from '../api/api';
import {ApiResponse} from '../ts/types';

class PokemonStore {
  pokemons: any = [];
  nextPreviousApi: {next: string; previous: string} = {
    next: '',
    previous: '',
  };
  error: any = null;
  pokemonDetail: any = null;

  constructor() {
    makeObservable(this, {
      pokemons: observable,
      addPokemon: action,
      addError: action,
      fetchPokemons: action,
      getPokemons: computed,
      setPokemonDetail: action,
    });
  }

  addPokemon(pokemonData: any) {
    this.pokemons = [...this.pokemons, ...pokemonData];
  }

  addError(errorData: any) {
    this.error = errorData;
  }

  setPokemonDetail(data: any) {
    this.pokemonDetail = data;
  }

  get getPokemons() {
    return this.pokemons;
  }

  async fetchPokemons(offset: number, limit: number) {
    try {
      const response: ApiResponse = await getRequest('/pokemon', {
        params: {
          offset,
          limit,
        },
      });
      this.addPokemon(response?.results);
      this.nextPreviousApi = {
        next: response.next,
        previous: response.previous,
      };
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}

const pokemonStore = new PokemonStore();
export default pokemonStore;
