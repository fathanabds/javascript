const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// [mencari angka >= 3]
// 1. menggunakan for
const newAngka1 = [];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    newAngka1.push(angka[i]);
  }
}

console.log(`>= 3 (for)`);
console.log(newAngka1);

// 2. menggunakan filter dan arrow function
const newAngka2 = angka.filter((el) => el >= 3);
console.log(`>= 3 (filter)`);
console.log(newAngka2);

// [x2 semua elemen angka dan simpan di array baru >> menggunakan map]
const newAngka3 = angka.map((el) => el * 2);
// console.log(`angka`);
// console.log(angka);
console.log(`angka * 2 (map)`);
console.log(newAngka3);

// [reduce: melakukan sesuatu kepada seluruh elemen array]
// -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
const newAngka4 = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`reduce`);
console.log(newAngka4);

// method chaining
// cari angka lebih dari 5 >> x3 satu per satu >> jumlahkan semuanya
const hasil = angka
  .filter((el) => el > 5) // 8,9,9
  .map((el) => el * 3) //24,27,27
  .reduce((acc, currV) => acc + currV, 0);
console.log('method chaining');
console.log(hasil);
