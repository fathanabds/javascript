// membuat obj angkot
function Angkot(sopir, trayek, penumpang, kas){
	this.sopir = sopir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;

	this.pnpNaik = function pnpNaik(namaPnp){
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

	this.pnpTurun = function pnpTurun(namaPnp, bayar) {
			if (this.penumpang.length == 0){
				// tampilkan pesan error
				console.log('angkot masih kosong');
				// kembalikan isi array dan keluar dari function
				return this.penumpang;
			} else {
				// telusuri seluruh kursi dari awal
				for (i = 0; i < this.penumpang.length; i++){
					if (this.penumpang[i] == namaPnp){
						// ubah kursi menjadi kosong
						this.penumpang[i] = undefined;
						this.kas += bayar;
						return this.penumpang;
					} else if (i == this.penumpang.length-1){
						console.log(namaPnp + ' tidak ditemukan');
						return this.penumpang;
					};
				};
			};
	}
}

var angkot1 = new Angkot('fathan',['cicaheum', 'cibiru'],[],0);
var angkot2 = new Angkot('abdul',['antapani', 'ciroyom'],[],0);