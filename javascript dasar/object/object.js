// obj literal
var warga1 = {
	nama : 'fathan',
	usia : 25,
	pendidikan : 'S1',
	alamat : {
		jalan : 'jalan kalimaya VII',
		cluster : 'limonia',
		blok : 'blok l9 nomor 4'
	}
};

var warga2 = {
	nama : 'budi',
	usia : 62,
	pendidikan : 'S3',
	alamat : {
		jalan : 'jalan kalimaya IX',
		cluster : 'limonia',
		blok : 'blok l5 nomor 10'
	}
};

// function declartion
function buatObjWarga(nama, usia, pendidikan, alamat){
	var warga = {};
	warga.nama = nama;
	warga.usia = usia;
	warga.pendidikan = pendidikan;
	warga.alamat = alamat;
	return warga;
};

var warga3 = buatObjWarga('dartono',52,'S2','blok l3 nomor 6');

var warga4 = buatObjWarga('santo',15,'SD','blok l7 nomor 1');

// constructor
function Warga(nama, usia, pendidikan, alamat){
	this.nama = nama;
	this.usia = usia;
	this.pendidikan = pendidikan;
	this.alamat = alamat;
}

var warga5 = new Warga('naryo',5,'TK','blok l1 nomor 8');