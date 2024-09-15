function Person1() {
  this.firstName = '';
  this.lastName = '';
  this.sayHello = function (name) {
    return `halo ${name}, nama saya ${this.firstName} ${this.lastName}`;
  };
}

function Person2(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    return `halo ${name}, nama saya ${this.firstName} ${this.lastName}`;
  };
}

const eko = new Person1();
eko.firstName = 'eko';
eko.lastName = 'kurniawan';
console.log(eko.sayHello('fathan'));

const budi = new Person2('budi', 'nugraha');
console.log(budi);

const joko = new Person2();
joko.firstName = 'joko';
console.log(joko);
