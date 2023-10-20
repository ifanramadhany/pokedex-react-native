import {makeAutoObservable, observable, action, computed} from 'mobx';

class UserStore {
  username = 'Test Store';

  constructor() {
    makeAutoObservable(this, {
      username: observable,
      setUsername: action,
      getUsername: computed,
    });
  }
  setUsername(newUsername: string) {
    this.username = newUsername;
  }

  get getUsername() {
    return this.username;
  }
}

const userStore = new UserStore();
export default userStore;
