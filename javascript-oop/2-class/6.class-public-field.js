class Customer {
  firstName = 'abah';
  lastName;
  balance = 0;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const eko = new Customer('eko', 'kurn');
console.log(eko);
