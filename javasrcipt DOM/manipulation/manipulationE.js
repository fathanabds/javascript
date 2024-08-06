// manipulasi elemen

// 1. element.innerHTML = ''>> u/ mengubah isi elemen html yang dipilih
const judul = document.getElementById('judul');
judul.innerHTML = 'halo fathan';

const sectionA = document.querySelector('section#a');
sectionA.innerHTML = 'diubah dari JS';

const sectionB = document.getElementById('b');
sectionB.innerHTML = '<h1>ini fathan</h1><p>abdul shodiq</p>';


// 2. element.style.<propertiCSS> = '' >> u/ memberikan/mengubah style css
const judul = document.getElementById('judul');
judul.style.color = 'orange';

const sectionA = document.querySelector('section#a');
sectionA.style.backgroundColor = 'lightblue';


// 3. element.setAttribute('namaAtribut','valueAtribut'); >> u/ menambahkan atribut baru atau mengganti value atribut yang sudah ada
const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('nama','fathan');

const a = document.querySelector('section#a a');
a.setAttribute('href','https://twitter.com/');


// 4. element.getAttribute('namaAtribut'); >> u/ menampilkan isi sebuah atribut elemen html
const a = document.getElementsByTagName('a')[0];
console.log(a.getAttribute('href'));


// 5. element.removeAttribute('namaAtribut'); >> u/ menghapus atribut elemen html
a.removeAttribute('href');


// 6. mengelola kelas pada tag html
const p2 = document.getElementsByClassName('p2')[0];
console.log(element.classList); >> menampilkan daftar kelas
element.classList.add('namaKelas') >> menambahkan kelas
element.classList.remove('namaKelas') >> menghapus kelas namaKelas (jika ada)
element.classList.toggle('namaKelas') >> menambahkan kelas namaKelas jika belum punya, menghapus kelas namaKelas jika sudah punya (co: toggle on/off dark mode)
element.classList.item(i) >> mengetahui nama kelas pada index ke-1, index dimulai dari 0
element.classList.contains('namaKelas') >> mengecek apakah elemen html memiliki kelas namaKelas, output: true or false
element.classList.replace('diganti','pengganti') >> mengganti kelas diganti menjadi pengganti