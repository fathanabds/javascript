class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new Error('jumlah parameter harus >= 1');
    }

    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

try {
  const sum = MathUtil.sum();
  console.log(sum);
  console.log('tidak ada error');
} catch (error) {
  console.error(`terjadi error: ${error.message}`);
} finally {
  console.log('try catch selesai');
}

console.log('kode program tetap berlanjut');
