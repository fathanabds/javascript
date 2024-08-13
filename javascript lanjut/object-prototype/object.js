// [cara membuat object pada javascript]

// 1. object literal
// PROBLEM: tidak efektif u/ jumlah object yg banyak
let mahasiswa1 = {
  nama: 'fathan',
  energi: 10,
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`halo ${this.nama}, energi kamu bertambah sebanyak ${porsi}`);
  },
};

let mahasiswa2 = {
  nama: 'abdul',
  energi: 20,
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`halo ${this.nama}, energi kamu bertambah sebanyak ${porsi}`);
  },
};

// 2. function declaration
// [versi 1]
// PROBLEM: method di dalam object disimpan sebanyak jumlah object yg dibuat >> pemborosan memori
function Mahasiswa(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  mahasiswa.makan = function (porsi) {
    this.energi += porsi;
    console.log(`halo ${this.nama}, energi kamu bertambah sebanyak ${porsi}`);
  };

  mahasiswa.main = function (jam) {
    this.energi -= jam;
    console.log(`halo ${this.nama}, energi kamu berkurang sebanyak ${jam}`);
  };

  return mahasiswa;
}

let dina = Mahasiswa('dina', 10);
let fadillah = Mahasiswa('fadillah', 20);

// [versi 2]
// agar method makan dan main hanya disimpan 1x di memori
// PROBLEM: jika method baru ditambahkan pada methodDosen, maka perlu juga ditambahkan di dalam fungsi Dosen >> tidak efesien karena perlu mengelola 2 object
const methodDosen = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`halo ${this.nama}, energi kamu bertambah sebanyak ${porsi}`);
  },

  main: function (jam) {
    this.energi -= jam;
    console.log(`halo ${this.nama}, energi kamu berkurang sebanyak ${jam}`);
  },

  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`halo ${this.nama}, energi kamu bertambah sebanyak ${jam * 2}`);
  },
};

function Dosen(nama, energi) {
  let dosen = {};
  dosen.nama = nama;
  dosen.energi = energi;
  dosen.makan = methodDosen.makan;
  dosen.main = methodDosen.main;
  dosen.tidur = methodDosen.tidur;

  return dosen;
}

let ethan = Dosen('ethan', 10);
let mahesa = Dosen('mahesa', 20);

// 3. constructor declaration
// keyword new
function Warga(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`halo ${this.nama}, energi kamu bertambah sebanyak ${porsi}`);
  };

  this.main = function (jam) {
    this.energi -= jam;
    console.log(`halo ${this.nama}, energi kamu berkurang sebanyak ${jam}`);
  };
}

let teguh = new Warga('teguh', 10);
let muflih = new Warga('muflih', 20);

// 4. object.create
// mengatasi problem pada function declaration versi 2
const methodStaf = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`halo ${this.nama}, energi kamu bertambah sebanyak ${porsi}`);
  },

  main: function (jam) {
    this.energi -= jam;
    console.log(`halo ${this.nama}, energi kamu berkurang sebanyak ${jam}`);
  },

  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`halo ${this.nama}, energi kamu bertambah sebanyak ${jam * 2}`);
  },
};

function Staf(nama, energi) {
  let staf = Object.create(methodStaf);
  staf.nama = nama;
  staf.energi = energi;

  return staf;
}

let annisa = Staf('annisa', 10);
let nisrina = Staf('nisrina', 20);

// 5. prototype
function Direksi(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}

Direksi.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `halo ${this.nama}, energi kamu bertambah sebanyak ${porsi}`;
};

Direksi.prototype.main = function (jam) {
  this.energi -= jam;
  return `halo ${this.nama}, energi kamu berkurang sebanyak ${jam}`;
};

Direksi.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  return `halo ${this.nama}, energi kamu bertambah sebanyak ${jam * 2}`;
};

let adit = new Direksi('adit', 10);

// 6. versi class
class Manajer {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `halo ${this.nama}, energi kamu bertambah sebanyak ${porsi}`;
  }

  main(jam) {
    this.energi -= jam;
    return `halo ${this.nama}, energi kamu berkurang sebanyak ${jam}`;
  }

  tidur(jam) {
    this.energi += jam * 2;
    return `halo ${this.nama}, energi kamu bertambah sebanyak ${jam * 2}`;
  }
}

let damanik = new Manajer('damanik', 10);
let fahri = new Manajer('fahri', 10);
