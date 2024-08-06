// // 1. event handle (inline HTML) ubah warna bg p2 ketika diklik 
// // panggil p2
// const p2 = document.querySelector('.p2');

// // buat fungsi ubah warna P2 >> add event handler pada HTML
// function ubahWarnaP2(){
// 	p2.style.backgroundColor = 'lightblue'
// };


// // 2. event handler (element.method) ubah warna bg p3 ketika diklik 
// // panggil p3
// const p3 = document.querySelector('.p3');

// // buat fungsi ubah warna P3 >> add event handler pada HTML
// function ubahWarnaP3(){
// 	p3.style.backgroundColor = 'lightblue'
// };

// // buat element.method
// p3.onclick = ubahWarnaP3;


// // 3. (addEventListener) tambahkan li baru ketika p4 diklik 
// // panggil p4
// const p4 = document.querySelector('section#b p');

// // buat addEventListener('event',aksi)
// p4.addEventListener('click',function(){
// 	// buat node baru
// 	const liBaru = document.createElement('li');
// 	const txtLiBaru = document.createTextNode('item baru');

// 	// simpan node txtliBaru ke dalam liBaru
// 	liBaru.appendChild(txtLiBaru);

// 	// simpan node liBaru di akhir elemen parent (ul)
// 	const ul = document.querySelector('section#b ul');
// 	ul.appendChild(liBaru);
// });


// jika terdapat 2 atau lebih aksi berbeda untuk 1 event yang sama, event handle hanya akan menjalankan aksi yang paling akhir
// panggil p3
const p3 = document.querySelector('.p3');

// buat fungsi ubah warna P3 >> add event handler pada HTML
function ubahWarnaP3(){
	p3.style.backgroundColor = 'lightblue'
};

function ubahWarnaP3(){
	p3.style.color = 'red'
};

// buat element.method
p3.onclick = ubahWarnaP3;


// jika terdapat 2 atau lebih aksi berbeda untuk 1 event yang sama, event listener akan menjalankan seluruh aksi tsb
// // panggil p2
const p2 = document.querySelector('.p2');

// function ubahWarna(){
// 	p2.style.backgroundColor = 'lightblue'
// };

// p2.addEventListener('click',ubahWarna);

p2.addEventListener('click',function(){
	p2.style.backgroundColor = 'lightblue'
});

p2.addEventListener('click',function(){
	p2.style.color = 'red'
});