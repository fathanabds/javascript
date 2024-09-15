const person = {
  firstName: 'fathan',
  lastName: 'abdul',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const arr = value.split(' ');
    this.firstName = arr[0];
    this.lastName = arr[1];
  },
};

person.fullName = 'joko widodo';
console.table(person);
