class Triangle {
    constructor() {
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      const svgString = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
      return svgString;
    }
  }
  
  class Circle {
    constructor() {
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      const svgString = `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
      return svgString;
    }
  }
  
  class Square {
    constructor() {
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      const svgString = `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
      return svgString;
    }
  }
  
  module.exports = { Triangle, Circle, Square };