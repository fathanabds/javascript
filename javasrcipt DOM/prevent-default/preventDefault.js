const close = document.querySelectorAll('.close');
close.forEach(function(el){
	// console.log(el);
	el.addEventListener('click',function(ev){
		// console.log(e);
		ev.target.parentElement.style.display = 'none';
		// agar page tidak melakukan refresh (perilaku default tag a) ketika x bertipe anchor(a) diklik
		ev.preventDefault();
		// agar alert ok tidak muncul saat x diklik
		ev.stopPropagation();
	});
});


// akan terjadi event bubbling di mana alert akan muncul saat tombol x diklik, karena x merupakan bagian dari card
const cards = document.querySelectorAll('.card');
cards.forEach(function(card){
	card.addEventListener('click',function(){
		alert('ok')
	});
});