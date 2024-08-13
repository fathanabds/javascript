// [execution context, hoisting, & scope]

// contoh 1
console.log(umur);
var umur = 25;

// contoh 2
console.log(sayHello());

var nama = 'abdul';
var age = 25;

function sayHello() {
  return `Halo, nama saya ${nama} saya berusia ${age} tahun`;
}

// 1. creation phase pada global context
// a. set semua var menjadi = undefined >> [hoisting]
// b. set semua function menjadi = function itu sendiri >> [hoisting]
// c. set window = global object
// d. set this = window

// 2. execution phase: dieksekusi dari baris atas ke baris bawah

// note: function membuat local execution contextnya sendiri >> creation dan execution phase
