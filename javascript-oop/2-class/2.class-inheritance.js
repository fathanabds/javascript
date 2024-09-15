class Employee {
  constructor(name) {
    this.name = name;
  }
  sayHello(name) {
    return `halo ${name}, nama saya employee ${this.name}`;
  }
}

class Manager extends Employee {
  sayHello(name) {
    return `halo ${name}, nama saya manager ${this.name}`;
  }
}

const eko = new Manager('eko');
console.log(eko.sayHello('fathan'));
