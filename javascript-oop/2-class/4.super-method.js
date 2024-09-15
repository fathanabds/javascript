class Shape {
  paint() {
    return 'paint shape';
  }
}

class Circle extends Shape {
  paint() {
    console.log(super.paint());
    return 'paint circle';
  }
}

const circle = new Circle();
console.log(circle.paint());
