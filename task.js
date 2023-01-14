function parseCount (value){
    let result = Number.parseInt(value, 10);
    if(Number.isNaN(result)){
        throw new Error("Невалидное значение");
    }else{
        return result;
    }
}
function validateCount (value){
    try {
        let result = parseCount(value);
       // isNaN(result);
        return result;
      } catch (error) {
        return error;
      }
}

class Triangle {
    constructor(a, b, c){
        if( a + b < c || b + c < a || a + c < b){
            throw new Error("Треугольник с такими сторонами не существует");
        }else{
            this.a = a;
            this.b = b;
            this.c = c;
        }
        
    }
    getPerimeter(){
        return this.a + this.b + this.c;
    }
    getArea(){
        let p = this.getPerimeter()/2;
        let square = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
        return Number.parseFloat(square);
    }
}
function getTriangle(a, b, c){
   
    try {
        return new Triangle(a, b, c)
    }catch(Error){
        let errorTriangle = new Object;
        errorTriangle.getArea = () => {
            return String("Ошибка! Треугольник не существует");
        }
        errorTriangle.getPerimeter  = () => {
            return String("Ошибка! Треугольник не существует");
        }
        return errorTriangle;
    }
}