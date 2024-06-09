const Triangle = require('./shapes').Triangle;

describe('Triangle', () => {
  test('render method should return SVG string with correct color', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    const svgString = triangle.render();
    expect(svgString).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

const { Circle, Square } = require('./shapes');

describe('Circle', () => {
  test('render method should return SVG string with correct color', () => {
    const circle = new Circle();
    circle.setColor('green');
    const svgString = circle.render();
    expect(svgString).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
  });
});

describe('Square', () => {
  test('render method should return SVG string with correct color', () => {
    const square = new Square();
    square.setColor('red');
    const svgString = square.render();
    expect(svgString).toEqual('<rect x="50" y="50" width="200" height="200" fill="red" />');
  });
});