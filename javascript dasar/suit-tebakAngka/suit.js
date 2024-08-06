// pengulangan
var ulang = true;

while(ulang){

	// input pilihan player
	var p = prompt('pilih jari (gajah, orang, semut)');

	if (p != null){
		// generate angka random
		var com = Math.random();

		// mapping pilihan komputer
		if (com < 0.33) {
			com = 'gajah';
		} else if (com >= 0.33 && com < 0.66) {
			com = 'orang';
		} else {
			com = 'semut'
		};

		// define rules
		var hasil = '';
		if (p == com){
			hasil = 'SERI';
		} else if (p == 'gajah'){
			hasil = (com == 'orang')? 'MENANG' : 'KALAH';
		} else if (p == 'orang'){
			hasil = (com == 'gajah')? 'KALAH' : 'MENANG';
		} else if (p == 'semut'){
			hasil = (com == 'gajah')? 'MENANG' : 'KALAH';
		} else {
			hasil = 'input tidak sesuai'
		}

		// tampilkan hasil
		alert('Kamu: ' + p + ' | Komputer: ' + com + '\nKamu ' + hasil);

		// try again?
		ulang = confirm('main lagi?');
		if (ulang == false){
			alert('terima kasih sudah bermain')
		};
	} else {
		ulang = false;
		alert('permainan dibatalkan');
	};
}