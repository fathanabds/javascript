var item = prompt('masukkan nama makanan/minuman (daging, sayur, jamu, burger, softdrink)');

switch(item){
case 'daging':
case 'sayur':
case 'jamu':
	alert('makanan/minuman sehat');
	break;
case 'burger':
case 'softdrink':
	alert('makanan/minuman tidak sehat');
	break;
default:
	alert('makanan/minuman tidak ditemukan');
	break;
}