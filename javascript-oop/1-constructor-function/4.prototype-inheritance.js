function Employee(name) {
  this.name = name;
}

function Manager(name) {
  this.name = name;
}

// Employee.prototype = Manager.prototype; // cara yg salah

Manager.prototype = Object.create(Employee.prototype); // cara yg benar

Manager.prototype.sayHello = function (name) {
  console.log(`hello ${name}, my name is manager ${this.name}`);
};

Employee.prototype.sayHello = function (name) {
  console.log(`hello ${name}, my name is employee ${this.name}`);
};

const employee = new Employee('budi');
employee.sayHello('joko');

const manager = new Manager('eko');
manager.sayHello('joko');
