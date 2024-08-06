// const close = document.querySelectorAll('.close');
// close.forEach(function(el){
// 	// console.log(el);
// 	el.addEventListener('click',function(ev){
// 		// console.log(e);
// 		ev.target.parentElement.style.display = 'none';
// 		// agar alert ok tidak muncul saat x diklik
// 		ev.stopPropagation();
// 	});
// });


const container = document.querySelector('.container');
container.addEventListener('click', function(ev){
	if (ev.target.className == 'close'){
		ev.target.parentElement.style.display = 'none';
		ev.preventDefault();
	}
});


// // akan terjadi event bubbling di mana alert akan muncul saat tombol x diklik, karena x merupakan bagian dari card
// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card){
// 	card.addEventListener('click',function(){
// 		alert('ok');
// 	});
// });