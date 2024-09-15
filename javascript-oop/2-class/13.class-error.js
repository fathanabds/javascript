class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}

class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new ValidationError('jumlah parameter harus >= 1', 'numbers');
    }

    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

try {
  console.log(MathUtil.sum());
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(`validation error || field: ${error.field}, error: ${error.message}`);
  } else {
    console.error('error: ' + error.message);
  }
} finally {
  console.log('try catch selesai');
}
