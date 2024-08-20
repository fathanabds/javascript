// [destructuring assignment]

// |A. destructuring array|
const perkenalan = ['halo', 'nama', 'saya', 'fathan'];

const [satu, dua, tiga, empat] = perkenalan;

// skip items
const [salam, , , nama] = perkenalan;

console.log(`dua: ${dua}`);
console.log(`salam: ${salam}`);

// 1. swap items
let a = 1;
let b = 2;

console.log(`a: ${a}`);
console.log(`b: ${b}`);

[a, b] = [b, a];

console.log(`a: ${a}`);
console.log(`b: ${b}`);

// 2. return value pada function
function coba() {
  return [4, 5];
}

const [x, y] = coba();
console.log(`x: ${x}`);
console.log(`y: ${y}`);

// 3. rest parameter
const [first, ...values] = [1, 2, 3, 4, 5, 6, 7];
console.log(`first: ${first}`);
console.log(`rest parameter:`);
console.log(values);

// |B. destructuring object|
const mhs = {
  uname: 'fathan',
  umur: 25,
};

// nama variable harus sesuai dengan nama properti object
const { uname, umur } = mhs;
console.log(`uname: ${uname}`);

// 1. destructuring tanpa deklarasi object
({ email, angkatan } = { email: 'dina@gmail.com', angkatan: 10 });
console.log(`email: ${email}`);

// 2. assign ke variable baru & memberikan default value
const warga = {
  kepalaKeluarga: 'ethan',
  rukunWarga: 15,
  // rt: 5,
};

// memberikan nilai default u/ rt
const { kepalaKeluarga: kk, rukunWarga: rw, rukunTetangga: rt = 'rt default' } = warga;
console.log(`kk: ${kk}`);
console.log(`rw: ${rw}`);
console.log(`rt: ${rt}`);

// 3. rest parameter
const karyawan = {
  id: 123678,
  jabatan: 'manajer',
  isActive: true,
  tahunMulai: 2000,
};

const { jabatan, ...iniRest } = karyawan;
console.log(`jabatan: ${jabatan}`);
console.log(`rest parameter:`);
console.log(iniRest);

// 4. mengambil field pada object, setelah dikirim sebagai parameter u/ function
// const karyawan = {
//   id: 123678,
//   jabatan: 'manajer',
//   isActive: true,
//   tahunMulai: 2000,
// };

function getId(objek) {
  return objek.id;
}

console.log(`ID: ${getId(karyawan)}`);

// menjadikan property pada object sebagai parameter fn
function getStatusAktif({ isActive }) {
  return isActive;
}

console.log(`isActive: ${getStatusAktif(karyawan)}`);
