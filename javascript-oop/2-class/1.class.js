class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello(name) {
    return `halo ${name}, nama saya ${this.firstName} ${this.lastName}`;
  }
}

const eko = new Person('eko', 'kurniawan');
console.log(eko);
console.log(eko.sayHello('fathan'));

const budi = new Person('budi', 'nugraha');
budi.jabatan = 'manager';
console.log(budi);
