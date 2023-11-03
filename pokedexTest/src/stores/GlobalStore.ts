import {makeAutoObservable, observable, action} from 'mobx';

class GlobalStore {
  isLoading = false;

  constructor() {
    makeAutoObservable(this, {
      isLoading: observable,
      setIsLoading: action,
    });
  }
  setIsLoading(value: boolean) {
    this.isLoading = value;
  }
}

const globalStore = new GlobalStore();
export default globalStore;
