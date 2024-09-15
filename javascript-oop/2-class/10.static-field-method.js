class Configuration {
  static name = 'belajar js OOP';
  static version = '1.0.0';
  static author = 'fathan abdul';

  static sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

const config = new Configuration();
console.log(config);
console.log(Configuration.author);
console.log(Configuration.sum(1, 2, 3));
