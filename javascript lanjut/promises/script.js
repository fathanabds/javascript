// [contoh 1]
let ditepati = false;
const janji1 = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve('janji ditepati');
  } else {
    reject('ingkar janji');
  }
});

// janji1.then((responseResolve) => console.log('OK! : ' + responseResolve)).catch((responseReject) => console.log('NOT OK! : ' + responseReject));

// [contoh 2]
let tepati = false;
const janji2 = new Promise((resolve, reject) => {
  if (tepati) {
    setTimeout(() => {
      resolve('janji ditepati setelah beberapa waktu');
    }, 2000);
  } else {
    setTimeout(() => {
      reject('ingkar janji setelah beberapa waktu');
    }, 2000);
  }
});

console.log('mulai');
console.log(
  janji2
    .finally(() => console.log('selesai menunggu'))
    .then((responseResolve) => console.log('OK! : ' + responseResolve))
    .catch((responseReject) => console.log('NOT OK! : ' + responseReject))
);
console.log('selesai');

// [Promise.all]
const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: 'avengers',
        sutradara: 'fathan abdul',
        aktor: 'dina, annisa',
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: 'bekasi',
        temp: 26,
        kondisi: 'cerah berawan',
      },
    ]);
  }, 500);
});

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

// menjalankan beberapa Promise sekaligus
Promise.all([film, cuaca])
  // .then((response) => console.log(response))
  .then((response) => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });
