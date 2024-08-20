// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos
  .filter((vid) => vid.innerHTML.includes('JAVASCRIPT LANJUTAN'))

  // ambil durasi masing-masing video
  .map((vid) => vid.dataset.duration)

  // ubah menit menjadi detik
  .map((durasi) => {
    // split 10:30 >> [10,30]
    // ubah string durasi menjadi float
    const parts = durasi.split(':').map((part) => parseFloat(part));

    // return (10 * 60) + 30 = 630 detik
    return parts[0] * 60 + parts[1];
  })

  // jumlahkan semua durasi (detik) >> total: 8292 detik
  .reduce((total, detik) => total + detik, 0);

// ubah detik menjadi jam
const jam = Math.floor(jsLanjut / 3600);

// hitung sisa durasi >> total durasi - (jam * 3600)
jsLanjut = jsLanjut - jam * 3600;

// ubah detik menjadi menit
const menit = Math.floor(jsLanjut / 60);

// hitung sisa durasi == total detik
const detik = jsLanjut - menit * 60;

// simpan di DOM
// total durasi
const totalDurasi = document.querySelector('.total-durasi');
totalDurasi.innerHTML = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

// jumlah video
jmlVid = videos.filter((vid) => vid.innerHTML.includes('JAVASCRIPT LANJUTAN')).length;

const jumlahVideo = document.querySelector('.jumlah-video');
jumlahVideo.innerHTML = `${jmlVid} Video`;
