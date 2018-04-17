let input;
let button;
let total = 0;
let x = 0;
let orbitals = [];
let wanderspeedx = 4;
let wanderspeedy = 4;
let orbitalArray = [];
let counter = 0;
let numArray = [];
let shapeArray = [];

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
  // creates input
  input = createInput('abcdefghijklmnopqrstuvwxyz');
  // moves input within the canvas
  input.position(20, 20);
  // runs the newText function below which logs the new text in the console
  input.changed(newText);
  // creates button
  button = createButton('submit');
  // positions the button
  button.position(165, 20);
  // runs the submit function when the button is pressed
  button.mouseClicked(submit);
  // orbitals.push(new Orbital((numArray[i] - 96)*10, 0, (numArray[i] - 96),(numArray[i] - 96)))
  // button.mouseClicked(clear);
}

function draw() {
  background(0);
  translate(width/2, height/2);
  scale(.25);
  // ellipse(0, 0, 20,20);
  for(var i = 0; i < orbitals.length; i++){
      orbitals[i].display(numArray[i]);
      orbitals[i].twist(x/4);
}

}

function newText(){
  // logs the input value in the console
  console.log(input.value())
}

function submit(){
  let numArray = [];
  counter = counter+1
  // creates a local word variable
  word = input.value();
  // loop that creates the integers
  for(var i = 0; i < word.length; i++){
    // changes each of the characters into numbers
    var num = word.charCodeAt(i);
    // adds each number determined from the charCode into the numArray
    numArray.push(num);

    // adds all of the charCodes together
    total = total + num;
    // pushes
    orbitals.push(new Orbital((numArray[i] - 96)*10, 0, (numArray[i] - 96),(numArray[i] - 96)))

  }
  // creates an array from the input value and labels it wordArray
  let wordArray = Array.from(input.value());
  // logs the most recent orbital
  orbitalArray.push(orbitals);
  shapeArray.push(orbitalArray);
  console.log(shapeArray);
  // console.log(orbitalArray);
  // console.log(counter);

}


function clear(){
  for(var i = 0; i < word.length; i++){
    orbitals.splice(orbitals[i]);
  }
  console.log(orbitals);
}
