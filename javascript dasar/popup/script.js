var ulang = true;
var konfirmasi;

while(ulang){
	// alert: pop up peringatan
	alert('nama kamu siapa?');

	// /prompt: pop up inputan
	var nama = prompt('nama saya');

	// confirm: pop up konfirmasi (muncul if prompt nama diklik OK, apabila diklik CANCEL maka akan--
	// kembali ke lopping awal)
	if (nama != null){
		var konfirmasi = confirm('nama kamu ' + nama + ' ?');
	} else{
		ulang = true;
	};

	// !kalau mau gunakan if sebaris kayak gini, deklarasi variable harus di luar if!
	// !kalau deklarasi variable mau di dalam if, harus ditulis dengan format panjang di atas!
	// (nama != null)? konfirmasi = confirm('nama kamu ' + nama + ' ?') : ulang = true;

	// pengkondisian/if
	(konfirmasi === true)? ulang = false : ulang = true;
}

alert('halo ' + nama);