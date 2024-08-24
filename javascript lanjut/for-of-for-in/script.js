// [for..of]

// \ARRAY\
const mhs = ['fathan', 'abdul', 'shodiq'];

// looping array menggunakan for
console.log('[menggunakan for]');
for (let i = 0; i < mhs.length; i++) {
  console.log(mhs[i]);
}

// looping array menggunakan foreach
console.log('[menggunakan foreach]');
mhs.forEach((el) => console.log(el));

// looping array menggunakan for..of
console.log('[menggunakan for..of u/ array]');
for (const m of mhs) {
  console.log(m);
}

// menggunakan foreach untuk menampilkan isi array + indexnya
console.log('[menggunakan foreach u/ menampilkan index array]');
mhs.forEach((el, i) => console.log(`${el} adalah mahasiswa ke ${i + 1}`));

// menggunakan for..of untuk menampilkan isi array + indexnya
// const mhs = ['fathan', 'abdul', 'shodiq'];
console.log('[menggunakan for..of u/ menampilkan index array]');
// method Array.entries akan mengembalikan array berisi [index, value] >> kemudian lakukan destructuring ke variable [i, el] agar index dan elemen array dapat langsung digunakan/dipanggil
for (const [i, el] of mhs.entries()) {
  console.log(`${el} adalah mahasiswa ke ${i + 1}`);
}

// \STRING\
const nama = 'dina';

// looping string menggunakan for..of
console.log('[menggunakan for..of u/ string]');
for (const char of nama) {
  console.log(char);
}

// \NODELIST\
const li = document.querySelectorAll('li');

// looping nodelist menggunakan foreach
console.log('[menggunakan foreach u/ nodelist]');
li.forEach(function (nama) {
  console.log(nama.innerHTML);
});

// looping string menggunakan for..of
console.log('[menggunakan for..of u/ nodelist]');
for (const nama of li) {
  console.log(nama.innerHTML);
}

// \ARGUMENTS\
// jika tidak ada parameter yang menangkap argumen pada fn, maka argument yg dikirim akan ditampung pada variable bernama 'arguments' => variable default yang beperilaku seperti array
function jumlahkanAngka() {
  let total = 0;
  // looping arguments menggunakan for..of
  for (const angka of arguments) {
    total += angka;
  }
  console.log(total);
}

console.log('[menggunakan for..of u/ arguments]');
jumlahkanAngka(1, 2, 3, 4, 5);

// [for..in] >> digunakan u/ iterasi objek
const warga = {
  nama: 'ethan mahesa',
  umur: 25,
  email: 'ethan@gmail.com',
};

// looping properti objek menggunakan for..in
console.log('[menggunakan for..in u/ properti objek]');
for (const properti in warga) {
  console.log(properti);
}

// looping value properti objek menggunakan for..in
console.log('[menggunakan for..in u/ value dari properti objek]');
for (const properti in warga) {
  // jadikan properti sebagai index dengan penulisan berikut:
  console.log(warga[properti]);
}
