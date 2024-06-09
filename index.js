const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function promptUser() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal number):',
    },
  ]);
  return answers;
}

function generateSVG(answers) {
  let shape;
  switch (answers.shape) {
    case 'Triangle':
      shape = new Triangle();
      break;
    case 'Circle':
      shape = new Circle();
      break;
    case 'Square':
      shape = new Square();
      break;
  }
  shape.setColor(answers.shapeColor);

  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="200">
    ${shape.render()}
    <text x="150" y="100" font-family="Arial" font-size="24" fill="${answers.textColor}" text-anchor="middle">${answers.text}</text>
  </svg>`;

  fs.writeFileSync('logo.svg', svgString, 'utf-8');
  console.log('Generated logo.svg');
}

async function main() {
  const answers = await promptUser();
  generateSVG(answers);
}

main();