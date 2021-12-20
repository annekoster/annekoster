class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    
    get area() {                        //getter
      return this.calcArea();
    }
  
    calcArea() {                        // method
      return this.height * this.width;
    }
  }
  
  const square = new Rectangle(5, 5);
  
  console.log(square.area); // 25



