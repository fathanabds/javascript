// memberikan event pada tombol Ubah Warna
// get tombol Ubah Warna
const tUbahWarna = document.getElementById('tUbahWarna');

// addEventListener
tUbahWarna.addEventListener('click',function(){
	// khusus body tidak perlu ditangkap menggunakan DOM selection
	document.body.classList.toggle('biru-muda');
});


// buat tombol Warna Random
// buat node baru (elemen dan teks)
const tAcakWarna = document.createElement('button');
const txtAcakWarna = document.createTextNode('Acak Warna');

// simpan node txtAcakWarna ke dalam tWarnaRandom
tAcakWarna.appendChild(txtAcakWarna);

// tambahkan atribut button
tAcakWarna.setAttribute('type','button');

// simpan node txtAcakWarna di akhir elemen parent (body)
tUbahWarna.after(tAcakWarna);

// addEventListener
tAcakWarna.addEventListener('click',function(){
	// generate integer random 1--255 sebagai value RGB
	const r = Math.round(Math.random() * 255 + 0);
	const g = Math.round(Math.random() * 255 + 0);
	const b = Math.round(Math.random() * 255 + 0);

	document.body.style.backgroundColor = 'rgb(' + r + ',' + g +',' + b + ')';
});


// memberikan event pada slider merah
// get slider merah, hijau, biru
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

// addEventListener sMerah
sMerah.addEventListener('input', function(){
	// mendapatkan nilai RGB
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	// mengolah RGB
	document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

// addEventListener sHijau
sHijau.addEventListener('input', function(){
	// mendapatkan nilai RGB
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	// mengolah RGB
	document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

// addEventListener sBiru
sBiru.addEventListener('input', function(){
	// mendapatkan nilai RGB
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	// mengolah RGB
	document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});


// mengubah warna berdasarkan posisi kursor
document.body.addEventListener('mousemove',function(event){
	// menghitung posisi kursor (sumbu X)
	const xPos = Math.round((event.clientX/window.innerWidth)*255);
	// menghitung posisi kursor (sumbu Y)
	const yPos = Math.round((event.clientY/window.innerHeight)*255);
	// mengolah RGB
	document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',100)';
});