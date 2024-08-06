// function expression: function namafungsi(opsional) (parameter(opsional)) {body function}
var myFunc = function(){
	alert('hello world')
}

// tipe data dalam array boleh berbeda, function boleh jadi value array
var myArr = [1, 'fathan', true, [1,2,3,4], myFunc]

// 1. menampilkan nilai array multidimensi/bersarang
// console.log(myArr[3][1]);

// 2. menampilkan seluruh isi array dalam bentuk string
// console.log(myArr.join(' - '));

// 3. push & pop: add & delete value terakhir array
myArr.push('abdul', 'shodiq', [5,6,7,8])
console.log(myArr.join(' - '));

// myArr.pop();
// console.log(myArr.join(' - '));

// 4. unshift & shift: add & delete value pertama array
// myArr.unshift('abdul', 'shodiq');
// console.log(myArr.join(' - '));

// myArr.shift();
// console.log(myArr.join(' - '));

// 5. splice: menghapus & menambahkan value di/ke index tertentu di array
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, dst)

// var arr = ['fathan', 'abdul', 'shodiq'];
// menambahkan value mulai index ke-2, menghapus 0 value
// arr.splice(2, 0, 'dina', 'fadillah');

// menambahkan value mulai index ke-1, menghapus 2 value (index 1 dan 2)
// arr.splice(1, 2, 'dina', 'salma');

// console.log(arr.join(' - '));

// 6. slice: membuat array yang baru dengan elemen array yg sudah ada, array yg lama masih ttp bisa diakses utuh
// slice(indexAwal,indexAkhir+1)
// var arr = ['fathan', 'abdul', 'shodiq', 'dina', 'fadillah'];
// var arr2 = arr.slice(2,4);
// console.log(arr2.join(' - '));
// console.log(arr.join(' - '));

// 7. forEach: melakukan looping pada array
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['fathan', 'abdul', 'shodiq'];

// angka.forEach(function(e){
// 	console.log(e);
// });

// nama.forEach(function(e,i){
// 	console.log('mahasiswa ke-' + (i+1) + ' adalah ' + e);
// })

// 8. map: sama seperti forEach, tetapi mengembalikannya dalam bentuk array
// var angka = [1,3,2,5,4,7,6];
// var angka2 = angka.map(function(e){
// 	return e*2;
// });

// console.log(angka2);

// 9. sort: mengurutkan isi array
// var angka = [1,3,2,5,4,7,6,20,10];
// console.log(angka.join(' - '));
// // note: function agar sort tidak membandingkan berdasarkan karakter pertama
// angka.sort(function(a,b){
// 	return a-b;
// });
// console.log(angka.join(' - '));

// 10. filter: mencari nilai pada array dan mengembalikannya dalam bentuk array
// var angka = [1,3,2,5,4,7,6,20,10,20,7,6];
// var angka2 = angka.filter(function(e){
// 	return e > 5;
// });
// console.log(angka2);

// 11. find: mencari nilai spesifik pada array, jika terdapat >1 nilai yg sama, ia hanya akan mendapatkan nilai pertama yg ditemuinya | find tidak mengembalikan bentuk array
// var angka = [1,3,2,5,4,7,6,20,10,20,7,6];
// var angka2 = angka.find(function(e){
// 	return e > 5;
// });
// console.log(angka2);