// [closure: suatu fungsi membutuhkan variabel dari fungsi parent-nya]

// versi 1
function init() {
  let nama = 'fathan';
  function tampilNama() {
    console.log(nama);
  }
  tampilNama();
}
init();

// function factories [contoh 1]: membuat fn sesuai dengan fn yg lain
function umur() {
  let umur = 25;
  return function () {
    console.log(`halo, kamu berusia ${umur} tahun`);
  };
}

let tampilUmur = umur();
tampilUmur();

// function factories [contoh 2]
function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`halo ${nama}, selamat ${waktu}`);
  };
}

let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatSore = ucapkanSalam('Sore');

selamatPagi('dina');
selamatSiang('fadillah');
selamatSore('salma');

// function factories [contoh 3]
let add = function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
};

let a = add();

console.log(a());
console.log(a());
console.log(a());

// // function factories [contoh 4] >> menggunakan immediately invoked function, agar fn tidak perlu ditampung di sebuah variable terlebih dahulu
let tambah = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

console.log(tambah());
console.log(tambah());
console.log(tambah());
console.log(tambah());
console.log(tambah());
