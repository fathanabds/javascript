// manipulation node


// 1. (node.appendChild) >> memasukkan elemen/node baru
// buat node baru (elemen dan teks)
const pBaru = document.createElement('p');
const txtPBaru = document.createTextNode('paragraf 3.5');

// simpan node txtPBaru ke dalam pBaru
pBaru.appendChild(txtPBaru);

// simpan node pBaru di akhir elemen parent (section A)
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

pBaru.style.backgroundColor = 'lightgreen';


// 2. (node.insertBefore) >> memasukkan elemen/node baru
// buat node baru (elemen dan teks)
const liBaru = document.createElement('li');
const txtLiBaru = document.createTextNode('item 1.5');

// simpan node txtliBaru ke dalam liBaru
liBaru.appendChild(txtLiBaru);

// simpan node liBaru di dalam elemen ul && sebelum elemen li2
const ul = document.getElementsByTagName('ul')[0];
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru,li2);

liBaru.style.backgroundColor = 'lightgreen';


// 3. (parentNode.removeChild) >> menghapus elemen/node
// panggil parentNode
// const sectionA = document.getElementById('a'); | sudah di-declare di baris 13

// panggil node yang akan dihapus
const link = sectionA.querySelector('a')

// hapus node a (link) pada elemen/parentNode section a
sectionA.removeChild(link);


// 4. (parentNode.replaceChild(nodePengganti,nodeDiganti)) >> mengganti elemen/node yang sudah ada dengan elemen/node baru
// buat node baru (elemen dan teks)
const judulBaru = document.createElement('h2');
const txtJudulBaru = document.createTextNode('Section B');

// simpan node txtliBaru ke dalam liBaru
judulBaru.appendChild(txtJudulBaru);

// panggil parent node dan node yang akan diganti
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

// replace node
sectionB.replaceChild(judulBaru,p4);

judulBaru.style.backgroundColor = 'lightgreen';
