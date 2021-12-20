class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.hypot(dx, dy);
    }
  }
  
  const p1 = new Point(7, 2);
  const p2 = new Point(3, 8);

  const p3 = new Point(5,9);
  const p4 = new Point(8,3);
  
  console.log(Point.distance(p1, p2));
  console.log(Point.distance(p3, p4));