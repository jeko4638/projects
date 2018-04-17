let input;
let button;
let masterArray = [];
let orbit = [];
let orbitArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // sets the rotation unit to degrees
  angleMode(DEGREES);

// INPUT CREATION
  // creates an input and saves it within the input variable
  input = createInput('');
  // changes the location of the input
  input.position(20, 20);

// BUTTON CREATION
  // creates a button and saves it within the button variable
  button = createButton('submit');
  // changes the location of the button
  button.position(165, 20);
  // runs the submit function once the button is pressed
  button.mouseClicked(submit);

}

function draw() {
  background(0);

// CREATE INTEGERS
// for(var i = 0; i < )


// DRAW THE ORBITS
  // This nested for loop draws each orbit
// HEY IAN/JOEL: this was the best I could do at attempting to access the
// object arrays that are located within orbitArray
// it still doesn't work though
  for(var i = 0; i < orbitArray.length; i++){
    for(var i = 0; i < orbit.length; i++){
      orbitArray[i][i].display();
    }
  }
}


//runs everythime the submit button is pressed
function submit(){

// INTEGER CREATION

  // VARIABLES
  // creates an array to put the integers in (also clears the array every submit instance)
  let numArray = []
  // saves the input word into a word variable
  let word = input.value();

  // INTEGER FOR LOOP
  // runs for the length of the word
  for(var i = 0; i < word.length; i++){
    // creates an integer value from each letter and saves it in a num variable
    var num = word.charCodeAt(i) - 96;
    // adds our new number to an array
    numArray.push(num);
  }

// MASTER ARRAY CREATION
  // creates an array from numArrays
  masterArray.push(numArray);

// PARTICLE CREATION
  // these for loops store each individual particle into an array
    for(var i = 0; i < numArray.length; i++){
      orbit.push(new Particle(numArray[i]));
    }

// ORBIT CREATION
  // this pushes each orbit into another array
  orbitArray.push(orbit);
  }
