import {makeAutoObservable, observable, action, computed} from 'mobx';

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this, {
      count: observable,
      increment: action,
      decrement: action,
      getCount: computed,
    });
  }
  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  get getCount() {
    return this.count;
  }
}

const counterStore = new CounterStore();
export default counterStore;
