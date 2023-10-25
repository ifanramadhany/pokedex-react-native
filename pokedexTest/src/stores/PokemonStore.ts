import {makeObservable, observable, action, computed} from 'mobx';
import {getRequest} from '../api/api';
import {ApiResponse, PokemonType} from '../ts/types';

class PokemonStore {
  pokemons: any = [];
  allPokemons: any = [];
  nextPreviousApi: {next: string; previous: string} = {
    next: '',
    previous: '',
  };
  error: any = null;
  pokemonDetail: any = null;
  resultBySearch: any = [];

  constructor() {
    makeObservable(this, {
      pokemons: observable,
      allPokemons: observable,
      resultBySearch: observable,
      addPokemon: action,
      addError: action,
      fetchPokemons: action,
      getPokemons: computed,
      setPokemonDetail: action,
      filterByName: action,
      setPokemonFilterByName: action,
    });
  }

  addPokemon(pokemonData: any) {
    this.pokemons = [...this.pokemons, ...pokemonData];
  }

  addAllPokemon(pokemonData: any) {
    this.allPokemons = pokemonData;
  }

  addError(errorData: any) {
    this.error = errorData;
  }

  setPokemonDetail(data: any) {
    this.pokemonDetail = data;
  }

  setPokemonFilterByName(data: any) {
    this.resultBySearch = data;
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

  async fetchAllPokemons() {
    try {
      const response: ApiResponse = await getRequest(
        '/pokemon?limit=100000&offset=0',
      );
      this.addAllPokemon(response?.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  filterByName(name: string) {
    let result: PokemonType[] = [];
    let data = this.allPokemons;
    data.forEach((list: PokemonType) => {
      if (list.name.toLocaleLowerCase().search(name.toLocaleLowerCase()) > -1) {
        result.push(list);
      }
    });
    this.setPokemonFilterByName(result);
  }
}

const pokemonStore = new PokemonStore();
export default pokemonStore;
