class Person {
  say(name) {
    if (name) {
      return this.#sayWithName(name);
    } else {
      return this.#sayWithoutName();
    }
  }

  #sayWithoutName() {
    return 'hello';
  }

  #sayWithName(name) {
    return `hello ${name}`;
  }
}

const eko = new Person();
console.log(eko.say('joko'));
console.log(eko.say());

const fathan = 'fathan';

console.log(eko instanceof Person); // true
console.log(fathan instanceof Person); // false
