var angka = prompt('masukkan sebuah angka')

if (angka % 2 === 0){
	alert(angka + ' adalah genap');
} else if (angka % 2 === 1){
	alert(angka + ' adalah ganjil');
} else{
	alert(angka + ' bukan sebuah angka');
}