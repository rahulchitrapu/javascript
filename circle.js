

let Shape = require('./shape')


export class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    calculateArea() {
        console.log(`${this.color}  area is calculated`)

    }
}

module.exports = Circle