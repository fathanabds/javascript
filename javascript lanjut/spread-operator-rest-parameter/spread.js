// [spread operator] >> u/ memecah iterable menjadi single element

// mengambil elemen array ke-i
console.log('[spread elemen array ke-i]');

const mhs = ['fathan', 'abdul', 'shodiq'];
console.log(...mhs[0]);

// menggabungkan array dan menyisipkan elemen baru
console.log('[menggabungkan array mhs + dosen + staf dan menyisipkan elemen baru (Aji)]');

const dosen = ['ethan', 'mahesa', 'murty'];
const staf = ['teguh', 'muflih'];
const gab = [...mhs, 'aji', ...dosen, ...staf];
console.log(gab);

// menggabungkan array tanpa menggunakan spread
// const mhs = ['fathan', 'abdul', 'shodiq'];
console.log('[menggabungkan array mhs + dosen tanpa spread]');

const org = [mhs, dosen];
console.log(org);

// copy array menggunakan map()
// const mhs = ['fathan', 'abdul', 'shodiq'];
console.log('[meng-copy array menggunakan Array.map]');

const coba = mhs.map((el) => el);
console.log(coba);

// copy array menggunakan spread operator
console.log('[meng-copy array menggunakan spread operator]');
const copyMhs = [...mhs];
console.log(copyMhs);

// [mengambil isi nodelist dan menyimpannya ke dalam array]
const liWarga = document.querySelectorAll('li');

// menggunakan for
console.log('[mengambil nodelist dan simpan ke dalam array -- menggunakan loop for]');
const warga = [];
for (let i = 0; i < liWarga.length; i++) {
  warga.push(liWarga[i].textContent);
}
console.log(warga);

// menggunakan spread
console.log('[mengambil nodelist dan simpan ke dalam array -- menggunakan spread]');
const pemuda = [...liWarga].map((w) => w.textContent);
console.log(pemuda);

// menggunakan spread u/ manipulasi DOM
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join('');
// console.log(huruf);

nama.innerHTML = huruf;
