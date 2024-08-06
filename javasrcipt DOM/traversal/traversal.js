// // event listener
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click',function(){
// 	card.style.display = 'none';
// });


// contoh DOM traversal (parentElement)
const close = document.querySelectorAll('.close');

close.forEach(function(el){
	// console.log(el);
	el.addEventListener('click',function(ev){
		// console.log(e);
		ev.target.parentElement.style.display = 'none';
	});
});


// // berbagai DOM traversal
// const nama = document.querySelector('.nama');
// // parentElement >> elemen
// console.log(nama.parentElement);

// // grandParentElement >> elemen
// console.log(nama.parentElement.parentElement);

// // nextSibling >> next sibling (node)
// console.log(nama.nextSibling);

// // nextElementSibling >> next sibling (elemen)
// console.log(nama.nextElementSibling);

// // previousSibling >> previous sibling (node)
// console.log(nama.previousSibling);

// // previousElementSibling >> previous sibling (elemen)
// console.log(nama.previousElementSibling);
