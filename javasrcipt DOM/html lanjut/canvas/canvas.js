// dapatkan myCanvas
const myCanvas = document.getElementById('myCanvas');

// set width dan height canvas sebesar window
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

// panggil canvas API u/ 2d, tampung di const ctx
const ctx = myCanvas.getContext('2d');

// // buat rectangle tanpa style
// // fillRect(posisiX, posisiY, width, height)
// ctx.fillRect(25,25,100,100);

// // warna rectangle
// ctx.fillStyle = 'pink';
// // warna border rectangle
// ctx.strokeStyle = '#333';
// // tebal border rectangle
// ctx.lineWidth = 5;

// // buat rectangle (posisiX, posisiY, width, height)
// ctx.rect(50, 50, 300, 300);
// ctx.fill();
// ctx.stroke();

// // buat circle
// // Rect(posisiX, posisiY, radius/jari-jari, sudutAwal, sudutAkhir)
// // note: posisiX dan posisiY berada di tengah circle
// ctx.fillStyle = 'lightgreen';
// ctx.beginPath();
// ctx.arc(550, 200, 150, 0, 2 * Math.PI);
// ctx.fill();
// ctx.stroke();

// // buat path
// ctx.fillStyle = 'lightblue';
// ctx.beginPath();
// // tentukan titik awal
// ctx.moveTo(900,50);
// // tarik garis ke koordinat (X,Y)
// ctx.lineTo(1050,350);
// ctx.lineTo(750,350);
// ctx.lineTo(900,50);
// // jika garis yang dibuat tidak menutup, harus diberikan closePath()
// // ctx.closePath();
// ctx.fill();
// ctx.stroke();


// buat animasi
let sumbuX = 150;
let sumbuY = 150;
let radius = 75;

// varibel u/ menentukan besar perpindahan thdp sumbu X,Y
let speedX = 4;
let speedY = 4;

function draw() {
    window.requestAnimationFrame(draw);

    // untuk menghapus gambar di posisi sebelumnya
    ctx.clearRect(0,0,innerWidth,innerHeight);

    ctx.fillStyle = 'lightgreen';
    ctx.beginPath();
    ctx.arc(sumbuX, sumbuY, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    if (sumbuX + radius > innerWidth || sumbuX - radius < 0){
        speedX = -speedX;
    };

    if (sumbuY + radius > innerHeight || sumbuY - radius < 0) {
        speedY = -speedY;
    };
    
    // increment sumbu agar koordinat berpindah
    sumbuX += speedX;
    sumbuY += speedY;
};

draw();
