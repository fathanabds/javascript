class Counter {
  constructor() {
    this.value = 1;
  }

  next() {
    try {
      return this.value;
    } finally {
      this.value++;
    }
  }
}

const counter = new Counter();
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
