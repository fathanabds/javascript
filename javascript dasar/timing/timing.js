// // setTimeout: menjalankan fungsi setelah n milidetik/ms
// const cobaTimeout = setTimeout(function(){
// 	console.log('halo');
// }, 3000);

// // clearTimeout: membatalkan timeOut
// const tombolT = document.querySelector('button#timeout');
// tombolT.addEventListener('click',function(){
// 	clearTimeout(cobaTimeout);
// 	console.log('timeout dibatalkan');
// });

// // setInterval: menjalankan fungsi setiap n milidetik/ms
// const cobaInterval =  setInterval(function(){
// 	console.log('world');
// }, 5000)

// // clearInterval: membatalkan interval
// const tombolI = document.querySelector('button#interval');
// tombolI.addEventListener('click',function(){
// 	clearInterval(cobaInterval);
// 	console.log('interval dibatalkan');
// });


// program hitung mundur
// tentukan tanggal akhir hitung mundur
const tanggalAkhir = new Date('Jul 30, 2024 15:15:00').getTime();
const hitungMundur = setInterval(function(){
	// dapatkan tanggal, jam, menit, dan detik saat ini
	const sekarang = new Date().getTime();

	// hitung selisih tanggalAkhir dengan tanggal sekarang (hasil default dalam milidetik/ms)
	const selisih = tanggalAkhir - sekarang;

	// ubah selisih menjadi satuan hari (selisih / (detik*menit*jam*hari))
	const hari = Math.floor(selisih / (1000*60*60*24));

	// ubah selisih menjadi satuan jam (selisih % (detik*menit*jam*hari) / (detik*menit*jam))
	const jam = Math.floor(selisih % (1000*60*60*24) / (1000*60*60));

	// ubah selisih menjadi satuan menit (selisih % (detik*menit*jam) / (detik*menit))
	const menit = Math.floor(selisih % (1000*60*60) / (1000*60));

	// ubah selisih menjadi satuan detik (selisih % (detik*menit) / detik)
	const detik = Math.floor(selisih % (1000*60) / 1000);

	// masukkan ke h1#txt
	const txt = document.querySelector('h1#txt');
	txt.innerHTML = hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + ' detik';

	if (selisih <= 0){
		clearInterval(hitungMundur);
		txt.innerHTML = 'waktu sudah habis';
	};
}, 1000);
