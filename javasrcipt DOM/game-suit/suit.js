// fungsi u/ generate pilihan komputer
function getPilKom(){
	// dapatkan kelas img-komputer
	const com = document.querySelector('.img-komputer');

	// bangkitkan bilangan random 0--1
	const comp = Math.random();
	// mapping pilihan komputer
	if (comp < 0.33) {
		// ubah img-komputer sesuai dengan pilihan komputer
		com.setAttribute('src','img/gajah.png');
		// set pilihan komputer
		return 'gajah';
	};
	if (comp >= 0.33 && comp < 0.66) {
		com.setAttribute('src','img/orang.png');
		return 'orang';
	};
	com.setAttribute('src','img/semut.png');
	return 'semut';
};

// fungsi untuk mendapatkan hasil suit w/ parameter pilihan komputer & player
function getHasil(comp, p){
	// dapatkan kelas info (penampung hasil di HTML)
	const info = document.querySelector('.info');

	// definisikan rules suit
	if (p == comp) return info.innerHTML = 'SERI';
	if (p == 'gajah') return (comp == 'orang')? info.innerHTML = 'MENANG' : info.innerHTML = 'KALAH';
	if (p == 'orang') return (comp == 'gajah')? info.innerHTML = 'KALAH' : info.innerHTML = 'MENANG';
	if (p == 'semut') return (comp == 'gajah')? info.innerHTML = 'MENANG' : info.innerHTML = 'KALAH';
};

// fungsi untuk membuat animasi komputer memilih gambar
function putarImg(){
	// dapatkan img-komputer
	const com = document.querySelector('.img-komputer');

	// buat array berisi gambar yang bisa dipilih komputer
	const gambar = ['gajah','orang','semut'];

	// variable u/ pengulangan array gambar di dalam interval
	let i = 0;

	// dapatkan waktu saat ini sebagai waktu mulai putar gambar
	const waktuMulai = new Date().getTime();

	// lakukan fungsi berikut dalam interval tertentu
	setInterval(function(){
		// jika selisih waktu saat ini & waktu mulai >1 detik (1000 ms), keluar dari fungsi putarImg
		if (new Date().getTime() - waktuMulai > 1000) return;
		// set gambar sesuai dengan index saat ini (antara gajah, orang, semut)
		com.setAttribute('src','img/' + gambar[i++] + '.png');
		// u/ mengembalikan index ke = 0, sehingga pengulangan gambar akan berjalan hanya dari 0--2
		if (i == gambar.length) i = 0;
	}, 100);
};

// definisikan varibel u/ komputer menang, player menang, dan seri
let winKom = 0;
let winP = 0;
let draw = 0;

// dapatkan elemen HTML yang menampilkan skornya
const skorKomputer = document.querySelector('.skorKomputer');
const skorPlayer = document.querySelector('.skorPlayer');
const seri = document.querySelector('.seri');

// fungsi untuk menghitung skor
function skoring(hasil){
	if (hasil == 'SERI') draw += 1;
	if (hasil == 'KALAH') winKom += 1;
	if (hasil == 'MENANG') winP += 1;
	skorKomputer.innerHTML = 'Komputer: ' + winKom;
	skorPlayer.innerHTML = 'Player: ' + winP;
	seri.innerHTML = 'Seri: ' + draw;
};

const pilPlayer = document.querySelectorAll('li img');
pilPlayer.forEach(function(pil){
	pil.addEventListener('click',function(){
		// jalankan fungsi putarImg
		putarImg();

		// tunggu 1 (1000 ms) detik u/ menjalankan fungsi putar, kemudian dapatkan hasil suit
		setTimeout(function(){
			// jalankan fungsi getPilKom, getHasil, dan tampung di variabel hasil u/ dikirim ke fungsi skoring
			let hasil = getHasil(getPilKom(),pil.className);
			skoring(hasil);
		}, 1000);
	});
});

// const gajah = document.querySelector('.gajah');
// gajah.addEventListener('click',function(){
// 	getHasil(getPilKom(),gajah.className);
// });

// const orang = document.querySelector('.orang');
// orang.addEventListener('click',function(){
// 	getHasil(getPilKom(),orang.className);
// });

// const semut = document.querySelector('.semut');
// semut.addEventListener('click',function(){
// 	getHasil(getPilKom(),semut.className);
// });