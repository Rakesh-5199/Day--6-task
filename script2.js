
// get radius 
class Circle {
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
  
    getRadius() {
      return this.radius;
    }
  }
  
 
  const myCircle = new Circle();
  console.log("Radius:", myCircle.getRadius()); // Output: Radius: 1
  
  // get area
  class Circle {
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
  
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
 
  const myCircle = new Circle();
  console.log("Area:", myCircle.getArea()); // Output: Area: 3.141592653589793
  
 
  // get circumfernece
  class Circle {
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  // Example usage
  const myCircle = new Circle();
  console.log("Circumference:", myCircle.getCircumference()); // Output: Circumference: 6.283185307179586

  //get color
  class Circle {
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
  
    getColor() {
      return this.color;
    }
  }
  
  // Example usage
  const myCircle = new Circle();
  console.log("Color:", myCircle.getColor()); // Output: Color: red
  
  