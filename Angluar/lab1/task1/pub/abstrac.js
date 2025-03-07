"use strict";
class Shape {
    area() {
    }
    toString() {
    }
    getPerimeter() {
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
    toString() {
        console.log(`The width is ${this.width}, height is ${this.height}, 
            area ${this.area()} and Premitere is ${this.getPerimeter()}`);
    }
}
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
    getPerimeter() {
        return this.side * 4;
    }
    toString() {
        console.log(`The  side is ${this.side} 
            area ${this.area()} and Premitere is ${this.getPerimeter()}`);
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    toString() {
        console.log(`The radius is ${this.radius} 
            area ${this.area()} and Premitere is ${this.getPerimeter()}`);
    }
}
let circle = new Circle(3);
console.log(circle.area());
console.log(circle.getPerimeter());
console.log(circle.toString());
let rect = new Rectangle(5, 4);
console.log(rect.area());
console.log(rect.getPerimeter());
console.log(rect.toString());
