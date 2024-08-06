var ulang = true;

// perulangan permainan
while(ulang){
	// jumlah kesempatan/nyawa
	var kesempatan = prompt('mau dikasih berapa kesempatan nebak?');
	if (kesempatan != null){
		// player input angka tebakan
		var p = prompt('tebak angka dari 1--10 \nkamu punya ' + kesempatan +'x kesempatan');

		if (p != null) {
			// komputer generate angka random
			var com = Math.floor(Math.random() * 10) + 1;
			console.log(com);

			// cek angka tebakan ke 1 sampai tebakan terakhir-1
			for (var i = 1; i < kesempatan; i++){
				if (p == com){
					alert('hebat! angkamu benar, angka: ' + com);
					i = kesempatan;
				} else if (p < com){
					p = prompt('(kesempatan ke-' + i +') ' + p + ' terlalu rendah, input angka baru');
				} else if (p > com){
					p = prompt('(kesempatan ke-' + i +') ' + p + ' terlalu tinggi, input angka baru');
				};
			};

			//cek angka tebakan kesempatan terakhir
			if (i == kesempatan){
				if (p == com){
					alert('hebat! angkamu benar, angka: ' + com);
				} else {
					alert('tebakanmu salah semua, angka: ' + com);
				};
			};

			// konfirmasi main lagi
			ulang = confirm('main lagi?');
			if (ulang == false){
				alert('terima kasih sudah bermain');
			}
		} else {
			ulang = false;
			alert('permainan dibatalkan');
		};
	} else{
		ulang = false;
		alert('permainan dibatalkan');
	}
};