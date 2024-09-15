class Employee {
  constructor(firstName, middleName) {
    this.firstName = firstName;
    this.middleName = middleName;
  }
  sayHello(name) {
    return `halo ${name}, nama saya employee ${this.firstName}`;
  }
}

class Manager extends Employee {
  constructor(firstName, middleName, lastName) {
    super(firstName, middleName);
    this.lastName = lastName;
  }
  sayHello(name) {
    return `halo ${name}, nama saya manager ${this.lastName}`;
  }
}

const eko = new Manager('eko', 'kurniawan', 'khannedy');
console.log(eko.sayHello('joko'));
