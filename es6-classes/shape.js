/* exported Shape */
class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    const string = `The area of the shape is ${this.area} and the perimeter is ${this.perimeter}`;
    return string;
  }
}

const ShapeVar = new Shape(6, 10);
console.log(ShapeVar.describe());
