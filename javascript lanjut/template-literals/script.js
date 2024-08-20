// 1. HTML fragments
const mhs = {
  nama: 'fathan abdul',
  umur: 25,
  nim: '1301170211',
  email: 'fathan@gmail.com',
};

const elM = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nrp">${mhs.nim}</span>
</div>`;

document.body.innerHTML = elM;

// 2. looping
const dosen = [
  { nama: 'dina salma', email: 'dina@gmail.com' },
  { nama: 'ethan mahesa', email: 'ethan@gmail.com' },
  { nama: 'teguh muflih', email: 'teguh@gmail.com' },
];

const elD = `<div class="dosen">
${dosen
  .map(
    (d) =>
      `<ul>
    <li>${d.nama}</li>
    <li>${d.email}</li>
  </ul>`
  )
  .join('')}
</div>`;

document.body.innerHTML = elD;

// 3. conditional, ternary
const lagu = {
  judul: 'kau adalah',
  penyanyi: 'isyana sarasvati',
  feat: 'rayi putra',
};

// const lagu = {
//   judul: 'tetap dalam jiwa',
//   penyanyi: 'isyana sarasvati',
// };

const elL = `<div class="lagu">
<ul>
<li>${lagu.penyanyi}</li>
<li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
</ul>
</div>`;

document.body.innerHTML = elL;

// 4. Nested (HTML Fragments Bersarang)
const siswa = {
  nama: 'annisa nisrina',
  semester: 5,
  mataPelajaran: ['fisika', 'biologi', 'kimia', 'matematika'],
};

function cetakMataPelajaran(mataPelajaran) {
  return `<ol>
      ${mataPelajaran.map((mp) => `<li>${mp}</li>`).join('')}
    </ol>`;
}

const elS = `<div>
    <h2>${siswa.nama}</h2>
    <span class="semester">Semester: ${siswa.semester}</span>
    <h4>mata pelajaran:</h4>${cetakMataPelajaran(siswa.mataPelajaran)}
  </div>`;

document.body.innerHTML = elS;
