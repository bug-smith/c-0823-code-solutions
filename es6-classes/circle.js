/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(area, perimeter, radius) {
    super(area, perimeter);
    this.radius = radius;
  }

  describe() {
    const string = `The area of the circle is ${this.area}, the perimeter is ${this.perimeter}, and the radius is ${this.radius}`;
    return string;
  }
}

const newCircle = new Circle(10, 8, 9);
console.log(newCircle.describe());
