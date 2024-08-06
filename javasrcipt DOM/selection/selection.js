// dom selection

// 1. document.getElementById('') >> elemen
// const title = document.getElementById('judul');
// mengubah warna tulisan
// title.style.color = 'red';
// background-color ditulis menjadi backgroundColor (camel case) pada JS
// title.style.backgroundColor = '#ccc';
// mengubah text
// title.innerHTML = 'Hello Fathan';


// 2. document.getElementByTagName('') >> HTML Collection
// const p = document.getElementsByTagName('p');
// memberikan warna u/ seluruh p
// for (let i = 0; i < p.length; i++){
	// p[i].style.backgroundColor = 'lightblue';
// };
// mengubah ukuran font untuk salah satu p
// p[2].style.fontSize = '20px';

// meskipun misalnya hanya ada 1 elemen, getElementByTagName tetap me-return HTML Collection
// untuk membuat 1 elemen tsb menjadi variabel, tambahkan [0]
// const h1 = document.getElementsByTagName('h1')[0];
// mengubah ukuran font
// h1.style.fontSize = '50px';


// 3. document.getElementByClassName('') >> HTML Collection
// meskipun misalnya hanya ada 1 elemen, getElementByClassName tetap me-return HTML Collection
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'ini diubah dari JS';


// 4. document.querySelector('') >> element | () diisi dengan selector css
// select p4 pada section id=b
// const p4 = document.querySelector('section#b p');
// mengubah warna tulisan
// p4.style.color = 'green';

// select li ke-2 pada section id=b
// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// meskipun misalnya ada banyak elemen dengan kriteria yang dicari, querySelector tetap me-return hanya 1 elemen (elemen yg pertama ditemui)
// const p = document.querySelector('p');


// 5. document.querySelector('') >> Node List, () diisi dengan selector css | digunakan untuk melakukan selection seluruh elemen/node tertentu
// const p = document.querySelectorAll('p');
// mengubah elemen yang ada di dalam node list
// p[0].innerHTML = 'ini diubah dari JS';
// mengubah seluruh elemen yang ada di dalam node list, menggunakan looping
// for (let i = 0; i < p.length; i++){
// 	p[i].style.backgroundColor = 'lightblue';
// };


// 6. mengubah root node dari document ke bagian tertentu (section b) u/ mempersempit pencarian
const sectionb = document.getElementById('b');
const p4 = sectionb.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';