function parseCount(value) {
    const parsedVal = Number.parseFloat(value);
    if (isNaN(parsedVal)) {
      throw new Error("Невалидное значение");
    }
    return parsedVal;
  }
  
  function validateCount(value) {
    try {
      return parseCount(value);
    } catch (error) {
      return error;
    }
  }

  class Triangle {
    constructor(sideA, sideB, sideC) {
      this.sideA = sideA;
      this.sideB = sideB;
      this.sideC = sideC;
  
      if (!this.trueTriangle()) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
    }
  
    trueTriangle() {
      return (
        this.sideA + this.sideB > this.sideC &&
        this.sideB + this.sideC > this.sideA &&
        this.sideC + this.sideA > this.sideB
      );
    }
  
    get perimeter() {
      return this.sideA + this.sideB + this.sideC;
    }
  
    get area() {
      const halfPerimeter = this.perimeter / 2;
      const allSquared =
        halfPerimeter *
        (halfPerimeter - this.sideA) *
        (halfPerimeter - this.sideB) *
        (halfPerimeter - this.sideC);
      const area = Math.sqrt(allSquared);
      return parseFloat(area.toFixed(3));
    }
  }
  
  function getTriangle(sideA, sideB, sideC) {
    try {
      const triangle = new Triangle(sideA, sideB, sideC);
      return (triangle);
    } catch (error) {
      const voidTriangle = {
        get perimeter() {
          return ("Ошибка! Треугольник не существует");
        },
        get area() {
          return ("Ошибка! Треугольник не существует");
        },
      };
      return (voidTriangle);
    }
  }


  // 5 часов было потрачено на 10 переписок кода из-за того, что не поставил ! в if (!this.trueTriangle()) { XD