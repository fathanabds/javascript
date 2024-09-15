function Employee(firstName) {
  this.firstName = firstName;
  this.sayHello = function (name) {
    return `halo ${name}, nama saya ${this.firstName}`;
  };
}

function Manager(firstName, lastName) {
  Employee.call(this, firstName);
  this.lastName = lastName;
}

const eko = new Employee('eko');
console.log(eko);

const fathan = new Manager('fathan', 'abdul');
console.log(`${fathan.sayHello('joko')} ${fathan.lastName}`);

const abd = Manager('fathan', 'abdul'); //contoh jika tidak menggunakan 'new'
console.log(abd); //undefined
