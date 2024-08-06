var penumpang = [];

var tambahPenumpang = function(namaPenumpang, penumpang){
	// jika angkot kosong
	if (penumpang.length == 0){
		// tambah penumpang di awal array
		penumpang.push(namaPenumpang);
		// kembalikan isi array dan keluar dari function
		return penumpang;
	} else {
		// telusuri seluruh kursi dari awal
		for (var i = 0; i < penumpang.length; i++){
			if (penumpang[i] == undefined){
				// telusuri kursi
				while(i < penumpang.length){
					if (penumpang[i] == namaPenumpang){
						console.log(namaPenumpang + ' sudah ada di dalam');
						// kembalikan isi array dan keluar dari function
						return penumpang;
					} else {
						// tidak ditemukan nama pnp, isi kursi undefined dengan pnp tsb
						penumpang[i] = namaPenumpang;
						// kembalikan isi array dan keluar dari function
						return penumpang;
					}
				i++;
				};
			} else if (penumpang[i] == namaPenumpang){
				// tampilkan pesan error
				console.log(namaPenumpang + ' sudah ada di dalam');
				// kembalikan isi array dan keluar dari function
				return penumpang;
			} else if (i == penumpang.length-1) {
				// tambah pnp di akhir array
				penumpang.push(namaPenumpang);
				// kembalikan isi array dan keluar dari function
				return penumpang;
			};
		};
	};
};

var hapusPenumpang = function(namaPenumpang, penumpang){
	// jika angkot kosong
	if (penumpang.length == 0){
		// tampilkan pesan error
		console.log('angkot masih kosong');
		// kembalikan isi array dan keluar dari function
		return penumpang;
	} else {
		// telusuri seluruh kursi dari awal
		for (i = 0; i < penumpang.length; i++){
			if (penumpang[i] == namaPenumpang){
				// ubah kursi menjadi kosong
				penumpang[i] = undefined;
				return penumpang;
			} else if (i == penumpang.length-1){
				console.log(namaPenumpang + ' tidak ditemukan');
				return penumpang;
			};
		};
	};
};