// tagged templates
const nama = 'fathan abdul';
const umur = 25;
const email = 'fathan@gmail.com';

function coba(strings, ...values) {
  // [cara 1: forEach]
  // let result = '';
  // strings.forEach((str, i) => (result += `${str}${values[i] || ''}`));
  // return result;

  // [cara 2: reduce]
  return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
}

const str = coba`halo, nama saya ${nama}, usia saya ${umur} tahun.`;
console.log(str);

// [contoh kasus: highlight]
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const hl = highlight`halo, nama saya ${nama}, saya berusia ${umur} tahun, email saya adalah ${email}`;

document.body.innerHTML = hl;
