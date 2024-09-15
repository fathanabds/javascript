class Employee {}

class Manager extends Employee {}

const eko = new Employee();
const fathan = new Manager();

console.log(eko instanceof Employee); // true
console.log(eko instanceof Manager); // false

console.log(fathan instanceof Employee); // true
console.log(fathan instanceof Manager); // true
