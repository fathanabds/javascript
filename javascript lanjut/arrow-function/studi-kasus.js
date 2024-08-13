const box = document.querySelector('.box');
box.addEventListener('click', function () {
  // [cara 1: tanpa menggunakan variable satu & dua]

  // if (this.classList.contains('size')) {
  //   this.classList.toggle('caption');
  //   setTimeout(() => {
  //     this.classList.toggle('size');
  //   }, 600);
  // }

  // if (!this.classList.contains('size')) {
  //   this.classList.toggle('size');
  //   setTimeout(() => {
  //     this.classList.toggle('caption');
  //   }, 600);
  // }

  // [cara 2: menggunakan tukar variable]
  let satu = 'size';
  let dua = 'caption';

  if (this.classList.contains(satu)) {
    // menukar isi variable apabila div sudah memiliki class satu/size
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
