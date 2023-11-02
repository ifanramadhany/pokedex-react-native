import UserStore from './UserStore';
import AuthStore from './AuthStore';
import PokemonStore from './PokemonStore';

class RootStore {
  userStore = UserStore;
  authStore = AuthStore;
  pokemonStore = PokemonStore;
}

const rootStore = new RootStore();
export default rootStore;
