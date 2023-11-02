import {makeAutoObservable, observable, action} from 'mobx';

class CounterStore {
  isAuth = false;

  constructor() {
    makeAutoObservable(this, {
      isAuth: observable,
      setIsAuth: action,
    });
  }
  setIsAuth(value: boolean) {
    this.isAuth = value;
  }
}

const counterStore = new CounterStore();
export default counterStore;
