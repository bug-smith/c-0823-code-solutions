/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(Math.PI * radius * radius, 2 * Math.PI * radius);
    this.radius = radius;
  }

  describe() {
    return (
      super.describe() + `, and the radius of the circle is ${this.radius}`
    );
  }
}

const newCircle = new Circle(10);
console.log(newCircle.describe());
