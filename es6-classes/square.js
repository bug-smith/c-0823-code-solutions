/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  constructor(area, perimeter, width) {
    super(area, perimeter);
    this.width = width;
  }

  describe() {
    const string = `The area of the square is ${this.area}, the perimeter is ${this.perimeter}, and the width is ${this.width}`;
    return string;
  }
}

const newSquare = new Square(7);
console.log(newSquare.describe());
