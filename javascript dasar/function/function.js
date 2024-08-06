function jumlahVolumeDuaKubus(a,b){
	return a * a * a + b * b * b;
}

function tambah(a,b) {
	return a + b;
}

function kali(a,b) {
	return a * b;
}

function tambah2(){
	var hasil = 0;
	for (i = 0; i < arguments.length; i++){
		hasil += arguments[i];
	}
	return hasil;
}

var x = prompt('masukkan panjang sisi kubus 1');
var y = prompt('masukkan panjang sisi kubus 2');
var a = prompt('masukkan panjang sisi kubus 1');
var b = prompt('masukkan panjang sisi kubus 2');
console.log(jumlahVolumeDuaKubus(x,y));
console.log(jumlahVolumeDuaKubus(a,b));
console.log(jumlahVolumeDuaKubus(2,1));

var hasil = kali(tambah(1,2), tambah (3,4));
console.log(hasil);

var coba = tambah2(1,2,3,4);
console.log(coba);