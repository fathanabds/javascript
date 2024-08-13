// function expression
const tampilPesan = function (nama) {
  return `halo ${nama}`;
};

console.log(tampilPesan('fathan'));

// arrow function
const pesan = (nama) => {
  return console.log(`halo ${nama}`);
};

pesan('abdul');

// arrow function, implisit return >> jika isi fn hanya return saja, maka tidak perlu menulis "return" dan menggunakan {}
const salamWaktu = (nama, waktu) => console.log(`halo ${nama}, selamat ${waktu}`);

salamWaktu('dina', 'malam');

// arrow function tanpa parameter
const hello = () => console.log('hello world');

hello();

// [studi kasus]
let mahasiswa = ['fathan abdul', 'dina salma', 'teguh muflih'];
// versi 1
let jumlahHuruf = mahasiswa.map(function (el) {
  return el.length;
});
console.log(jumlahHuruf);

// versi 2 (implisit return)
let jlmHuruf = mahasiswa.map((el) => el.length);
console.log(jlmHuruf);

// versi 3 (mengembalikan dlm bentuk object), jika nama property pada object == value, maka cukup ditulis sekali
let countChar = mahasiswa.map((nama) => ({ nama, charLength: nama.length }));
console.table(countChar);

// [konsep this pada arrow function]
// constructor function
const Mahasiswa = function () {
  this.nama = 'adit';
  this.umur = 24;
  this.sayHello = function () {
    console.log(`halo nama saya ${this.nama}, umur saya ${this.umur} tahun`);
  };
};

const adit = new Mahasiswa();

// arrow function (constructor fn tidak bisa diubah menjadi arrow fn)
const Dosen = function () {
  this.nama = 'fahri';
  this.umur = 34;
  this.sayHello = () => console.log(`halo nama saya ${this.nama}, umur saya ${this.umur} tahun`);
};

const fahri = new Dosen();

// arrow function tidak memiliki konsep this >> this.nama dan this.umur akan undefined jika tidak didefinisikan sebelumnya
const Staf = {
  nama: 'fahri',
  umur: 34,
  sayHello: () => console.log(`halo nama saya ${this.nama}, umur saya ${this.umur} tahun`),

  // [perlu menggunakan function expression jika ingin menggunakan "this."]
  // sayHello: function () {
  //   console.log(`halo nama saya ${this.nama}, umur saya ${this.umur} tahun`);
  // },
};

const Direksi = function () {
  (this.nama = 'ethan'),
    (this.umur = 33),
    setInterval(function () {
      console.log(this.umur++);
    }, 500);
};

const ethan = new Direksi();
