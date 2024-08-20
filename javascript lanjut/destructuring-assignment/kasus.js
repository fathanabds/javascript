// [destructuring function return value]

// // contoh 1
// function tambahKali(a, b) {
//   return [a + b, a * b];
// }

// const [tambah, kali] = tambahKali(2, 3);
// console.log(`tambah: ${tambah}`);
// console.log(`kali: ${kali}`);

// contoh 2
function calc(a, b) {
  return [a + b, a - b, a * b];
}

// urutan di dalam const [] perlu diperhatikan karena berasosiasi dengan array hasil return fn
const [sum, subs, multi, divison = 'tidak ada operasi bagi di dalam fn'] = calc(5, 4);
console.log(`jumlah: ${sum}`);
console.log(`kurang: ${subs}`);
console.log(`kali: ${multi}`);
console.log(`bagi: ${divison}`);

// contoh 3. agar urutan di dalam [] tidak mempengaruhi hasilnya, maka return dari fn dan const dibuat sebagai objek
function kalkulasi(a, b) {
  return {
    tambah: a + b,
    kurang: a - b,
    kali: a * b,
    bagi: a / b,
  };
}

const { kali, tambah, kurang, bagi } = kalkulasi(5, 4);
console.log(`kurang: ${kurang}`);

// [destructuring function arguments]
// contoh 1 TANPA destructuring
const Mhs1 = {
  nama: 'fathan abdul',
  umur: 25,
  email: 'fathan@gmail.com',
};

// arrow function
const cetakMhs = (nama, umur) => `halo, nama saya ${nama}, saya berusia ${umur} tahun`;

console.log(cetakMhs(Mhs1.nama, Mhs1.umur));

// contoh 2 TANPA destructuring
const Warga = {
  nama: 'dina salma',
  umur: 20,
  email: 'dina@gmail.com',
};

// function declaration
function cetakWarga(objek) {
  return `halo, saya WARGA bernama ${objek.nama}, saya berusia ${objek.umur} tahun`;
}

console.log(cetakWarga(Warga));

// contoh 3 DENGAN destructuring
const Staf = {
  nama: 'ethan mahesa',
  umur: 30,
  email: 'ethan@gmail.com',
  nilai: {
    tugas: 80,
    uts: 90,
    uas: 85,
  },
};

// function expression
const cetakStaf = function ({ nama, umur, nilai: { uas } }) {
  return `halo, saya STAF bernama ${nama}, saya berusia ${umur} tahun. nilai uas saya adalah ${uas}.`;
};

console.log(cetakStaf(Staf));
