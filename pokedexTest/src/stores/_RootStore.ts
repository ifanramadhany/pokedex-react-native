import UserStore from './UserStore';
import CounterStore from './CounterStore';
import PokemonStore from './PokemonStore';

class RootStore {
  userStore = UserStore;
  counterStore = CounterStore;
  pokemonStore = PokemonStore;
}

const rootStore = new RootStore();
export default rootStore;
