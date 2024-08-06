// ambil container u/ diberikan event listener
const container = document.querySelector('.container');

// ambil thumb u/ dilakukan remove/reset kelas opacity
const thumbs = document.querySelectorAll('.thumb');

// berikan event listener pada container
container.addEventListener('click', function(ev){
	// jika thumb diklik, jalankan perintah berikut:
	if (ev.target.className == 'thumb'){
		// mengambil bigImg menggunakan traversal dan mengganti atribut src-nya dengan src thumb yang diklik
		ev.target.parentElement.previousElementSibling.src = ev.target.src;
		// memberikan kelas 'fade' pada bigImg u/ menjalankan animasi fade
		ev.target.parentElement.previousElementSibling.classList.add('fade');

		// menghapus kembali kelas 'fade' pada bigImg setelah beberapa saat, agar animasi fade bisa dijalankan kembali u/ klik selanjutnya
		setTimeout(function(){
			ev.target.parentElement.previousElementSibling.classList.remove('fade');
		}, 500);

		// hapus kelas 'active' pada semua thumb (reset 'active')
		thumbs.forEach(function(thumb){
			thumb.classList.remove('active');
		});

		// berikan kelas 'active' pada thumb yang diklik
		ev.target.classList.add('active');
	};
});