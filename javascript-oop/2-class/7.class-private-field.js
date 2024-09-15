class Counter {
  #counter = 0;

  increment() {
    this.#counter++;
    return `counter++`;
  }

  decrement() {
    this.#counter--;
    return 'counter--';
  }

  get() {
    return this.#counter;
  }
}

const counter = new Counter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());

console.log(counter.get());
// counter.counter = 100;
// console.log(counter);
