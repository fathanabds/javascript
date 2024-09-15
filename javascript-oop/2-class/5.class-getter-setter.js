class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set parentName(val) {
    const result = val.split(' ');
    this.fatherName = result[0];
    this.motherName = result[1];
  }

  set birthYear(val) {
    this.age = 2024 - val;
  }
}

const eko = new Person('eko', 'kurniawan');
eko.parentName = 'jokowi iriana';
eko.birthYear = 1999;
console.log(eko);
console.log(eko.fullName);
