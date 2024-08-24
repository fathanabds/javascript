// [REST PARAMETER]

function myFunc(...myArgs) {
  // me-return array myArgs
  return myArgs;

  // // arguments adalah var default pada fn yang bertipe OBJECT dan bertugas u/ menangkap seluruh arguments yang dikirim ke fn:
  // return arguments;

  // // mengubah OBJECT arguments menjadi array:
  // // cara 1:
  // return Array.from(arguments);
  // // cara 2:
  // return [...arguments];
}

console.log(myFunc(1, 2, 3, 4, 5));

// contoh kasus: jumlahkan
function jumlahkan(...args) {
  let total = 0;

  // // menggunakan for..of
  // for (const a of args) {
  //   total += a;
  // }
  // return total;

  // menggunakan reduce
  return args.reduce((total, el) => total + el, 0);
}

console.log(jumlahkan(1, 2, 3, 4, 5));

// [array destructuring + rest parameter]
const kelompok = ['teguh', 'ethan', 'restu', 'adit', 'annisa'];
const [ketua, wakil, ...anggota] = kelompok;
console.log(`ketua: ${ketua}`);
console.log(`wakil: ${wakil}`);
console.log(`anggota: ${anggota}`);

// [object destructuring + rest parameter]
const team = {
  pm: `teguh`,
  fE1: `ethan`,
  fE2: `dina`,
  bE: 'adit',
  uX: 'alif',
  devOps: 'syifa',
};

const { pm, ...member } = team;
console.log(`pm: ${pm}`);
console.log(member);

// [filtering]
function filterBy(tipe, ...values) {
  // // menggunakan for
  // for (let i = 0; i < values.length; i++) {
  //   if (tipe == typeof values[i]) {
  //     console.log(values[i]);
  //   }
  // }

  // // menggunakan Array.filter()
  // return values.filter((v) => typeof v === tipe);

  // non-arrow function
  return values.filter(function (v) {
    return typeof v === tipe;
  });
}

console.log(filterBy('number', 1, 2, 'fathan', false, 10, true, 'ethan'));
