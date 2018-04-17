let input;
let button;
let allNumArrays = [];
let totalNumArray = [];
let shapeArray = [];
let x;
let fadeValue = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  // creates input
  input = createInput('');
  // positions input
  input.position(20, 20);
  // creates button
  button = createButton('submit');
  // button position
  button.position(165, 20);
  // runs the submit function when submit is pressed
  button.mouseClicked(submit);

}

function draw(){
  background(0);
  // scales the canvas
  scale(.5);
  // creates a for loop that controls the animations
  for(var i = 0; i < shapeArray.length; i++){
    // shows each circle
    shapeArray[i].display();
    // makes each circle move
    shapeArray[i].move();
    // keeps the circles from moving off the screen
    shapeArray[i].update();

    if(shapeArray[i].x > windowWidth*2){
      shapeArray[i].speedx = shapeArray[i].speedx * -1;
    }
    if(shapeArray[i].x < 25){
      shapeArray[i].speedx = shapeArray[i].speedx * -1;
    }
    if(shapeArray[i].y < 25){
      shapeArray[i].speedy = shapeArray[i].speedy * -1;
    }
    if(shapeArray[i].y > windowHeight*2){
      shapeArray[i].speedy = shapeArray[i].speedy * -1;
    }
  }
}

function submit(){
  let total = 0;
  let numArray = [];
  // assigns the input   value to a local variable
  word = input.value();
  // for loop that converts the word into an array of numbers
  for(var i = 0; i < word.length; i++){
    // creates a number for each character of a word
    var num = word.charCodeAt(i) - 96;
    // adds each number to an array
    numArray.push(num);
    // creates a total from all of the numbers
    total = total + num;
  }
  // creates a new shape instance every time submit is pressed
  shape = new NewInput(total, total, total, total, total, random(0,255), random(0,255), random(0,255), x);
  // adds each individual input into its own array
  allNumArrays.push(numArray);
  // adds each individual total into an array
  totalNumArray.push(total);
  shapeArray.push(shape);
  // console.log(numArray);
  // console.log(allNumArrays);
  // console.log(total);
  // console.log(totalNumArray);
  console.log(shapeArray);

}
