function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    return `halo ${name}, nama saya ${this.firstName} ${this.lastName}`;
  };
}

Person.prototype.sayBye = () => {
  return 'good bye';
};

Person.prototype.run = function () {
  return `${this.firstName} is running`;
};

const eko = new Person('eko', 'kurniawan');
const budi = new Person('budi', 'nugraha');
console.log(eko.sayBye());
console.log(budi.run());
